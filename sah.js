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

//aici mai jos, practic, ii spunem browserului cate "patratele" vrem sa avem

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

  //cifra 8 simbolizeaza numarul de patratele
  row2: Array(8).fill("pionAlb"), //aici ii spunem cati pioni albi vrem, pe care ii va returna din switch-ul de mai jos
  row3: Array(8).fill(null), //le dam valoarea null pentru ca nu vrem sa se afle nimic acolo
  row4: Array(8).fill(null), //le dam valoarea null pentru ca nu vrem sa se afle nimic acolo
  row5: Array(8).fill(null), //le dam valoarea null pentru ca nu vrem sa se afle nimic acolo
  row6: Array(8).fill(null), //le dam valoarea null pentru ca nu vrem sa se afle nimic acolo
  row7: Array(8).fill("pionNegru"), //aici ii spunem cati pioni negri vrem
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

//PANA AICI AVEM FUNCTION EXPRESSION NUMIT "decideChessPieceImg"

//AICI AVEM UN ALT FUNCTION EXPRESSION NUMIT "renderRow" CARE ARE 2 PARAMETRI(rowToRender si rowItems)
const renderRow = (rowToRender, rowItems) => {
  let htmlToReturn = ""; //aici am declarat o variabila care, prin for-ul de mai jos, va fi completata cu imagini
  for (let i = 0; i < rowItems.length; i++) {
    let pieceImg = decideChessPieceImg(rowItems[i]);
    if (pieceImg) {
      htmlToReturn += `<div class="item" 
      =${rowToRender} positionInRow=${i}><img class="img" piece=${rowItems[i]} row=${rowToRender} positionInRow=${i} src="../Tabla-de-sah/piese/${pieceImg}"></div>`;
    } else {
      htmlToReturn += `<div class="item" row=${rowToRender} positionInRow=${i}></div>`; //aici afisam patratelele care nu au piese
    }
  }

  return htmlToReturn; //acum returnam valorile pe care le-am obtinut-o in urma for-ului de mai sus
};

//AICI AVEM UN ALT FUNCTION EXPRESSION, CARE VA FACE URMATORUL LUCRU: mai sus avem acea functie cu 2 parametri, pe care le va primi de a functia de mai jos numita: renderTable
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
//pana aici am lucrat la afisarea tablei de sah

//mai jos incepe distractia :))))

const piese = document.querySelectorAll(".img"); //aici am declarat o variabila numita "piese" careia i-am atribuit valoarea pieselor
const item = document.querySelectorAll(".item"); //aici am declarat o variabila numita "item" careia i-am atribuit valoarea patratelor

let pieceToMove = null;
let currentPosition = null;
//cele doua variabile de mai sus, adica "pieceToMove" si "currentPosition" le vom initializa valoarea null si le vom folosi mai jos


//aici avem un FUNCTION EXPRESSION care primeste trei parametri: "currentPosition", "piece" si "nextPosition"
const movePiece = (currentPosition, piece, nextPosition) => {
/*  console.log(
    `De la randul ${currentPosition.row}, pozitia ${
      Number(currentPosition.index) + 1
    }, se muta piesa ${piece} la randul ${nextPosition.row}, pozitia ${
      Number(nextPosition.index) + 1
    }`
  );*/
  chessTable[`row${nextPosition.row}`][nextPosition.index] = piece; //luand valorile pieselor si a patratelor, vom afisa piesele pe alte patrate
  renderTable();
};

//mai jos vom avea un for care ne va ajuta sa luam valorile si atributele pieselor si stergem valoarea initiala in momentul mutarii piesei
for (let y = 0; y < piese.length; y++) {
  piese[y].addEventListener("click", (e) => {
    e.stopPropagation();

    pieceToMove = piese[y].attributes.piece.value;
    currentPosition = {
      row: piese[y].attributes.row.value,
      index: piese[y].attributes.positionInRow.value,
    };

    chessTable[`row${currentPosition.row}`][currentPosition.index] = null; // va "sterge" valoarea initiala, adica atunci cand va fi mutata piesa, ea nu va mai aparea in locul in care era 
  });
}


//aici avem un for care ne va ajuta sa mutam piesa
//va prelua parametrii functiei "movePiece": currentPosition si nextPosition
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    nextPosition = {
      row: item[i].attributes.row.value,
      index: item[i].attributes.positionInRow.value,
    };

    if (currentPosition && pieceToMove && nextPosition) {
      movePiece(currentPosition, pieceToMove, nextPosition);
      
    }
  });
}
