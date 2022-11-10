const cardList = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

const cardType = document.getElementById("card-type");
const cardsAlbum = document.getElementById("cards-container");
let SelectedCards = [];

//funzione creazione carte
function createCards() {
  cardsAlbum.innerHTML = ""; //pulizia HTML
  for (i = 0; i < SelectedCards.length; i++) {
    cardsAlbum.innerHTML += `<div class="cards"> <i class="${
      SelectedCards[i].family
    } ${SelectedCards[i].prefix}${
      SelectedCards[i].name
    } "></i> <span>${SelectedCards[i].name.toUpperCase()}</span></div>`;
  }
}

//funzione per cambiare carte
function changeCards() {
  SelectedCards = []; //pulizia array
  let currentOption = cardType.value;

  if (cardType.value === "all") {
    //selezione all
    for (i = 0; i < cardList.length; i++) {
      const objCard = cardList[i];
      SelectedCards.push(objCard);
    }
  } else if (cardType.value === currentOption) {
    //selezione specifica
    for (i = 0; i < cardList.length; i++) {
      const objCard = cardList[i];
      if (objCard.type === currentOption) {
        SelectedCards.push(objCard);
      }
    }
  }

  createCards();
  randomColor();
}

//funzione per colore random
function randomColor() {
  for (i = 0; i < SelectedCards.length; i++) {
    let iconsColor = document.querySelectorAll(".fas");

    let hexArr = [];

    for (hex = 0; hex < 6; hex++) {
      let randNumCol = Math.floor(Math.random() * 16);
      if (randNumCol === 10) {
        randNumCol = "a";
      } else if (randNumCol === 11) {
        randNumCol = "b";
      } else if (randNumCol === 12) {
        randNumCol = "c";
      } else if (randNumCol === 13) {
        randNumCol = "d";
      } else if (randNumCol === 14) {
        randNumCol = "e";
      } else if (randNumCol === 15) {
        randNumCol = "f";
      }
      hexArr.push(randNumCol);
    }
    iconsColor[
      i
    ].style.color = `#${hexArr[0]}${hexArr[1]}${hexArr[2]}${hexArr[3]}${hexArr[4]}${hexArr[5]}`;
  }
}

// creazione prime card all'apertura della pagina
for (i = 0; i < cardList.length; i++) {
  const objCard = cardList[i];
  SelectedCards.push(objCard);
}
createCards();
randomColor();

//crezione option in base ai type degli oggetti
let arrType = [];

for (i = 0; i < cardList.length; i++) {
  if (arrType.includes(cardList[i].type) === false) {
    arrType.push(cardList[i].type);
  }
}

for (i = 0; i < arrType.length; i++) {
  cardType.innerHTML += `<option value="${arrType[i]}">${arrType[i]}</option>`;
}
