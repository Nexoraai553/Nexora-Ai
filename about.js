let currentLang = "en";

const btn = document.getElementById("langBtn");


btn.onclick = function(){

if(currentLang === "en"){

currentLang = "ar";
btn.innerText = "English";


document.getElementById("pageTitle").innerText =
"عن QuickAI";

document.getElementById("pageDesc").innerText =
"منصة ذكاء اصطناعي للإبداع وزيادة الإنتاجية.";


document.getElementById("whoTitle").innerText =
"من نحن؟";

document.getElementById("whoDesc").innerText =
"QuickAI منصة تجمع أدوات ذكاء اصطناعي مفيدة في مكان واحد وبطريقة سهلة.";


document.getElementById("goalTitle").innerText =
"هدفنا";

document.getElementById("goalDesc").innerText =
"جعل أدوات الذكاء الاصطناعي سهلة ومتاحة للجميع.";


}

else{


currentLang = "en";
btn.innerText = "العربية";


document.getElementById("pageTitle").innerText =
"About QuickAI";

document.getElementById("pageDesc").innerText =
"Your AI platform for creativity and productivity.";


document.getElementById("whoTitle").innerText =
"Who are we?";

document.getElementById("whoDesc").innerText =
"QuickAI is a platform that brings useful artificial intelligence tools together in one simple place.";


document.getElementById("goalTitle").innerText =
"Our goal";

document.getElementById("goalDesc").innerText =
"Making AI tools easy and accessible for everyone.";

}

};
