import React from 'react'

export function getLeaderImage(img_link: string) : string {
    fetch("https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=" + img_link + "&format=json")
    .then(response => response.json())
    .then(data => {
      const html = data.parse.text["*"];
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      let infoboxImageURL, fullSizeInfoboxImageURL;
      if (!(doc.querySelector(".redirectMsg"))) {
        if (doc.querySelector(".infobox-full-data a"))
          infoboxImageURL = doc.querySelector(".infobox-full-data a").href;
        else if (doc.querySelector(".infobox-image a"))
          infoboxImageURL = doc.querySelector(".infobox-image a").href;
        else // It's probably San Marino
          infoboxImageURL = "https://en.wikipedia.org/wiki/Ham_sandwich#/media/File:Ham_sandwich1.jpg" // ham sandwich is the fallback
        fullSizeInfoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/" + infoboxImageURL.split("File:").pop()
        console.log(fullSizeInfoboxImageURL);
        return fullSizeInfoboxImageURL;

      }
      else {
        console.log("Used alternative! Damn redirects...")
        const altLink = "https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=" + doc.querySelector("a").href.split("wiki/").pop() + "&format=json"
        fetch(altLink).then(response => response.json()).then(data => {
          const html = data.parse.text["*"];
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          if (doc.querySelector(".infobox-full-data a"))
            infoboxImageURL = doc.querySelector(".infobox-full-data a").href;
          else if (doc.querySelector(".infobox-image a"))
            infoboxImageURL = doc.querySelector(".infobox-image a").href;
          else // It's probably San Marino
            infoboxImageURL = "https://en.wikipedia.org/wiki/Ham_sandwich#/media/File:Ham_sandwich1.jpg" // ham sandwich is the fallback
          fullSizeInfoboxImageURL = "https://commons.wikimedia.org/wiki/Special:FilePath/" + infoboxImageURL.split("File:").pop()
          console.log(fullSizeInfoboxImageURL);
          return fullSizeInfoboxImageURL;
        })
      }
      return "https://en.wikipedia.org/wiki/Ham_sandwich#/media/File:Ham_sandwich1.jpg" // If all goes wrong, ham sandwich
    })
  
}
