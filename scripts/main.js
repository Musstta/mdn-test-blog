const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pleiades") {
    myImage.setAttribute("src", "images/PleiadesOG");
  } else {
    myImage.setAttribute("src", "images/pleiades");
  }
};
