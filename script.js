let currentLang = "en";

const btn = document.getElementById("langBtn");

if (btn) {

btn.onclick = function(){

if(currentLang === "en"){

currentLang = "ar";
btn.innerText = "English";

document.querySelector(".logo").innerText = "⚡ كويك AI";

document.querySelector("header h1").innerText =
"مساعدك الذكي لكل شيء";

document.querySelector("header p").innerText =
"أنشئ واكتب وطوّر أعمالك باستخدام أدوات الذكاء الاصطناعي.";


document.getElementById("tool1").innerText =
"🤖 ملخص النصوص بالذكاء الاصطناعي";

document.getElementById("desc1").innerText =
"لخص المقالات والملفات والنصوص الطويلة بسرعة.";


document.getElementById("tool2").innerText =
"✉️ كاتب البريد الإلكتروني بالذكاء الاصطناعي";

document.getElementById("desc2").innerText =
"أنشئ رسائل بريد احترافية خلال ثوانٍ.";


document.getElementById("tool3").innerText =
"📝 كاتب المقالات بالذكاء الاصطناعي";

document.getElementById("desc3").innerText =
"أنشئ أفكارًا ومقالات بشكل أسرع.";


document.getElementById("tool4").innerText =
"📄 منشئ السيرة الذاتية بالذكاء الاصطناعي";

document.getElementById("desc4").innerText =
"أنشئ سيرتك الذاتية بسهولة.";


document.getElementById("tool5").innerText =
"🌍 المترجم بالذكاء الاصطناعي";

document.getElementById("desc5").innerText =
"ترجم النصوص بين لغات متعددة.";

}


else{


currentLang = "en";
btn.innerText = "العربية";


document.querySelector(".logo").innerText =
"⚡ QuickAI";

document.querySelector("header h1").innerText =
"Your AI Assistant For Everything";

document.querySelector("header p").innerText =
"Create, write and improve your work with powerful AI tools.";


document.getElementById("tool1").innerText =
"🤖 AI Text Summarizer";

document.getElementById("desc1").innerText =
"Summarize articles, documents and long texts instantly.";


document.getElementById("tool2").innerText =
"✉️ AI Email Writer";

document.getElementById("desc2").innerText =
"Create professional emails in seconds.";


document.getElementById("tool3").innerText =
"📝 AI Blog Writer";

document.getElementById("desc3").innerText =
"Generate ideas and write articles faster.";


document.getElementById("tool4").innerText =
"📄 AI Resume Builder";

document.getElementById("desc4").innerText =
"Build your professional CV easily.";


document.getElementById("tool5").innerText =
"🌍 AI Translator";

document.getElementById("desc5").innerText =
"Translate text between many languages.";

}

};

}


function openSummarizer(){

window.location.href = "summarizer.html";

}
