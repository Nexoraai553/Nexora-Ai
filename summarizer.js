let currentLang = "en";

const btn = document.getElementById("langBtn");

btn.onclick = function(){

if(currentLang === "en"){

currentLang = "ar";
btn.innerText = "English";


document.getElementById("pageTitle").innerText =
"تلخيص النصوص بالذكاء الاصطناعي";

document.getElementById("pageDesc").innerText =
"لخص النصوص بسرعة باستخدام الذكاء الاصطناعي.";


document.getElementById("inputText").placeholder =
"اكتب النص هنا...";


document.getElementById("summarizeBtn").innerText =
"تلخيص";


document.getElementById("resultTitle").innerText =
"النتيجة";


document.getElementById("result").innerText =
"سيظهر الملخص هنا.";

}

else{


currentLang = "en";
btn.innerText = "العربية";


document.getElementById("pageTitle").innerText =
"AI Text Summarizer";


document.getElementById("pageDesc").innerText =
"Summarize your text quickly using AI.";


document.getElementById("inputText").placeholder =
"Write your text here...";


document.getElementById("summarizeBtn").innerText =
"Summarize";


document.getElementById("resultTitle").innerText =
"Result";


document.getElementById("result").innerText =
"Your summary will appear here.";

}

};



// Simple summarizer demo

document.getElementById("summarizeBtn").onclick = function(){

let text = document.getElementById("inputText").value;


if(text.length < 20){

document.getElementById("result").innerText =
"Please enter a longer text.";

return;

}


let words = text.split(" ");

let summary = words.slice(0, Math.ceil(words.length / 3)).join(" ");


document.getElementById("result").innerText =
summary + "...";

};
