let searchPositiveEffectButton = document.getElementById("searchPositiveEffectButton");
let searchMedicalEffectButton = document.getElementById("searchMedicalEffectButton");
let searchNegativeEffectButton = document.getElementById("searchNegativeEffectButton");
let displayDivEffect = document.getElementById("displayDivEffect");
//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY EFFECT
//--------------------------------------------------------------------
function PosEffects() {
  var e = document.getElementById("effectSelectorPositive").selectedIndex;
  var posSelection = document.getElementsByName("pos")[e].value;
  let effectURL = `https://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${posSelection}`;
  fetch(effectURL)
    .then((response) => response.json())
    .then((effectPosts) => {
      let effectItem = effectPosts.map(function (effect) {
        return `<div class="cardTest" id="thirdEffect">
                <div class="cardBody" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`;
      });
      displayDivEffect.innerHTML = effectItem.join("");
      effectSelectorPositive.value = ""
    });
}
function MedEffects() {
  var e = document.getElementById("effectSelectorMedical").selectedIndex;
  console.log(e);
  var medSelection = document.getElementsByName("med")[e].value;
  console.log(medSelection);
  let effectURL = `https://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${medSelection}`;
  fetch(effectURL)
    .then((response) => response.json())
    .then((effectPosts) => {
      let effectItem = effectPosts.map(function (effect) {
        return `<div class="cardTest" id="thirdEffect">
                <div class="cardBody" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`;
      });
      displayDivEffect.innerHTML = effectItem.join("");
      effectSelectorMedical.value = ""
    });
}
function NegEffects() {
  var e = document.getElementById("effectSelectorNegative").selectedIndex;
  var negSelection = document.getElementsByName("neg")[e].value;
  let effectURL = `https://strainapi.evanbusse.com/0d4ocxj/strains/search/effect/${negSelection}`;
  fetch(effectURL)
    .then((response) => response.json())
    .then((effectPosts) => {
      let effectItem = effectPosts.map(function (effect) {
        return `<div class="cardTest" id="thirdEffect">
                <div class="cardBody" class="card text-center">
                <h4><b>${effect.name}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${effect.id}</h6>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p class="card-text">${effect.race}</p>
                <p class="card-text">${effect.effect}</p>
                </div>
            </div>`;
      });
      displayDivEffect.innerHTML = effectItem.join("");
      effectSelectorNegative.value = ""
    });
}
