// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

import { getCountriesInfo } from "../hooks/getCountriesInfo";

const countryCodesWithImage = [
  "ad",
  "ao",
  "ax",
  "bg",
  "bo",
  "by",
  "ch",
  "cr",
  "de",
  "ee",
  "fj",
  "ge",
  "gn",
  "gw",
  "hu",
  "iq",
  "ke",
  "kr",
  "li",
  "ly",
  "mk",
  "ms",
  "mz",
  "nl",
  "pa",
  "pm",
  "re",
  "sc",
  "sk",
  "st",
  "tf",
  "tn",
  "ug",
  "vg",
  "yt",
  "ae",
  "aq",
  "az",
  "bh",
  "bq",
  "bz",
  "ci",
  "cu",
  "dj",
  "eg",
  "fk",
  "gf",
  "gp",
  "gy",
  "id",
  "ir",
  "kg",
  "kw",
  "lk",
  "ma",
  "ml",
  "mt",
  "na",
  "no",
  "pe",
  "pn",
  "ro",
  "sd",
  "sl",
  "sv",
  "tg",
  "to",
  "us",
  "vi",
  "za",
  "af",
  "ar",
  "ba",
  "bi",
  "br",
  "ca",
  "ck",
  "cv",
  "dk",
  "eh",
  "fo",
  "gg",
  "gq",
  "hk",
  "ie",
  "is",
  "kh",
  "ky",
  "lr",
  "mc",
  "mm",
  "mu",
  "nc",
  "np",
  "pf",
  "pr",
  "rs",
  "se",
  "sm",
  "sx",
  "th",
  "tr",
  "uy",
  "vn",
  "zm",
  "ag",
  "as",
  "bb",
  "bj",
  "bs",
  "cc",
  "cl",
  "cw",
  "dm",
  "er",
  "fr",
  "gh",
  "gr",
  "hm",
  "il",
  "it",
  "ki",
  "kz",
  "ls",
  "md",
  "mn",
  "mv",
  "ne",
  "nr",
  "pg",
  "pt",
  "ru",
  "sg",
  "sn",
  "sy",
  "tj",
  "tt",
  "uz",
  "vu",
  "zw",
  "ai",
  "at",
  "bd",
  "bl",
  "bt",
  "cd",
  "cm",
  "cx",
  "do",
  "es",
  "ga",
  "gi",
  "gs",
  "hn",
  "im",
  "jm",
  "km",
  "la",
  "lt",
  "me",
  "mo",
  "mw",
  "nf",
  "nu",
  "ph",
  "pw",
  "rw",
  "sh",
  "so",
  "sz",
  "tk",
  "tw",
  "va",
  "wf",
  "al",
  "au",
  "be",
  "bm",
  "bv",
  "cf",
  "cn",
  "cy",
  "dz",
  "et",
  "gb",
  "gl",
  "gt",
  "hr",
  "in",
  "jo",
  "kn",
  "lb",
  "lu",
  "mf",
  "mq",
  "mx",
  "ng",
  "nz",
  "pk",
  "py",
  "sa",
  "si",
  "sr",
  "tc",
  "tl",
  "tz",
  "vc",
  "ws",
  "am",
  "aw",
  "bf",
  "bn",
  "bw",
  "cg",
  "co",
  "cz",
  "ec",
  "fi",
  "gd",
  "gm",
  "gu",
  "ht",
  "io",
  "jp",
  "kp",
  "lc",
  "lv",
  "mg",
  "mr",
  "my",
  "ni",
  "om",
  "pl",
  "qa",
  "sb",
  "sj",
  "ss",
  "td",
  "tm",
  "ua",
  "ve",
  "ye",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
  title: string;
  leader: string;
  img_link: string;
}

