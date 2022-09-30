
// -----------------------------------------------Tab Set Up---------------------------------------------------------------------

setUpTabs = () => {
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement; //div sidebar
      const tabsContainer = sideBar.parentElement; //div tabs
      const tabsNumber = button.dataset.forTab; //data-for-tab in button class
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabsNumber}"]`); //tab content
      // console.log(tabToActivate)
      console.log(tabsContainer)
      // console.log(sideBar);
      // console.log(tabsContainer);
      // console.log(tabsNumber);
      // console.log(tabToActivate);

      sideBar.querySelectorAll('.tabs__button').forEach(button => {
        button.classList.remove('tabs__button--active');
      });

      tabsContainer.querySelectorAll('.tabs__content').forEach(tab => {
        tab.classList.remove('tabs__content--active');

      });

      button.classList.add('tabs__button--active');
      console.log(tabToActivate)
      tabToActivate.classList.add('tabs__content--active');

    })
  })
}
  document.addEventListener('DOMContentLoaded', () => {
    setUpTabs();

    })
  // ----------------------------------------------- ^ Tab Set Up ^ ---------------------------------------------------------------------

  // -----------------------------------------------Grabbing API---------------------------------------------------------------------

const url = 'https://wizard-world-api.herokuapp.com/Houses'

fetch(url)
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

// -----------------------------------------------Grabbing House info ---------------------------------------------------------------------
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
  

const houseContainer = document.querySelectorAll(".tabs__content");
// console.log(document.querySelectorAll(`[data-tab]`))
function displayHouse(arr) {
  crests.forEach((crests, i) => {
    // for (let i = 0; i < arr.length; i++) {
      let htmlTemplate = `
      <div class="houseName">
      <h1>${arr[i].name}</h1>
      <p>House Colors: ${arr[i].houseColours}</p>
      <p>Mascot: ${arr[i].animal}</p>
      <p>House ghost: ${arr[i].ghost}</p>
      <p>Founder: ${arr[i].founder}</p>
      <p>Signature Traits: ${arr[i].traits[0, 3].name}, ${arr[i].traits[0, 2].name}, and ${arr[i].traits[0, 4].name}</p>
      <img src = ${crests.crestImage}>
      </div>`;
      document.querySelector(`[data-tab="${i}"]`).innerHTML = htmlTemplate
      // }
    })
}


//   arr.forEach((house) => {
//     // console.log('house')
//     let htmlTemplate = `
//       <div class="houseName">
//         <h1>${house.name}</h1>
//         <p>House Colors: ${house.houseColours}</p>
//         <p>Mascot: ${house.animal}</p>
//         <p>House ghost: ${house.ghost}</p>
//         <p>Founder: ${house.founder}</p>
//         <p>Signature Traits: ${house.traits[0,3].name}, ${house.traits[0,2].name}, and ${house.traits[0,4].name}</p>
//       </div>`
//     ;

//     houseContainer[i].insertAdjacentHTML("beforeend", htmlTemplate)
//   });
//   // for (let i = 1; i <= 5; i++){
//   //   console.log(houseContainer[i])
//   //   ;
//   // }





