import { createFirtsMegaverse } from "./firtsMegaverse.ts";
import { createSecondMegaverse } from "./secondMegaverse.ts";


function handleClickFirtsButton() {
  createFirtsMegaverse();
}
function handleClickSecondButton() {
  createSecondMegaverse();
}

const firtsButton = document.getElementById("firtsMegaverse");
const secondButton = document.getElementById("secondMegaverse");

if (firtsButton) {
  firtsButton.addEventListener("click", handleClickFirtsButton);
}

if (secondButton) {
  secondButton.addEventListener("click", handleClickSecondButton);
}