export const countries: Country[] = [
  {
    code: "AF",
    latitude: 33.93911,
    longitude: 67.709953,
    name: "Afghanistan",
    title: "Supreme Leader of Afghanistan",
    leader: "Hibatullah Akhundzada",
    img_link: "Supreme_Leader_of_Afghanistan"
},
{
    code: "AL",
    latitude: 41.153332,
    longitude: 20.168331,
    name: "Albania",
    title: "Prime Minister of Albania",
    leader: "Edi Rama",
    img_link: "Prime_Minister_of_Albania"
},
{
    code: "DZ",
    latitude: 28.033886,
    longitude: 1.659626,
    name: "Algeria",
    title: "President of Algeria",
    leader: "Abdelmadjid Tebboune",
    img_link: "President_of_Algeria"
},
{
    code: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
    title: "Prime Minister of Andorra",
    leader: "Xavier Espot",
    img_link: "Prime_Minister_of_Andorra"
},
{
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    name: "United Arab Emirates", 
    title: "President of the United Arab Emirates",
    leader: "Mohamed bin Zayed Al Nahyan",
    img_link: "President_of_the_United_Arab_Emirates",
},
{
    code: "AO",
    latitude: -11.202692,
    longitude: 17.873887,
    name: "Angola",
    title: "President of Angola",
    leader: "João Lourenço",
    img_link: "President_of_Angola"
},
{
    code: "AG",
    latitude: 17.060816,
    longitude: -61.796428,
    name: "Antigua and Barbuda",
    title: "Prime Minister of Antigua and Barbuda",
    leader: "Gaston Browne",
    img_link: "Prime_Minister_of_Antigua_and_Barbuda"
},
{
    code: "AR",
    latitude: -38.416097,
    longitude: -63.616672,
    name: "Argentina",
    title: "President of Argentina",
    leader: "Alberto Fernández",
    img_link: "President_of_Argentina"
},
{
    code: "AM",
    latitude: 40.069099,
    longitude: 45.038189,
    name: "Armenia",
    title: "Prime Minister of Armenia",
    leader: "Nikol Pashinyan",
    img_link: "Prime_Minister_of_Armenia"
},
{
    code: "AU",
    latitude: -25.274398,
    longitude: 133.775136,
    name: "Australia",
    title: "Prime Minister of Australia",
    leader: "Anthony Albanese",
    img_link: "Prime_Minister_of_Australia"
},
{
    code: "AT",
    latitude: 47.516231,
    longitude: 14.550072,
    name: "Austria",
    title: "Chancellor of Austria",
    leader: "Karl Nehammer",
    img_link: "Chancellor_of_Austria"
},
{
    code: "AZ",
    latitude: 40.143105,
    longitude: 47.576927,
    name: "Azerbaijan",
    title: "President of Azerbaijan",
    leader: "Ilham Aliyev",
    img_link: "President_of_Azerbaijan"
},
{
    code: "BA",
    latitude: 43.915886,
    longitude: 17.679076,
    name: "Bosnia and Herzegovina", 
    title: "High Representative for Bosnia and Herzegovina",
    leader: "Christian Schmidt",
    img_link: "High_Representative_for_Bosnia_and_Herzegovina",
},
{
    code: "BH",
    latitude: 25.930414,
    longitude: 50.637772,
    name: "Bahrain",
    title: "King of Bahrain",
    leader: "Hamad bin Isa Al Khalifa",
    img_link: "King_of_Bahrain"
},
{
    code: "BD",
    latitude: 23.684994,
    longitude: 90.356331,
    name: "Bangladesh",
    title: "Prime Minister of Bangladesh",
    leader: "Sheikh Hasina",
    img_link: "Prime_Minister_of_Bangladesh"
},
{
    code: "BB",
    latitude: 13.193887,
    longitude: -59.543198,
    name: "Barbados",
    title: "Prime Minister of Barbados",
    leader: "Mia Mottley",
    img_link: "Prime_Minister_of_Barbados"
},
{
    code: "BY",
    latitude: 53.709807,
    longitude: 27.953389,
    name: "Belarus",
    title: "President of Belarus",
    leader: "Alexander Lukashenko",
    img_link: "President_of_Belarus"
},
{
    code: "BE",
    latitude: 50.503887,
    longitude: 4.469936,
    name: "Belgium",
    title: "Prime Minister of Belgium",
    leader: "Alexander De Croo",
    img_link: "Prime_Minister_of_Belgium"
},
{
    code: "BZ",
    latitude: 17.189877,
    longitude: -88.49765,
    name: "Belize",
    title: "Prime Minister of Belize",
    leader: "Johnny Briceño",
    img_link: "Prime_Minister_of_Belize"
},
{
    code: "BJ",
    latitude: 9.30769,
    longitude: 2.315834,
    name: "Benin",
    title: "President of Benin",
    leader: "Patrice Talon",
    img_link: "President_of_Benin"
},
{
    code: "BT",
    latitude: 27.514162,
    longitude: 90.433601,
    name: "Bhutan",
    title: "Prime Minister of Bhutan",
    leader: "Lotay Tshering",
    img_link: "Prime_Minister_of_Bhutan"
},
{
    code: "BO",
    latitude: -16.290154,
    longitude: -63.588653,
    name: "Bolivia",
    title: "President of Bolivia",
    leader: "Luis Arce",
    img_link: "President_of_Bolivia"
},
{
    code: "BW",
    latitude: -22.328474,
    longitude: 24.684866,
    name: "Botswana",
    title: "President of Botswana",
    leader: "Mokgweetsi Masisi",
    img_link: "President_of_Botswana"
},
{
    code: "BR",
    latitude: -14.235004,
    longitude: -51.92528,
    name: "Brazil",
    title: "President of Brazil",
    leader: "Luiz Inácio Lula da Silva",
    img_link: "President_of_Brazil"
},
{ 
    code: "BS", 
    latitude: 25.03428, 
    longitude: -77.39628, 
    name: "Bahamas", 
    title: "Prime Minister of the Bahamas",
    leader: "Philip Davis",
    img_link: "Philip_Davis_(Bahamian_politician)",
},
{
    code: "BN",
    latitude: 4.535277,
    longitude: 114.727669,
    name: "Brunei",
    title: "Sultan of Brunei",
    leader: "Prime Minister",
    img_link: "Sultan_of_Brunei"
},
{
    code: "BG",
    latitude: 42.733883,
    longitude: 25.48583,
    name: "Bulgaria",
    title: "President of Bulgaria",
    leader: "Rumen Radev",
    img_link: "President_of_Bulgaria"
},
{
    code: "BG",
    latitude: 42.733883,
    longitude: 25.48583,
    name: "Bulgaria",
    title: "Prime Minister of Bulgaria",
    leader: "Galab Donev",
    img_link: "Prime_Minister_of_Bulgaria"
},
{
    code: "BI",
    latitude: -3.373056,
    longitude: 29.918886,
    name: "Burundi",
    title: "President of Burundi",
    leader: "Évariste Ndayishimiye",
    img_link: "President_of_Burundi"
},
{
    code: "KH",
    latitude: 12.565679,
    longitude: 104.990963,
    name: "Cambodia",
    title: "Prime Minister of Cambodia",
    leader: "Hun Sen",
    img_link: "Prime_Minister_of_Cambodia"
},
{
    code: "CM",
    latitude: 7.369722,
    longitude: 12.354722,
    name: "Cameroon",
    title: "President of Cameroon",
    leader: "Paul Biya",
    img_link: "President_of_Cameroon"
},
{
    code: "CA",
    latitude: 56.130366,
    longitude: -106.346771,
    name: "Canada",
    title: "Prime Minister of Canada",
    leader: "Justin Trudeau",
    img_link: "Prime_Minister_of_Canada"
},
{
    code: "CD",
    latitude: -4.038333,
    longitude: 21.758664,
    name: "Democratic Republic of the Congo", 
    title: "President of the Democratic Republic of the Congo",
    leader: "Félix Tshisekedi",
    img_link: "President_of_the_Democratic_Republic_of_the_Congo",
},
{
    code: "CF",
    latitude: 6.611111,
    longitude: 20.939444,
    name: "Central African Republic", 
    title: "President of the Central African Republic",
    leader: "Faustin-Archange Touadéra",
    img_link: "President_of_the_Central_African_Republic",
},
{
    code: "CG",
    latitude: -0.228021,
    longitude: 15.827659,
    name: "Congo", 
    title: "President of the Republic of the Congo",
    leader: "Denis Sassou Nguesso",
    img_link: "President_of_the_Republic_of_the_Congo",
},
{
    code: "CI",
    latitude: 7.539989,
    longitude: -5.54708,
    name: "Ivory Coast", // Changed to English name (from Côte d'Ivoire) 
    title: "President of the Ivory Coast",
    leader: "Alassane Ouattara",
    img_link: "President_of_the_Ivory_Coast",
},
{
    code: "CV",
    latitude: 16.002082,
    longitude: -24.013197,
    name: "Cape Verde",
    title: "Prime Minister of Cape Verde",
    leader: "Ulisses Correia e Silva",
    img_link: "Prime_Minister_of_Cape_Verde"
},
{
    code: "TD",
    latitude: 15.454166,
    longitude: 18.732207,
    name: "Chad",
    title: "President of Chad",
    leader: "Mahamat Déby",
    img_link: "President_of_Chad"
},
{
    code: "CL",
    latitude: -35.675147,
    longitude: -71.542969,
    name: "Chile",
    title: "President of Chile",
    leader: "Gabriel Boric",
    img_link: "President_of_Chile"
},
{
    code: "CN",
    latitude: 35.86166,
    longitude: 104.195397,
    name: "China",
    title: "General Secretary of the Communist Party of China",
    leader: "Xi Jinping",
    img_link: "General_Secretary_of_the_Communist_Party_of_China"
},
{
    code: "CO",
    latitude: 4.570868,
    longitude: -74.297333,
    name: "Colombia",
    title: "President of Colombia",
    leader: "Gustavo Petro",
    img_link: "President_of_Colombia"
},
{
    code: "CR",
    latitude: 9.748917,
    longitude: -83.753428,
    name: "Costa Rica",
    title: "President of Costa Rica",
    leader: "Rodrigo Chaves Robles",
    img_link: "President_of_Costa_Rica"
},
{
    code: "HR",
    latitude: 45.1,
    longitude: 15.2,
    name: "Croatia",
    title: "Prime Minister of Croatia",
    leader: "Andrej Plenković",
    img_link: "Prime_Minister_of_Croatia"
},
{
    code: "CU",
    latitude: 21.521757,
    longitude: -77.781167,
    name: "Cuba",
    title: "First Secretary of the Communist Party of Cuba",
    leader: "Miguel Díaz-Canel",
    img_link: "First_Secretary_of_the_Communist_Party_of_Cuba"
},
{
    code: "CY",
    latitude: 35.126413,
    longitude: 33.429859,
    name: "Cyprus",
    title: "President of Cyprus",
    leader: "Nikos Christodoulides",
    img_link: "President_of_Cyprus"
},
{
    code: "CZ",
    latitude: 49.817492,
    longitude: 15.472962,
    name: "Czech Republic", 
    title: "Prime Minister of the Czech Republic",
    leader: "Petr Fiala",
    img_link: "Prime_Minister_of_the_Czech_Republic",
},
{
    code: "DK",
    latitude: 56.26392,
    longitude: 9.501785,
    name: "Denmark",
    title: "Prime Minister of Denmark",
    leader: "Mette Frederiksen",
    img_link: "Prime_Minister_of_Denmark"
},
{
    code: "DJ",
    latitude: 11.825138,
    longitude: 42.590275,
    name: "Djibouti",
    title: "President of Djibouti",
    leader: "Ismaïl Omar Guelleh",
    img_link: "President_of_Djibouti"
},
{
    code: "DM",
    latitude: 15.414999,
    longitude: -61.370976,
    name: "Dominica",
    title: "Prime Minister of Dominica",
    leader: "Roosevelt Skerrit",
    img_link: "Prime_Minister_of_Dominica"
},
{
    code: "DO",
    latitude: 18.735693,
    longitude: -70.162651,
    name: "Dominican Republic", 
    title: "President of the Dominican Republic",
    leader: "Luis Abinader",
    img_link: "President_of_the_Dominican_Republic",
},
{
    code: "EC",
    latitude: -1.831239,
    longitude: -78.183406,
    name: "Ecuador",
    title: "President of Ecuador",
    leader: "Guillermo Lasso",
    img_link: "President_of_Ecuador"
},
{
    code: "EG",
    latitude: 26.820553,
    longitude: 30.802498,
    name: "Egypt",
    title: "President of Egypt",
    leader: "Abdel Fattah el-Sisi",
    img_link: "President_of_Egypt"
},
{
    code: "SV",
    latitude: 13.794185,
    longitude: -88.89653,
    name: "El Salvador",
    title: "President of El Salvador",
    leader: "Nayib Bukele",
    img_link: "President_of_El_Salvador"
},
{
    code: "GQ",
    latitude: 1.650801,
    longitude: 10.267895,
    name: "Equatorial Guinea",
    title: "President of Equatorial Guinea",
    leader: "Teodoro Obiang Nguema Mbasogo",
    img_link: "President_of_Equatorial_Guinea"
},
{
    code: "ER",
    latitude: 15.179384,
    longitude: 39.782334,
    name: "Eritrea",
    title: "President of Eritrea",
    leader: "Isaias Afwerki",
    img_link: "President_of_Eritrea"
},
{
    code: "EE",
    latitude: 58.595272,
    longitude: 25.013607,
    name: "Estonia",
    title: "Prime Minister of Estonia",
    leader: "Kaja Kallas",
    img_link: "Prime_Minister_of_Estonia"
},
{
    code: "ET",
    latitude: 9.145,
    longitude: 40.489673,
    name: "Ethiopia",
    title: "Prime Minister of Ethiopia",
    leader: "Abiy Ahmed",
    img_link: "Prime_Minister_of_Ethiopia"
},
{
    code: "FJ",
    latitude: -16.578193,
    longitude: 179.414413,
    name: "Fiji",
    title: "Prime Minister of Fiji",
    leader: "Sitiveni Rabuka",
    img_link: "Prime_Minister_of_Fiji"
},
{
    code: "FI",
    latitude: 61.92411,
    longitude: 25.748151,
    name: "Finland",
    title: "Prime Minister of Finland",
    leader: "Sanna Marin",
    img_link: "Prime_Minister_of_Finland"
},
{
    code: "FR",
    latitude: 46.227638,
    longitude: 2.213749,
    name: "France",
    title: "President of France",
    leader: "Emmanuel Macron",
    img_link: "President_of_France"
},
{
    code: "GA",
    latitude: -0.803689,
    longitude: 11.609444,
    name: "Gabon",
    title: "President of Gabon",
    leader: "Ali Bongo Ondimba",
    img_link: "President_of_Gabon"
},
{
    code: "GB",
    latitude: 55.378051,
    longitude: -3.435973,
    name: "United Kingdom", 
    title: "Prime Minister of the United Kingdom",
    leader: "Rishi Sunak",
    img_link: "Prime_Minister_of_the_United_Kingdom",
},
{
    code: "GE",
    latitude: 42.315407,
    longitude: 43.356892,
    name: "Georgia",
    title: "Prime Minister of Georgia",
    leader: "Irakli Garibashvili",
    img_link: "Prime_Minister_of_Georgia"
},
{
    code: "DE",
    latitude: 51.165691,
    longitude: 10.451526,
    name: "Germany",
    title: "Chancellor of Germany",
    leader: "Olaf Scholz",
    img_link: "Chancellor_of_Germany"
},
{
    code: "GH",
    latitude: 7.946527,
    longitude: -1.023194,
    name: "Ghana",
    title: "President of Ghana",
    leader: "Nana Akufo-Addo",
    img_link: "President_of_Ghana"
},
{ 
    code: "GM", 
    latitude: 13.443182, 
    longitude: -15.310139, 
    name: "Gambia", 
    title: "President of the Gambia",
    leader: "Adama Barrow",
    img_link: "President_of_the_Gambia",
},
{
    code: "GR",
    latitude: 39.074208,
    longitude: 21.824312,
    name: "Greece",
    title: "Prime Minister of Greece",
    leader: "Ioannis Sarmas",
    img_link: "Prime_Minister_of_Greece"
},
{
    code: "GD",
    latitude: 12.262776,
    longitude: -61.604171,
    name: "Grenada",
    title: "Prime Minister of Grenada",
    leader: "Dickon Mitchell",
    img_link: "Prime_Minister_of_Grenada"
},
{
    code: "GT",
    latitude: 15.783471,
    longitude: -90.230759,
    name: "Guatemala",
    title: "President of Guatemala",
    leader: "Alejandro Giammattei",
    img_link: "President_of_Guatemala"
},
{
    code: "GW",
    latitude: 11.803749,
    longitude: -15.180413,
    name: "Guinea-Bissau",
    title: "President of Guinea-Bissau",
    leader: "Umaro Sissoco Embaló",
    img_link: "President_of_Guinea-Bissau"
},
{
    code: "GY",
    latitude: 4.860416,
    longitude: -58.93018,
    name: "Guyana",
    title: "President of Guyana",
    leader: "Irfaan Ali",
    img_link: "President_of_Guyana"
},
{
    code: "HT",
    latitude: 18.971187,
    longitude: -72.285215,
    name: "Haiti",
    title: "Prime Minister of Haiti",
    leader: "Ariel Henry",
    img_link: "Prime_Minister_of_Haiti"
},
{
    code: "HN",
    latitude: 15.199999,
    longitude: -86.241905,
    name: "Honduras",
    title: "President of Honduras",
    leader: "Xiomara Castro",
    img_link: "President_of_Honduras"
},
{
    code: "HU",
    latitude: 47.162494,
    longitude: 19.503304,
    name: "Hungary",
    title: "Prime Minister of Hungary",
    leader: "Viktor Orbán",
    img_link: "Prime_Minister_of_Hungary"
},
{
    code: "IS",
    latitude: 64.963051,
    longitude: -19.020835,
    name: "Iceland",
    title: "Prime Minister of Iceland",
    leader: "Katrín Jakobsdóttir",
    img_link: "Prime_Minister_of_Iceland"
},
{
    code: "IN",
    latitude: 20.593684,
    longitude: 78.96288,
    name: "India",
    title: "Prime Minister of India",
    leader: "Narendra Modi",
    img_link: "Prime_Minister_of_India"
},
{
    code: "ID",
    latitude: -0.789275,
    longitude: 113.921327,
    name: "Indonesia",
    title: "President of Indonesia",
    leader: "Joko Widodo",
    img_link: "President_of_Indonesia"
},
{ 
    code: "IE", 
    latitude: 53.41291, 
    longitude: -8.24389, 
    name: "Ireland", 
    title: "Taoiseach",
    leader: "Leo Varadkar",
    img_link: "Taoiseach",
},
{
    code: "IR",
    latitude: 32.427908,
    longitude: 53.688046,
    name: "Iran",
    title: "Supreme Leader of Iran",
    leader: "Ali Khamenei",
    img_link: "Supreme_Leader_of_Iran"
},
{
    code: "IQ",
    latitude: 33.223191,
    longitude: 43.679291,
    name: "Iraq",
    title: "Prime Minister of Iraq",
    leader: "Mohammed Shia' Al Sudani",
    img_link: "Prime_Minister_of_Iraq"
},
{
    code: "IL",
    latitude: 31.046051,
    longitude: 34.851612,
    name: "Israel",
    title: "Prime Minister of Israel",
    leader: "Benjamin Netanyahu",
    img_link: "Prime_Minister_of_Israel"
},
{
    code: "IT",
    latitude: 41.87194,
    longitude: 12.56738,
    name: "Italy",
    title: "Prime Minister of Italy",
    leader: "Giorgia Meloni",
    img_link: "Prime_Minister_of_Italy"
},
{
    code: "JM",
    latitude: 18.109581,
    longitude: -77.297508,
    name: "Jamaica",
    title: "Prime Minister of Jamaica",
    leader: "Andrew Holness",
    img_link: "Prime_Minister_of_Jamaica"
},
{
    code: "JP",
    latitude: 36.204824,
    longitude: 138.252924,
    name: "Japan",
    title: "Prime Minister of Japan",
    leader: "Fumio Kishida",
    img_link: "Prime_Minister_of_Japan"
},
{
    code: "JO",
    latitude: 30.585164,
    longitude: 36.238414,
    name: "Jordan",
    title: "King of Jordan",
    leader: "Abdullah II",
    img_link: "King_of_Jordan"
},
{
    code: "KZ",
    latitude: 48.019573,
    longitude: 66.923684,
    name: "Kazakhstan",
    title: "President of Kazakhstan",
    leader: "Kassym-Jomart Tokayev",
    img_link: "President_of_Kazakhstan"
},
{
    code: "KE",
    latitude: -0.023559,
    longitude: 37.906193,
    name: "Kenya",
    title: "President of Kenya",
    leader: "William Ruto",
    img_link: "President_of_Kenya"
},
{
    code: "KI",
    latitude: -3.370417,
    longitude: -168.734039,
    name: "Kiribati",
    title: "President of Kiribati",
    leader: "Taneti Maamau",
    img_link: "President_of_Kiribati"
},
{ 
    code: "KM", 
    latitude: -11.875001, 
    longitude: 43.872219, 
    name: "Comoros", 
    title: "President of the Comoros",
    leader: "Azali Assoumani",
    img_link: "President_of_the_Comoros",
},
{
    code: "KW",
    latitude: 29.31166,
    longitude: 47.481766,
    name: "Kuwait",
    title: "Emir of Kuwait",
    leader: "Nawaf Al-Ahmad Al-Jaber Al-Sabah",
    img_link: "Emir_of_Kuwait"
},
{
    code: "KG",
    latitude: 41.20438,
    longitude: 74.766098,
    name: "Kyrgyzstan",
    title: "President of Kyrgyzstan",
    leader: "Sadyr Japarov",
    img_link: "President_of_Kyrgyzstan"
},
{
    code: "LV",
    latitude: 56.879635,
    longitude: 24.603189,
    name: "Latvia",
    title: "Prime Minister of Latvia",
    leader: "Krišjānis Kariņš",
    img_link: "Prime_Minister_of_Latvia"
},
{
    code: "LB",
    latitude: 33.854721,
    longitude: 35.862285,
    name: "Lebanon",
    title: "Prime Minister of Lebanon",
    leader: "Najib Mikati",
    img_link: "Prime_Minister_of_Lebanon"
},
{
    code: "LS",
    latitude: -29.609988,
    longitude: 28.233608,
    name: "Lesotho",
    title: "Prime Minister of Lesotho",
    leader: "Sam Matekane",
    img_link: "Prime_Minister_of_Lesotho"
},
{
    code: "LR",
    latitude: 6.428055,
    longitude: -9.429499,
    name: "Liberia",
    title: "President of Liberia",
    leader: "George Weah",
    img_link: "President_of_Liberia"
},
{
    code: "LY",
    latitude: 26.3351,
    longitude: 17.228331,
    name: "Libya",
    title: "Prime Minister of Libya",
    leader: "Abdul Hamid Dbeibeh",
    img_link: "Prime_Minister_of_Libya"
},
{
    code: "LI",
    latitude: 47.166,
    longitude: 9.555373,
    name: "Liechtenstein",
    title: "Monarchy of Liechtenstein",
    leader: "Hans-Adam II",
    img_link: "Monarchy_of_Liechtenstein"
},
{
    code: "LI",
    latitude: 47.166,
    longitude: 9.555373,
    name: "Liechtenstein",
    title: "Regent of Liechtenstein",
    leader: "Alois",
    img_link: "Regent_of_Liechtenstein"
},
{
    code: "LT",
    latitude: 55.169438,
    longitude: 23.881275,
    name: "Lithuania",
    title: "Prime Minister of Lithuania",
    leader: "Ingrida Šimonytė",
    img_link: "Prime_Minister_of_Lithuania"
},
{
    code: "LU",
    latitude: 49.815273,
    longitude: 6.129583,
    name: "Luxembourg",
    title: "Prime Minister of Luxembourg",
    leader: "Xavier Bettel",
    img_link: "Prime_Minister_of_Luxembourg"
},
{
    code: "MG",
    latitude: -18.766947,
    longitude: 46.869107,
    name: "Madagascar",
    title: "President of Madagascar",
    leader: "Andry Rajoelina",
    img_link: "President_of_Madagascar"
},
{
    code: "MH",
    latitude: 7.131474,
    longitude: 171.184478,
    name: "Marshall Islands", 
    title: "President of the Marshall Islands",
    leader: "David Kabua",
    img_link: "President_of_the_Marshall_Islands",
},
{
    code: "MK",
    latitude: 41.608635,
    longitude: 21.745275,
    name: "North Macedonia", // Dunno why it's just listed as Macedonia, that's a region not a country
    title: "Prime Minister of North Macedonia",
    leader: "Dimitar Kovačevski",
    img_link: "Prime_Minister_of_North_Macedonia",
},
{
    code: "MW",
    latitude: -13.254308,
    longitude: 34.301525,
    name: "Malawi",
    title: "President of Malawi",
    leader: "Lazarus Chakwera",
    img_link: "President_of_Malawi"
},
{
    code: "MY",
    latitude: 4.040255,
    longitude: 109.091912,
    name: "Malaysia",
    title: "Prime Minister of Malaysia",
    leader: "Anwar Ibrahim",
    img_link: "Prime_Minister_of_Malaysia"
},
{
    code: "ML",
    latitude: 17.570692,
    longitude: -3.996166,
    name: "Mali",
    title: "President of Mali",
    leader: "Assimi Goïta",
    img_link: "President_of_Mali"
},
{
    code: "MT",
    latitude: 35.937496,
    longitude: 14.375416,
    name: "Malta",
    title: "Prime Minister of Malta",
    leader: "Robert Abela",
    img_link: "Prime_Minister_of_Malta"
},
{
    code: "MR",
    latitude: 21.00789,
    longitude: -10.940835,
    name: "Mauritania",
    title: "President of Mauritania",
    leader: "Mohamed Ould Ghazouani",
    img_link: "President_of_Mauritania"
},
{
    code: "MU",
    latitude: -20.348404,
    longitude: 57.552152,
    name: "Mauritius",
    title: "Prime Minister of Mauritius",
    leader: "Pravind Jugnauth",
    img_link: "Prime_Minister_of_Mauritius"
},
{ 
    code: "MV", 
    latitude: 3.202778, 
    longitude: 73.22068, 
    name: "Maldives", 
    title: "President of the Maldives",
    leader: "Ibrahim Mohamed Solih",
    img_link: "President_of_the_Maldives",
},
{
    code: "MX",
    latitude: 23.634501,
    longitude: -102.552784,
    name: "Mexico",
    title: "President of Mexico",
    leader: "Andrés Manuel López Obrador",
    img_link: "President_of_Mexico"
},
{
    code: "FM",
    latitude: 7.425554,
    longitude: 150.550812,
    name: "Micronesia",
    title: "President of the Federated States of Micronesia",
    leader: "Wesley Simina",
    img_link: "President_of_the_Federated_States_of_Micronesia"
},
{
    code: "MD",
    latitude: 47.411631,
    longitude: 28.369885,
    name: "Moldova",
    title: "President of Moldova",
    leader: "Maia Sandu",
    img_link: "President_of_Moldova"
},
{
    code: "MD",
    latitude: 47.411631,
    longitude: 28.369885,
    name: "Moldova",
    title: "Prime Minister of Moldova",
    leader: "Dorin Recean",
    img_link: "Prime_Minister_of_Moldova"
},
{
    code: "MC",
    latitude: 43.750298,
    longitude: 7.412841,
    name: "Monaco",
    title: "Monarchy of Monaco",
    leader: "Albert II",
    img_link: "Monarchy_of_Monaco"
},
{
    code: "MN",
    latitude: 46.862496,
    longitude: 103.846656,
    name: "Mongolia",
    title: "Prime Minister of Mongolia",
    leader: "Luvsannamsrain Oyun-Erdene",
    img_link: "Prime_Minister_of_Mongolia"
},
{
    code: "ME",
    latitude: 42.708678,
    longitude: 19.37439,
    name: "Montenegro",
    title: "Prime Minister of Montenegro",
    leader: "Dritan Abazović",
    img_link: "Prime_Minister_of_Montenegro"
},
{
    code: "MA",
    latitude: 31.791702,
    longitude: -7.09262,
    name: "Morocco",
    title: "List of rulers of Morocco",
    leader: "Mohammed VI",
    img_link: "List_of_rulers_of_Morocco"
},
{
    code: "MZ",
    latitude: -18.665695,
    longitude: 35.529562,
    name: "Mozambique",
    title: "President of Mozambique",
    leader: "Filipe Nyusi",
    img_link: "President_of_Mozambique"
},
{
    code: "MM",
    latitude: 21.913965,
    longitude: 95.956223,
    name: "Myanmar",
    title: "President of Myanmar",
    leader: "Myint Swe",
    img_link: "President_of_Myanmar"
},
{
    code: "NA",
    latitude: -22.95764,
    longitude: 18.49041,
    name: "Namibia",
    title: "President of Namibia",
    leader: "Hage Geingob",
    img_link: "President_of_Namibia"
},
{
    code: "NR",
    latitude: -0.522778,
    longitude: 166.931503,
    name: "Nauru",
    title: "President of Nauru",
    leader: "Russ Kun",
    img_link: "President_of_Nauru"
},
{
    code: "NP",
    latitude: 28.394857,
    longitude: 84.124008,
    name: "Nepal",
    title: "Prime Minister of Nepal",
    leader: "Pushpa Kamal Dahal",
    img_link: "Prime_Minister_of_Nepal"
},
{
    code: "NZ",
    latitude: -40.900557,
    longitude: 174.885971,
    name: "New Zealand",
    title: "Prime Minister of New Zealand",
    leader: "Chris Hipkins",
    img_link: "Prime_Minister_of_New_Zealand"
},
{
    code: "NI",
    latitude: 12.865416,
    longitude: -85.207229,
    name: "Nicaragua",
    title: "President of Nicaragua",
    leader: "Daniel Ortega",
    img_link: "President_of_Nicaragua"
},
{ 
    code: "NL", 
    latitude: 52.132633, 
    longitude: 5.291266, 
    name: "Netherlands", 
    title: "Prime Minister of the Netherlands",
    leader: "Mark Rutte",
    img_link: "Prime_Minister_of_the_Netherlands",
},
{
    code: "NE",
    latitude: 17.607789,
    longitude: 8.081666,
    name: "Niger",
    title: "President of Niger",
    leader: "Mohamed Bazoum",
    img_link: "President_of_Niger"
},
{
    code: "NG",
    latitude: 9.081999,
    longitude: 8.675277,
    name: "Nigeria",
    title: "President of Nigeria",
    leader: "Muhammadu Buhari",
    img_link: "President_of_Nigeria"
},
{
    code: "NO",
    latitude: 60.472024,
    longitude: 8.468946,
    name: "Norway",
    title: "Prime Minister of Norway",
    leader: "Jonas Gahr Støre",
    img_link: "Prime_Minister_of_Norway"
},
{
    code: "OM",
    latitude: 21.512583,
    longitude: 55.923255,
    name: "Oman",
    title: "Sultan of Oman",
    leader: "Haitham bin Tariq",
    img_link: "Sultan_of_Oman"
},
{
    code: "PK",
    latitude: 30.375321,
    longitude: 69.345116,
    name: "Pakistan",
    title: "Prime Minister of Pakistan",
    leader: "Shehbaz Sharif",
    img_link: "Prime_Minister_of_Pakistan"
},
{
    code: "PW",
    latitude: 7.51498,
    longitude: 134.58252,
    name: "Palau",
    title: "President of Palau",
    leader: "Surangel Whipps Jr.",
    img_link: "President_of_Palau"
},
{
    code: "PS",
    latitude: 31.952162,
    longitude: 35.233154,
    name: "Palestine",
    title: "President of the State of Palestine",
    leader: "Mahmoud Abbas",
    img_link: "President_of_the_State_of_Palestine"
},
{
    code: "PA",
    latitude: 8.537981,
    longitude: -80.782127,
    name: "Panama",
    title: "President of Panama",
    leader: "Laurentino Cortizo",
    img_link: "President_of_Panama"
},
{
    code: "PG",
    latitude: -6.314993,
    longitude: 143.95555,
    name: "Papua New Guinea",
    title: "Prime Minister of Papua New Guinea",
    leader: "James Marape",
    img_link: "Prime_Minister_of_Papua_New_Guinea"
},
{
    code: "PH",
    latitude: 12.879721,
    longitude: 121.774017,
    name: "Philippines", 
    title: "President of the Philippines",
    leader: "Bongbong Marcos",
    img_link: "President_of_the_Philippines",
},
{
    code: "PY",
    latitude: -23.442503,
    longitude: -58.443832,
    name: "Paraguay",
    title: "President of Paraguay",
    leader: "Mario Abdo Benítez",
    img_link: "President_of_Paraguay"
},
{
    code: "PE",
    latitude: -9.189967,
    longitude: -75.015152,
    name: "Peru",
    title: "President of Peru",
    leader: "Dina Boluarte",
    img_link: "President_of_Peru"
},
{
    code: "PL",
    latitude: 51.919438,
    longitude: 19.145136,
    name: "Poland",
    title: "President of Poland",
    leader: "Andrzej Duda",
    img_link: "President_of_Poland"
},
{
    code: "PL",
    latitude: 51.919438,
    longitude: 19.145136,
    name: "Poland",
    title: "Prime Minister of Poland",
    leader: "Mateusz Morawiecki",
    img_link: "Prime_Minister_of_Poland"
},
{
    code: "PT",
    latitude: 39.399872,
    longitude: -8.224454,
    name: "Portugal",
    title: "Prime Minister of Portugal",
    leader: "António Costa",
    img_link: "Prime_Minister_of_Portugal"
},
{
    code: "QA",
    latitude: 25.354826,
    longitude: 51.183884,
    name: "Qatar",
    title: "Emir of Qatar",
    leader: "Tamim bin Hamad Al Thani",
    img_link: "Emir_of_Qatar"
},
{
    code: "RO",
    latitude: 45.943161,
    longitude: 24.96676,
    name: "Romania",
    title: "Prime Minister of Romania",
    leader: "Nicolae Ciucă",
    img_link: "Prime_Minister_of_Romania"
},
{
    code: "RU",
    latitude: 61.52401,
    longitude: 105.318756,
    name: "Russia",
    title: "President of Russia",
    leader: "Vladimir Putin",
    img_link: "President_of_Russia"
},
{
    code: "RW",
    latitude: -1.940278,
    longitude: 29.873888,
    name: "Rwanda",
    title: "President of Rwanda",
    leader: "Paul Kagame",
    img_link: "President_of_Rwanda"
},
{
    code: "KN",
    latitude: 17.357822,
    longitude: -62.782998,
    name: "Saint Kitts and Nevis",
    title: "Prime Minister of Saint Kitts and Nevis",
    leader: "Terrance Drew",
    img_link: "Prime_Minister_of_Saint_Kitts_and_Nevis"
},
{
    code: "KP",
    latitude: 40.339852,
    longitude: 127.510093,
    name: "North Korea", 
    title: "General Secretary of the Workers' Party of Korea",
    leader: "Kim Jong Un",
    img_link: "General_Secretary_of_the_Workers%27_Party_of_Korea",
},
{
    code: "LC",
    latitude: 13.909444,
    longitude: -60.978893,
    name: "Saint Lucia",
    title: "Prime Minister of Saint Lucia",
    leader: "Philip J. Pierre",
    img_link: "Prime_Minister_of_Saint_Lucia"
},
{
    code: "VC",
    latitude: 12.984305,
    longitude: -61.287228,
    name: "Saint Vincent and the Grenadines",
    title: "Prime Minister of Saint Vincent and the Grenadines",
    leader: "Ralph Gonsalves",
    img_link: "Prime_Minister_of_Saint_Vincent_and_the_Grenadines"
},
{
    code: "WS",
    latitude: -13.759029,
    longitude: -172.104629,
    name: "Samoa",
    title: "Prime Minister of Samoa",
    leader: "Fiamē Naomi Mataʻafa",
    img_link: "Prime_Minister_of_Samoa"
},
{
    code: "ST",
    latitude: 0.18636,
    longitude: 6.613081,
    name: "São Tomé and Príncipe",
    title: "Prime Minister of São Tomé and Príncipe",
    leader: "Patrice Trovoada",
    img_link: "Prime_Minister_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe"
},
{
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Saudi Arabia",
    title: "King of Saudi Arabia",
    leader: "Salman",
    img_link: "King_of_Saudi_Arabia"
},
{
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Saudi Arabia",
    title: "Prime Minister of Saudi Arabia",
    leader: "Mohammed bin Salman",
    img_link: "Prime_Minister_of_Saudi_Arabia"
},
{
    code: "SN",
    latitude: 14.497401,
    longitude: -14.452362,
    name: "Senegal",
    title: "President of Senegal",
    leader: "Macky Sall",
    img_link: "President_of_Senegal"
},
{
    code: "RS",
    latitude: 44.016521,
    longitude: 21.005859,
    name: "Serbia",
    title: "President of Serbia",
    leader: "Aleksandar Vučić",
    img_link: "President_of_Serbia"
},
{
    code: "RS",
    latitude: 44.016521,
    longitude: 21.005859,
    name: "Serbia",
    title: "Prime Minister of Serbia",
    leader: "Ana Brnabić",
    img_link: "Prime_Minister_of_Serbia"
},
{
    code: "SC",
    latitude: -4.679574,
    longitude: 55.491977,
    name: "Seychelles",
    title: "President of Seychelles",
    leader: "Wavel Ramkalawan",
    img_link: "President_of_Seychelles"
},
{
    code: "SL",
    latitude: 8.460555,
    longitude: -11.779889,
    name: "Sierra Leone",
    title: "President of Sierra Leone",
    leader: "Julius Maada Bio",
    img_link: "President_of_Sierra_Leone"
},
{
    code: "SG",
    latitude: 1.352083,
    longitude: 103.819836,
    name: "Singapore",
    title: "Prime Minister of Singapore",
    leader: "Lee Hsien Loong",
    img_link: "Prime_Minister_of_Singapore"
},
{
    code: "SK",
    latitude: 48.669026,
    longitude: 19.699024,
    name: "Slovakia",
    title: "Prime Minister of Slovakia",
    leader: "Ľudovít Ódor",
    img_link: "Prime_Minister_of_Slovakia"
},
{
    code: "SI",
    latitude: 46.151241,
    longitude: 14.995463,
    name: "Slovenia",
    title: "Prime Minister of Slovenia",
    leader: "Robert Golob",
    img_link: "Prime_Minister_of_Slovenia"
},
{
    code: "SB",
    latitude: -9.64571,
    longitude: 160.156194,
    name: "Solomon Islands",
    title: "Prime Minister of Solomon Islands",
    leader: "Manasseh Sogavare",
    img_link: "Prime_Minister_of_Solomon_Islands"
},
{
    code: "SO",
    latitude: 5.152149,
    longitude: 46.199616,
    name: "Somalia",
    title: "President of Somalia",
    leader: "Hassan Sheikh Mohamud",
    img_link: "President_of_Somalia"
},
{
    code: "SO",
    latitude: 5.152149,
    longitude: 46.199616,
    name: "Somalia",
    title: "Prime Minister of Somalia",
    leader: "Hamza Abdi Barre",
    img_link: "Prime_Minister_of_Somalia"
},
{
    code: "ZA",
    latitude: -30.559482,
    longitude: 22.937506,
    name: "South Africa",
    title: "President of South Africa",
    leader: "Cyril Ramaphosa",
    img_link: "President_of_South_Africa"
},
{
    code: "KR",
    latitude: 35.907757,
    longitude: 127.766922,
    name: "South Korea",
    title: "President of South Korea",
    leader: "Yoon Suk-yeol",
    img_link: "President_of_South_Korea"
},
{
    code: "SS",
    latitude: 6.85065,
    longitude: 30.659016,
    name: "South Sudan",
    title: "President of South Sudan",
    leader: "Salva Kiir Mayardit",
    img_link: "President_of_South_Sudan"
},
{
    code: "ES",
    latitude: 40.463667,
    longitude: -3.74922,
    name: "Spain",
    title: "Prime Minister of Spain",
    leader: "Pedro Sánchez",
    img_link: "Prime_Minister_of_Spain"
},
{
    code: "LK",
    latitude: 7.873054,
    longitude: 80.771797,
    name: "Sri Lanka",
    title: "President of Sri Lanka",
    leader: "Ranil Wickremesinghe",
    img_link: "President_of_Sri_Lanka"
},
{
    code: "SR",
    latitude: 3.919305,
    longitude: -56.027783,
    name: "Suriname",
    title: "President of Suriname",
    leader: "Chan Santokhi",
    img_link: "President_of_Suriname"
},
{
    code: "SE",
    latitude: 60.128161,
    longitude: 18.643501,
    name: "Sweden",
    title: "Prime Minister of Sweden",
    leader: "Ulf Kristersson",
    img_link: "Prime_Minister_of_Sweden"
},
{
    code: "SY",
    latitude: 34.802075,
    longitude: 38.996815,
    name: "Syria",
    title: "President of Syria",
    leader: "Bashar al-Assad",
    img_link: "President_of_Syria"
},
{ 
    code: "SZ", 
    latitude: -26.522503, 
    longitude: 31.465866, 
    name: "Eswatini", // Used to be Swaziland, but changed name in 2018
    title: "Ngwenyama",
    leader: "",
    img_link: "",
},
{
    code: "TJ",
    latitude: 38.861034,
    longitude: 71.276093,
    name: "Tajikistan",
    title: "President of Tajikistan",
    leader: "Emomali Rahmon",
    img_link: "President_of_Tajikistan"
},
{
    code: "TL",
    latitude: -8.874217,
    longitude: 125.727539,
    name: "East Timor", 
    title: "Prime Minister of East Timor",
    leader: "Taur Matan Ruak",
    img_link: "Prime_Minister_of_East_Timor",
},
{
    code: "TZ",
    latitude: -6.369028,
    longitude: 34.888822,
    name: "Tanzania",
    title: "President of Tanzania",
    leader: "Samia Suluhu Hassan",
    img_link: "President_of_Tanzania"
},
{
    code: "TH",
    latitude: 15.870032,
    longitude: 100.992541,
    name: "Thailand",
    title: "Prime Minister of Thailand",
    leader: "Prayut Chan-o-cha",
    img_link: "Prime_Minister_of_Thailand"
},
{
    code: "TG",
    latitude: 8.619543,
    longitude: 0.824782,
    name: "Togo",
    title: "President of Togo",
    leader: "Faure Gnassingbé",
    img_link: "President_of_Togo"
},
{
    code: "TO",
    latitude: -21.178986,
    longitude: -175.198242,
    name: "Tonga",
    title: "Prime Minister of Tonga",
    leader: "Siaosi Sovaleni",
    img_link: "Prime_Minister_of_Tonga"
},
{
    code: "TT",
    latitude: 10.691803,
    longitude: -61.222503,
    name: "Trinidad and Tobago",
    title: "Prime Minister of Trinidad and Tobago",
    leader: "Keith Rowley",
    img_link: "Prime_Minister_of_Trinidad_and_Tobago"
},
{
    code: "TN",
    latitude: 33.886917,
    longitude: 9.537499,
    name: "Tunisia",
    title: "President of Tunisia",
    leader: "Kaïs Saïed",
    img_link: "President_of_Tunisia"
},
{
    code: "TR",
    latitude: 38.963745,
    longitude: 35.243322,
    name: "Turkey",
    title: "President of Turkey",
    leader: "Recep Tayyip Erdoğan",
    img_link: "President_of_Turkey"
},
{
    code: "TM",
    latitude: 38.969719,
    longitude: 59.556278,
    name: "Turkmenistan",
    title: "People's Council of Turkmenistan",
    leader: "Gurbanguly Berdimuhamedow",
    img_link: "People%27s_Council_of_Turkmenistan"
},
{
    code: "TM",
    latitude: 38.969719,
    longitude: 59.556278,
    name: "Turkmenistan",
    title: "President of Turkmenistan",
    leader: "Serdar Berdimuhamedow",
    img_link: "President_of_Turkmenistan"
},
{
    code: "TV",
    latitude: -7.109535,
    longitude: 177.64933,
    name: "Tuvalu",
    title: "Prime Minister of Tuvalu",
    leader: "Kausea Natano",
    img_link: "Prime_Minister_of_Tuvalu"
},
{
    code: "UG",
    latitude: 1.373333,
    longitude: 32.290275,
    name: "Uganda",
    title: "President of Uganda",
    leader: "Yoweri Museveni",
    img_link: "President_of_Uganda"
},
{
    code: "US",
    latitude: 37.09024,
    longitude: -95.712891,
    name: "United States", 
    title: "President of the United States",
    leader: "Joe Biden",
    img_link: "President_of_the_United_States",
},
{
    code: "UA",
    latitude: 48.379433,
    longitude: 31.16558,
    name: "Ukraine",
    title: "President of Ukraine",
    leader: "Volodymyr Zelenskyy",
    img_link: "President_of_Ukraine"
},
{
    code: "UY",
    latitude: -32.522779,
    longitude: -55.765835,
    name: "Uruguay",
    title: "President of Uruguay",
    leader: "Luis Lacalle Pou",
    img_link: "President_of_Uruguay"
},
{
    code: "UZ",
    latitude: 41.377491,
    longitude: 64.585262,
    name: "Uzbekistan",
    title: "President of Uzbekistan",
    leader: "Shavkat Mirziyoyev",
    img_link: "President_of_Uzbekistan"
},
{
    code: "VA",
    latitude: 41.902916,
    longitude: 12.453389,
    name: "Vatican City", 
    title: "Sovereign of Vatican City State",
    leader: "Pope Francis",
    img_link: "Pope",
},
{
    code: "VU",
    latitude: -15.376706,
    longitude: 166.959158,
    name: "Vanuatu",
    title: "Prime Minister of Vanuatu",
    leader: "Ishmael Kalsakau",
    img_link: "Prime_Minister_of_Vanuatu"
},
{
    code: "VE",
    latitude: 6.42375,
    longitude: -66.58973,
    name: "Venezuela",
    title: "President of Venezuela",
    leader: "Nicolás Maduro",
    img_link: "President_of_Venezuela"
},
{
    code: "VN",
    latitude: 14.058324,
    longitude: 108.277199,
    name: "Vietnam",
    title: "General Secretary of the Communist Party of Vietnam",
    leader: "Nguyễn Phú Trọng",
    img_link: "General_Secretary_of_the_Communist_Party_of_Vietnam"
},
{
    code: "YE",
    latitude: 15.552727,
    longitude: 48.516388,
    name: "Yemen",
    title: "President of Yemen",
    leader: "Rashad al-Alimi",
    img_link: "President_of_Yemen"
},
{
    code: "ZM",
    latitude: -13.133897,
    longitude: 27.849332,
    name: "Zambia",
    title: "President of Zambia",
    leader: "Hakainde Hichilema",
    img_link: "President_of_Zambia"
},
{
    code: "ZW",
    latitude: -19.015438,
    longitude: 29.154857,
    name: "Zimbabwe",
    title: "President of Zimbabwe",
    leader: "Emmerson Mnangagwa",
    img_link: "President_of_Zimbabwe"
}
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export function getCountryName(country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}


export function setCountriesLeaderInfo() {

  const toPrint: {code: string; latitude: number; longitude: number; name: string; title: string; leader: string; img_link: string;}[] = [];

//   for (let i = 0; i < leaders.length; i++) {
//     let attemptAtCountryName;
//     let isinCountry = false;
//     if (leaders[i][0].includes(" of ")) {
//       attemptAtCountryName = leaders[i][0].split("of").pop();
//       if (attemptAtCountryName) {
//         for (let j = 0; j < countries.length; j++) {
//           if (sanitizeCountryName(countries[j].name) === sanitizeCountryName(attemptAtCountryName)) {
//             // console.log(attemptAtCountryName);
//             toPrint.push({ code: countries[j].code, latitude: countries[j].latitude, longitude: countries[j].longitude, name: countries[j].name, title: leaders[i][0], leader: leaders[i][1], img_link: leaders[i][2] })
//             isinCountry = true;
//           }
//         }
//         if (!isinCountry) {
//           console.log("Not in countries", attemptAtCountryName);
//         }
        
//       }
//     }
//     else {
//       console.log("No Of", leaders[i][0]);
//     }
//   }

//   console.log(toPrint);


}