let allButtonBody = document.getElementById("allButtonBody");
let nameButton = document.getElementById("nameButton");
let displayDivAllStrain = document.getElementById("displayDivAllStrain");
let displayAllGif = document.getElementById("displayAllGif");
//--------------------------------------------------------------------
// CODE FOR ALL STRAINS API
//--------------------------------------------------------------------
function renderPosts(strainPosts) {
  displayDivAllStrain.innerHTML = "";
  let strainItems = "";
  for (let index = 0; index < Object.values(strainPosts).length; index++) {
    const strainItem = Object.values(strainPosts)[index];
    strainItems += `
        <div class="cardTest" id="thirdAll">
            <div class="cardBody" class="card text-center">
                <h4><b>${Object.keys(strainPosts)[index]}</b></h4>
                <h6 class="card-subtitle mb-2 text-muted">${strainItem.race}</h6>
                <p id="descList" class="card-text"></p>
                <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                <p></p>
                <p class="card-text"><b>Flavors: </b>${strainItem.flavors}</p>
                <p class="card-text"><b>Helps to treat: </b>${strainItem.effects.medical.join(", ")}</p>
                <p class="card-text"><b>Positive Effects: </b>${strainItem.effects.positive.join(", ")}</p>
                <p class="card-text"><b>Negative Effects: </b>${strainItem.effects.negative.join(", ")}</p>
            </div>
        </div>`;
  }
  displayAllGif.innerHTML = "";
  displayDivAllStrain.innerHTML = strainItems;
}
allButtonBody.addEventListener("click", function () {
  displayAllGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGif" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  fetch("https://strainapi.evanbusse.com/0d4ocxj/strains/search/all")
    .then((response) => response.json())
    .then((strainPosts) => {
      renderPosts(strainPosts);
    })
    .catch((err) => {
      displayAllGif.innerHTML = `<h1 style="color: red">Oops, there was a problem getting the data!</h1>`;
      displayDivAllStrain.innerHTML = "";
    });
});
//--------------------------------------------------------------------
// CODE FOR TO SEARCH FOR STRAINs BY NAME
//--------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {  
let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault()
  displayAllGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGif" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  let nameURL = `https://strainapi.evanbusse.com/0d4ocxj/strains/search/name/${nameTextBox.value}`;
  fetch(nameURL)
    .then((response) => response.json())
    .then((namePosts) => {
      if (namePosts.length === 0) {
        displayAllGif.innerHTML = "";
        alert("No results found!");
      }
      let nameVar = namePosts.map(function (name) {
        let description = name.desc;
        if (description === null) {
          description = "Description is not available";
        }
        return `
                <div class="cardTest" id="thirdAll">
                    <div class="cardBody" class="card text-center">
                      <h4><b>${name.name}</b></h4>
                      <h6 class="card-subtitle mb-2 text-muted">${name.race}</h6>
                      <p></p>
                      <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>            
                      <p></p>
                      <p class="card-text">${description}</p>    
                    </div>
                </div>`;
      });
      displayAllGif.innerHTML = "";
      displayDivAllStrain.innerHTML = nameVar;
      nameTextBox.value = "";
    })
    .catch((err) => {
      displayAllGif.innerHTML = `<h1 style="color: red">Oops, there was a problem getting the data!</h1>`;
      displayDivAllStrain.innerHTML = "";
      nameTextBox.value = "";
    });
})
})