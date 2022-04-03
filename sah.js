const plasarePiese = {
  //asezarea pieselor albe
  A1: ["alb", "tura"],
  B1: ["alb", "cal"],
  C1: ["alb", "nebun"],
  D1: ["alb", "rege"],
  E1: ["alb", "regina"],
  F1: ["alb", "nebun"],
  G1: ["alb", "cal"],
  H1: ["alb", "tura"],

  A2: ["alb", "pion"],
  B2: ["alb", "pion"],
  C2: ["alb", "pion"],
  D2: ["alb", "pion"],
  E2: ["alb", "pion"],
  F2: ["alb", "pion"],
  G2: ["alb", "pion"],
  H2: ["alb", "pion"],

  //asezarea pieselor negre

  A8: ["negru", "tura"],
  B8: ["negru", "cal"],
  C8: ["negru", "nebun"],
  D8: ["negru", "rege"],
  E8: ["negru", "regina"],
  F8: ["negru", "nebun"],
  G8: ["negru", "cal"],
  H8: ["negru", "tura"],

  A7: ["negru", "pion"],
  B7: ["negru", "pion"],
  C7: ["negru", "pion"],
  D7: ["negru", "pion"],
  E7: ["negru", "pion"],
  F7: ["negru", "pion"],
  G7: ["negru", "pion"],
  H7: ["negru", "pion"],
};
const piese = document.querySelectorAll(".img");
const item = document.querySelectorAll(".item");

for (let i = 0; i < piese.length; i++) {
  piese[i].addEventListener("click", () => {
    console.log('run');
  });
}
