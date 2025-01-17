import React from 'react'

export function getLeaderImage(img_link: string) : Promise<any> {
    return fetch("https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=" + img_link + "&format=json")
    .then(response => response.json())
    .then(data => {
      const html = data.parse.text["*"];
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      let infoboxImageURL, fullSizeInfoboxImageURL, queriedLink: HTMLLinkElement;
      if (!(doc.querySelector(".redirectMsg"))) {
        if (doc.querySelector(".infobox-full-data a"))
        {
          queriedLink = doc.querySelector(".infobox-full-data a")!;
          infoboxImageURL = queriedLink.href;
        }
        else if (doc.querySelector(".infobox-image a"))
        {
          queriedLink = doc.querySelector(".infobox-image a")!;
          infoboxImageURL = queriedLink.href;
        }
        else // It's probably San Marino
          infoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/Ham_sandwich1.jpg" // ham sandwich is the fallback
          fullSizeInfoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/" + infoboxImageURL.split("File:").pop()
        console.log(fullSizeInfoboxImageURL);
        return fullSizeInfoboxImageURL;

      }
      else {
        console.log("Used alternative! Damn redirects...")
        const altLink = "https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=" + doc.querySelector("a")!.href.split("wiki/").pop() + "&format=json"
        fetch(altLink).then(response => response.json()).then(data => {
          const html = data.parse.text["*"];
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          if (doc.querySelector(".infobox-full-data a"))
          {
            queriedLink = doc.querySelector(".infobox-full-data a")!;
            infoboxImageURL = queriedLink.href;
          }
          else if (doc.querySelector(".infobox-image a"))
          {
            queriedLink = doc.querySelector(".infobox-image a")!;
            infoboxImageURL = queriedLink.href;
          }
          else // It's probably San Marino
            infoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/Ham_sandwich1.jpg" // ham sandwich is the fallback
          fullSizeInfoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/" + infoboxImageURL.split("File:").pop()
          console.log(fullSizeInfoboxImageURL);
          return fullSizeInfoboxImageURL;
        })
      }
    })
}
