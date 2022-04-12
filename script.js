
function logic() {
        com = document.getElementById("comment");
        if(inputWord.length != 5){
        com.innerHTML="INVALID INPUT";
    }
}
var inputWord;
var com;
function submit() {
    inputWord = document.getElementById("input").value;
    console.log(inputWord);
    logic();
}