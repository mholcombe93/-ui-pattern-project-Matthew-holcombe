
// -----------------------------------------------Tab Set Up---------------------------------------------------------------------

setUpTabs = () => {
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement; //div sidebar
      const tabsContainer = sideBar.parentElement; //div tabs
      const tabsNumber = button.dataset.forTab; //data-for-tab in button class
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabsNumber}"]`); //tab content by data-for-tabs number
      console.log(tabsContainer)
      // console.log(sideBar);
      // console.log(tabsContainer);
      // console.log(tabsNumber);
      // console.log(tabToActivate);

      sideBar.querySelectorAll('.tabs__button').forEach(button => { //deselects all side tabs
        button.classList.remove('tabs__button--active');
      });

      tabsContainer.querySelectorAll('.tabs__content').forEach(tab => { // hides content for each tab
        tab.classList.remove('tabs__content--active');
      });

      button.classList.add('tabs__button--active'); // adds the activated content to tab button and content page
      tabToActivate.classList.add('tabs__content--active');
    })
  })
}
  document.addEventListener('DOMContentLoaded', () => { // triggers set up at load of page
    setUpTabs();

    })
  // ----------------------------------------------- ^ Tab Set Up ^ ---------------------------------------------------------------------

  // -----------------------------------------------Grabbing API---------------------------------------------------------------------

const url = 'https://wizard-world-api.herokuapp.com/Houses'

fetch(url) //I made fetch happen
.then(res => {
  return res.json()
})
.then(res => {
  // console.log('Caput Draconis', res)
  displayHouse(res);
})
.catch(error => {
console.error("Nahhhh", error)
})

// ----------------------------------------------- ^ Grabbing API ^---------------------------------------------------------------------

// -----------------------------------------------Crest Images ---------------------------------------------------------------------

let crests = [
  {
    crestname: "Gryffindor",
    crestImage: "https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SX679_.jpg",
  },
  
  {
    crestname: "Ravenclaw",
    crestImage: "https://m.media-amazon.com/images/I/61iys32RuAL._AC_SX679_.jpg",
  },
  
  {
    crestname: "Huffelpuff",
    crestImage: "https://img.fruugo.com/product/0/50/46790500_max.jpg",
  },
  
  {
    crestname: "Slytherin",
    crestImage: "https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SX679_.jpg",
  }
]
// -----------------------------------------------^ Crest Images ^ ---------------------------------------------------------------------


// -----------------------------------------------Grabbing House info ---------------------------------------------------------------------
const houseContainer = document.querySelectorAll(".tabs__content");
// console.log(document.querySelectorAll(`[data-tab]`))
function displayHouse(arr) {
  crests.forEach((crests, i) => { //changed to grab crests
      let htmlTemplate = `
      <div class="houseName">
      <h1>${arr[i].name}</h1>
      <p>House Colors: ${arr[i].houseColours}</p>
      <p>Mascot: ${arr[i].animal}</p>
      <p>House ghost: ${arr[i].ghost}</p>
      <p>Founder: ${arr[i].founder}</p>
      <p>Signature Traits: ${arr[i].traits[0, 3].name}, ${arr[i].traits[0, 2].name}, and ${arr[i].traits[0, 4].name}</p>
      <img class = "allCrests" src = ${crests.crestImage}> 
      </div>`;
      document.querySelector(`[data-tab="${i}"]`).innerHTML = htmlTemplate
      // }
    })
}
