"use strict";

let poem = [];

function resetLocalStorage() {
  localStorage.setItem("dataKey", poem);
  window.location.reload();
}

let newPoemArray = [];

console.log(newPoemArray);

let localData = localStorage.getItem("dataKey");

newPoemArray.push(localData);

document.querySelector("#grid-poem").innerHTML = "<h2>" + localData; + "</h2>"

function changeCharachters() {
  // Replace all the "," in the page with "&emsp;"
  document.querySelector("#grid-poem").innerHTML = document.querySelector("#grid-poem").innerHTML.replace(/,/g, "<br>");
}

changeCharachters();

// ----------------------------- //

function pushLine() {
  // get the values from the input fields
  let line = "<i>Vi</i> " + document.querySelector('#add-poem-form input[name=name]').value;

  newPoemArray.push(line);

  document.querySelector("#grid-poem").innerHTML = newPoemArray;

  localStorage.setItem("dataKey", newPoemArray);

  changeCharachters();
}
