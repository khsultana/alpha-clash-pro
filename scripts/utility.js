function hideElements(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementsById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabetString.split("");
  console.log(alphabet);
}
