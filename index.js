let VegetablesBTN = document.getElementById("VegetablesBTN");
let fruitBTN = document.getElementById("fruitBTN");
let VegetablesBTNDIV = document.getElementById("VegetablesBTNDIV");
let fruitBTNDIV = document.getElementById("fruitBTNDIV");
fruitBTN.addEventListener("click", () => {
  fruitBTNDIV.style.display = "flex";
  VegetablesBTNDIV.style.display = "none";
  fruitBTN.style.transform = "scale(1.1)";
  fruitBTN.style.backgroundColor = "green";
  VegetablesBTN.style.transform = "scale(1)";
  VegetablesBTN.style.backgroundColor = "white";
});
VegetablesBTN.addEventListener("click", () => {
  VegetablesBTNDIV.style.display = "flex";
  fruitBTNDIV.style.display = "none";
  VegetablesBTN.style.transform = "scale(1.1)";
  VegetablesBTN.style.backgroundColor = "green";
  fruitBTN.style.transform = "scale(1)";
  fruitBTN.style.backgroundColor = "white";
});
