// import button from './addDarkButton'

console.log("Dark Mode installed from ");

const config = {
  selectTheme: "defaultTheme",
  customIgnore: ".Udark-mode-ignore",
};

const Darktheme = {
  defaultTheme: "#e8e8e8",
  monoBlack: "#ffffff",
};

function setLayer(currtheme) {
  const layer = document.createElement("div");
  layer.setAttribute("id", "Dark_layer_hitesh");
  layer.style.width = "100vw";
  layer.style.height = "100vh";
  layer.style.background = currtheme
    ? Darktheme[currtheme]
    : Darktheme[defaultTheme];
  layer.style.top = "0";
  layer.style.position = "fixed";
  layer.style.left = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "1000";
  layer.style.mixBlendMode = "difference";
  layer.style.transformScale = "60";

  document.body.appendChild(layer);
}

// let ignoreList = [
//   "IMG",
//   "SVG",
//   "BUTTON",
//   "CANVAS",
//   "I",
//   "IFRAME",
//   "VIDEO"
// ];

function ignore(s) {
  let selectors = config.customIgnore + "," + "img,svg,canvas,.fa";
  // console.log("ignoring images");
  let ignored = document.querySelectorAll(selectors);

  function ignoreChildNodes(doc) {
    for (let i = 0; i < doc.length; i++) {
      try {
          doc[i].style.mixBlendMode = s;

      } catch (err) {
        console.log(err);
      }
      // let nextChild = doc[i].childNodes;
      // ignoreChildNodes(nextChild);
    }
  }
  // let ignored = document.body.childNodes;

  var imgs = document.images,
    len = imgs.length,
    counter = 0;
  
    function incrementCounter() {
      counter++;
      if (counter === len) {
        // console.log(len, counter);
        ignoreChildNodes(ignored);
      }
    }

  [].forEach.call(imgs, function (img) {
    if (img.complete) incrementCounter();
    else img.addEventListener("load", incrementCounter, false);
  });

}

function init() {
  setLayer(config.selectTheme);
  ignore("difference");
}

init();



// const checkbox = document.getElementById('darkcheckbox');

// checkbox.addEventListener('change', ()=>{
  
//   if (checkbox.checked) {
//     init();
//  } else {
//    button.remove();
//   ignore("normal");
//  }
   

// })

//   let ignoreList = document.querySelectorAll('p,span');

//   // Convert spans nodeslist to array
//   ignoreList = [...ignoreList];

//   // Filter spans array
//   // Get CSS properties object of selected element - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
//   ignoreList = ignoreList.filter( item => String( document.defaultView.getComputedStyle( item, ':before' ).color ) != 'rgb(0, 0, 0)' );

//   ignoreList.concat([...ignored]);

//   console.log(ignorelist);
