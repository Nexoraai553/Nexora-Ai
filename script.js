let currentLang = "en";

const langBtn = document.getElementById("langBtn");

if(langBtn){

langBtn.addEventListener("click", function(){

currentLang = currentLang === "en" ? "ar" : "en";

langBtn.innerText = currentLang === "en" ? "العربية" : "English";


document.documentElement.lang = currentLang;


if(currentLang === "ar"){

document.querySelector(".logo").innerHTML = "⚡ كويك AI";

document.querySelector("header h1").innerHTML =
"مساعدك الذكي لكل شيء";

document.querySelector("header p").innerHTML =
"أنشئ واكتب وطوّر أعمالك باستخدام أدوات الذكاء الاصطناعي.";


}else{

document.querySelector(".logo").innerHTML = "⚡ QuickAI";

document.querySelector("header h1").innerHTML =
"Your AI Assistant For Everything";

document.querySelector("header p").innerHTML =
"Create, write and improve your work with powerful AI tools.";

}


});

}



function openSummarizer(){

window.location.href = "summarizer.html";

}
