console.log("Here");
var output = document.getElementById("arrow");

// function getRandomNumber() {
//   var randomNumber = Math.floor(Math.random() * 10) + 1; 
//   if (randomNumber <= 0.5){
//   	output.innerHTML = `<div id="arrow"><img src="https://cdn.pixabay.com/photo/2016/03/31/15/34/arrow-1293400_960_720.png">1</div>`;
//   } else {
//   	output.innerHTML = `<div id="arrow"><img src="http://moziru.com/images/right-clipart-blue-arrow-7.png">2</div>`;
//   }
// }
output.addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (randomNumber <= 0.5){
        output.innerHTML = `<div id="arrow"><img src="https://cdn.pixabay.com/photo/2016/03/31/15/34/arrow-1293400_960_720.png">1</div>`;
    } else {
        output.innerHTML = `<div id="arrow"><img src="http://moziru.com/images/right-clipart-blue-arrow-7.png">2</div>`;
    } 
});
