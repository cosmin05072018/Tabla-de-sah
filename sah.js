/* AICI VOM PRELUA CLASELE DE TIP ROW(1,2,3,4,5,6,7,8), AJUTANDU-NE DE QUERYSELECTOR */

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");
const row6 = document.querySelector(".row6");
const row7 = document.querySelector(".row7");
const row8 = document.querySelector(".row8");

/* PANA AICI AVEM CLASELE DE TIP ROW */

/* AICI VOM AVEA UN OBIECT NUMIT "chessTable" SI VOM AVEA URMATOARELE KEYS:
                -row1, row2, row3, row4, row5, row6, row7, row8
*** ROW1 VA AVEA CA SI VALOARE DENUMIRILE PIESELOR DE CULOARE ALBA INTR-UN ARRAY ***
*** ROW2 VA AVEA CA SI VALOARE PIONII DE CULOARE ALBA ***
*** ROW3, ROW4, ROW5, ROW6 VOR FI DECLARATE CA FIIND "NULL" DEOARECE NU AU NICIO PIESA/ELEMENT PE ELE ***
*** ROW7 VA AVEA CA SI VALOARE PIONII DE CULOARE NEAGRA ***
*** ROW1 VA AVEA CA SI VALOARE DENUMIRILE PIESELOR DE CULOARE NEAGRA INTR-UN ARRAY ***
 */

const chessTable = {
  row1: [
    "turnAlb",
    "calAlb",
    "nebunAlb",
    "regeAlb",
    "reginaAlb",
    "nebunAlb",
    "calAlb",
    "turnAlb",
  ],
  row2: Array(8).fill("pionAlb"),
  row3: Array(8).fill(null),
  row4: Array(8).fill(null),
  row5: Array(8).fill(null),
  row6: Array(8).fill(null),
  row7: Array(8).fill("pionNegru"),
  row8: [
    "turnNegru",
    "calNegru",
    "nebunNegru",
    "regeNegru",
    "reginaNegru",
    "nebunNegru",
    "calNegru",
    "turnNegru",
  ],
};

/* PANA AICI AVEM OBIECTUL NUMIT "chessTable" */

/* AICI AVEM FUNCTION EXPRESSION NUMIT "decideChessPieceImg" CARE NE VA AJUTA(MAI JOS) PENTRU AFISAREA IMAGINILOR(SVG) */

const decideChessPieceImg = (piece) => {
  switch (piece) {
    case "turnAlb":
      return "albe/Chess-rook.svg";
    case "calAlb":
      return "albe/Chess-knight.svg";
    case "nebunAlb":
      return "albe/Chess-bishop.svg";
    case "regeAlb":
      return "albe/Chees-king.svg";
    case "reginaAlb":
      return "albe/Chees-queen.svg";
    case "pionAlb":
      return "albe/Chess-pawn.svg";
    case "turnNegru":
      return "negre/Chess-rook.svg";
    case "calNegru":
      return "negre/Chess-knight.svg";
    case "nebunNegru":
      return "negre/Chess-bishop.svg";
    case "regeNegru":
      return "negre/Chess-queen.svg";
    case "reginaNegru":
      return "negre/Chess-king.svg";
    case "pionNegru":
      return "negre/Chess-pawn.svg";
    default:
      return null;
  }
};

const renderRow = (rowToRender, rowItems) => {
  let htmlToReturn = "";
  for (let i = 0; i < rowItems.length; i++) {
    let pieceImg = decideChessPieceImg(rowItems[i]);
    if (pieceImg) {
      htmlToReturn += `<div class="item" row=${rowToRender} positionInRow=${i}><img class="img" piece=${rowItems[i]} row=${rowToRender} positionInRow=${i} src="../Tabla-de-sah/piese/${pieceImg}"></div>`;
    } else {
      htmlToReturn += `<div class="item" row=${rowToRender} positionInRow=${i}></div>`;
    }
  }

  return htmlToReturn;
};

const renderTable = () => {
  row1.innerHTML = renderRow("1", chessTable.row1);
  row2.innerHTML = renderRow("2", chessTable.row2);
  row3.innerHTML = renderRow("3", chessTable.row3);
  row4.innerHTML = renderRow("4", chessTable.row4);
  row5.innerHTML = renderRow("5", chessTable.row5);
  row6.innerHTML = renderRow("6", chessTable.row6);
  row7.innerHTML = renderRow("7", chessTable.row7);
  row8.innerHTML = renderRow("8", chessTable.row8);
};

renderTable();

const piese = document.querySelectorAll(".img");
const item = document.querySelectorAll(".item");

let pieceToMove = null;
let currentPosition = null;
let positionToMovePieceTo = null;

const movePiece = (currentPosition, piece, nextPosition) => {
  console.log(
    `De la randul ${currentPosition.row}, pozitia ${
      Number(currentPosition.index) + 1
    }, se muta piesa ${piece} la randul ${nextPosition.row}, pozitia ${
      Number(nextPosition.index) + 1
    }`
  );
  chessTable[`row${nextPosition.row}`][nextPosition.index] = piece;
  renderTable();
};

const reset = () => {
  currentPosition = null;
  pieceToMove = null;
  nextPosition = null;
};

for (let y = 0; y < piese.length; y++) {
  piese[y].addEventListener("click", (e) => {
    e.stopPropagation();

    pieceToMove = piese[y].attributes.piece.value;
    currentPosition = {
      row: piese[y].attributes.row.value,
      index: piese[y].attributes.positionInRow.value,
    };

    chessTable[`row${currentPosition.row}`][currentPosition.index] = null;
  });
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    nextPosition = {
      row: item[i].attributes.row.value,
      index: item[i].attributes.positionInRow.value,
    };

    if (currentPosition && pieceToMove && nextPosition) {
      movePiece(currentPosition, pieceToMove, nextPosition);
      reset();
    }
  });
}
