let target = document.querySelector("#dynamic");
let stringArr = ["APPLE", "Mac", "iPad", "iPhone", "Watch", "AirPods"]
let start_word = "Watch";

// $(document).ready(function(){
//     alert("안녕하세요.");
// });

// $("#id or .class").click(function() {
// 01087054149;
// });

function randomString(){
    let stringIndex = Math.floor(Math.random() * stringArr.length)
    console.log(stringArr[stringIndex], start_word)
    while (true) {
        if (stringArr[stringIndex] == start_word) {
            stringIndex = Math.floor(Math.random() * stringArr.length)
            console.log('while', stringArr[stringIndex])
        } 
        break;
    }
    let selectString = stringArr[stringIndex];
    stringArr.splice(stringIndex, 1)
    let selectStringArr = selectString.split("");

    return selectStringArr;  
}


function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){
    // console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        if(stringArr.length <= 0) {
            stringArr = ["APPLE", "Mac", "iPad", "iPhone", "Watch", "AirPods"]
            start_word = target.textContent
            console.log('start_word', start_word)
        }
        //초기화
        setTimeout(resetTyping, 4000);
    }
}
dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

const data = new Data(2000,12,10)
console.log(data.toString())