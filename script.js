let currentLang = "en";

const btn = document.getElementById("langBtn");

btn.onclick = function () {

  if (currentLang === "en") {

    currentLang = "ar";
    btn.innerText = "English";

    document.querySelector(".logo").innerText = "⚡ كويك AI";

    document.querySelector("header h1").innerText =
    "مساعدك الذكي لكل شيء";

    document.querySelector("header p").innerText =
    "أنشئ واكتب وطوّر أعمالك باستخدام أدوات الذكاء الاصطناعي.";

  } else {

    currentLang = "en";
    btn.innerText = "العربية";

    document.querySelector(".logo").innerText =
    "⚡ QuickAI";

    document.querySelector("header h1").innerText =
    "Your AI Assistant For Everything";

    document.querySelector("header p").innerText =
    "Create, write and improve your work with powerful AI tools.";

  }

};


function openSummarizer(){

window.location.href = "summarizer.html";

}
