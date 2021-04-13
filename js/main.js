"use strict";

let poem = [];

// localStorage.setItem("dataKey", poem);

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
  let line = "Vi " + document.querySelector('#add-poem-form input[name=name]').value;

  newPoemArray.push(line);

  document.querySelector("#grid-poem").innerHTML = newPoemArray;

  localStorage.setItem("dataKey", newPoemArray);

  changeCharachters();
}


/*

First you should get the data into a variable

var getData =
{
   "firstData":"data1",
   "secondData":"data2",
   "thirdData": "data3"
}
Then you can set the above data's in localStorage...

localStorage.setItem('dataKey', JSON.stringify(getData ));
Then get....

var val = localStorage.getItem('dataKey');

*/
