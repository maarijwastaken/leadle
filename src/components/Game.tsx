import { DateTime } from "luxon";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  countries,
  getCountryName,
  sanitizeCountryName,
  setCountriesLeaderInfo,
} from "../domain/countries";
import { useGuesses } from "../hooks/useGuesses";
import { CountryInput } from "./CountryInput";
import * as geolib from "geolib";
import { Share } from "./Share";
import { Guesses } from "./Guesses";
import { useTranslation } from "react-i18next";
import { SettingsData } from "../hooks/useSettings";
import { useMode } from "../hooks/useMode";
import { useCountry } from "../hooks/useCountry";
import { getLeaderImage } from "../hooks/getLeaderImage"
import { getCountriesInfo } from "../hooks/getCountriesInfo";
import { get } from "http";

function getDayString() {
  return DateTime.now().toFormat("yyyy-MM-dd");
}

const MAX_TRY_COUNT = 6;

interface GameProps {
  settingsData: SettingsData;
}

async function testFunction(img_link: string) {
  const countryImage : string = await getLeaderImage(img_link);
  console.log("COUNTRYYY", countryImage)
  return countryImage;
}

export function Game({ settingsData }: GameProps) {
  const { t, i18n } = useTranslation();
  const dayString = useMemo(getDayString, []);

  const country = useCountry(dayString);
  const [leaderImage, setLeaderImage] = useState("");

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, addGuess] = useGuesses(dayString);
  const [allLeadersMode, seAllLeadersMode] = useMode(
    "allLeadersMode",
    dayString,
    settingsData.allLeadersMode
  );
  const [rotationMode, setRotationMode] = useMode(
    "rotationMode",
    dayString,
    settingsData.guessLeaderMode
  );

  const gameEnded =
    guesses.length === MAX_TRY_COUNT ||
    guesses[guesses.length - 1]?.distance === 0;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const guessedCountry = countries.find(
        (country) =>
          sanitizeCountryName(
            getCountryName(country)
          ) === sanitizeCountryName(currentGuess)
      );

      if (guessedCountry == null) {
        toast.error(t("unknownCountry"));
        return;
      }

      const newGuess = {
        name: currentGuess,
        distance: geolib.getDistance(guessedCountry, country),
        direction: geolib.getCompassDirection(guessedCountry, country),
      };

      addGuess(newGuess);
      setCurrentGuess("");

      if (newGuess.distance === 0) {
        toast.success(t("welldone"), { delay: 2000 });
      }
    },
    [addGuess, country, currentGuess, t]
  );

  useEffect(() => {
    getLeaderImage(country.img_link)
    .then((link) => setLeaderImage(link))
    if (
      guesses.length === MAX_TRY_COUNT &&
      guesses[guesses.length - 1].distance > 0
    ) {
      toast.info(getCountryName(country).toUpperCase(), {
        autoClose: false,
        delay: 2000,
      });
    }
  }, [country, guesses]);

  return (
    <div className="flex-grow flex flex-col mx-2">
      <div className="flex my-1 relative w-full flex-shrink py-2 relative">
        <img
          className={`max-h-52 m-auto transition-transform duration-700 ease-in dark:invert h-full`}
          alt="country to guess"
          src={leaderImage}
          // src={`${getLeaderImage(country.img_link)}`}
        />
        <button className="font-bold rounded p-1 border-2 uppercase mb-2 hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-slate-800 dark:active:bg-slate-700" type="button">
           Try a different leader</button>
      </div>
      <Guesses
        rowCount={MAX_TRY_COUNT}
        guesses={guesses}
        settingsData={settingsData}
      />
      <div className="my-2">
        <button>Test</button>
        {gameEnded ? (
          <>
            <Share
              guesses={guesses}
              dayString={dayString}
              settingsData={settingsData}
              allLeadersMode={allLeadersMode}
              rotationMode={rotationMode}
            />
            <a
              className="underline w-full text-center block mt-4"
              href={`https://www.google.com/maps?q=${getCountryName(
                country
              )}&hl=${i18n.resolvedLanguage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("showOnGoogleMaps")}
            </a>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <CountryInput
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
              />
              <button
                className="border-2 uppercase my-0.5 hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-slate-800 dark:active:bg-slate-700"
                type="submit"
              >
                🌍 {t("guess")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
