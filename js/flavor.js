let flavorSelector = document.getElementById("flavorSelector");
let searchFlavorButton = document.getElementById("searchFlavorButton");
let displayDivFlavor = document.getElementById("displayDivFlavor");
let displayFlavorGif = document.getElementById("displayFlavorGif");
//--------------------------------------------------------------------
// CODE FOR STRAIN SELECTOR BY FLAVOR
//--------------------------------------------------------------------
function FlavorOptions() {
  displayFlavorGif.innerHTML = `
    <body>
    <p></p>
    <img id="loadingGifFlavor" src="images/marijuana-yin-yang.gif" />
    <p></p>
    <h3 style="color: green">Cultivating Strain Information...</h3>
    </body>`;
  var f = document.getElementById("flavorSelector").selectedIndex;
  var flavorSelection = document.getElementsByName("flav")[f].value;
  let flavorURL = `https://strainapi.evanbusse.com/0d4ocxj/strains/search/flavor/${flavorSelection}`;
  fetch(flavorURL)
    .then((response) => response.json())
    .then((flavorPosts) => {
      let flavorItem = flavorPosts.map(function (flavor) {
        return `
                <div class="cardTest" id="thirdFlavor">
                    <div class="cardBody" class="card text-center">
                        <h4><b>${flavor.name}</b></h4>
                        <h6 class="card-subtitle mb-2 text-muted">${flavor.id}</h6>
                        <img id='weedLeaf' src='https://www.freepnglogos.com/uploads/weed-leaf-png/weed-leaf-weed-symbol-drawing-clipart-panda-clipart-images-23.png'>
                        <p class="card-text">${flavor.race}</p>
                        <p class="card-text">${flavor.flavor}</p>
                        </div>
                    </div>`;
      });
      displayFlavorGif.innerHTML = "";
      displayDivFlavor.innerHTML = flavorItem.join("");
      flavorSelector.value = "";
    })
    .catch((err) => {
      displayFlavorGif.innerHTML = `<h1 style="color: red">Oops, there was a problem getting the data!</h1>`;
      displayDivFlavor.innerHTML = "";
      flavorSelector.value = "";
    });
}
