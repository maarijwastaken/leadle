const leaders : Array<Array<string>> = [];
const selected_leader = [];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function getCountriesInfo() : Array<Array<string>> {
  fetch("https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=List_of_current_heads_of_state_and_government&format=json")
  .then(response => response.json())
  .then(data => {
      const html = data.parse.text["*"];
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const main_table = doc.querySelector("table.wikitable");
      if (!main_table) {
        throw new Error("Couldn't find the table");
      }
      const relevant_rows = Array.from(main_table.querySelectorAll("tr td.table-success"));

      return relevant_rows; })
  .then((relevant_rows) => {
    relevant_rows.forEach((row) => {
        try {
          if (row.children[0].hasAttribute("title")) {
            if (row.querySelectorAll("a")[1].innerHTML.length > 4) // Some rows have superscript numbers because of a complicated system, skipping those
            {
              const a_rows = row.querySelectorAll("a");
              leaders.push([a_rows[0].title, a_rows[1].innerHTML, a_rows[0].pathname.slice(6), a_rows[1].pathname.slice(6)]);
            }
          }
          else {
            const first_child = row.querySelectorAll("a")[0];
            const second_child = row.querySelectorAll("a")[1];
            leaders.push([first_child.title, second_child.innerHTML, first_child.pathname.slice(6), second_child.pathname.slice(6)]);
            // console.log("WORKAROUND: ", row.children[0].children[0].title, row.children[0].children[1].innerHTML);
          }
        } catch (error) {
          // The entries before these are usually interim presidents or military junta leaders, makes things more complicated
          leaders.pop();
        }  
      })

      return leaders;
    })}

//       selected_leader = leaders[Math.floor(Math.random() * leaders.length)];
//       console.log(selected_leader);
//       return selected_leader;
//   })
//   .then((selected_leader) => {
//     fetch("https://corsproxy.io/?https://en.wikipedia.org/w/api.php?action=parse&page=" + selected_leader[3] + "&format=json")
//     .then(response => response.json())
//     .then(data => {
//       const html = data.parse.text["*"];
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       const infoboxImageURL = doc.querySelector(".infobox-image img").src;
//       console.log(infoboxImageURL);
//     })
//   })
