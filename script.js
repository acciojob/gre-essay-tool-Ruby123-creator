//your code here
let text = document.getElementById("evaluatedText");
let count = document.getElementById("wordCount");


text.addEventListener("input" , evaluate)

function evaluate(){
    let word = (text.value).split(" ").length;
    count.innerText = word;

}