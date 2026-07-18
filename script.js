let currentLang = "en";

document.getElementById("langBtn").addEventListener("click", function () {

  currentLang = currentLang === "en" ? "ar" : "en";

  this.innerText = currentLang === "en" ? "العربية" : "English";

  document.getElementById("title").innerText = translations[currentLang].title;
  document.getElementById("description").innerText = translations[currentLang].description;

  document.getElementById("summarizer").innerText = translations[currentLang].summarizer;
  document.getElementById("summarizerDesc").innerText = translations[currentLang].summarizerDesc;

  document.getElementById("email").innerText = translations[currentLang].email;
  document.getElementById("emailDesc").innerText = translations[currentLang].emailDesc;

  document.getElementById("blog").innerText = translations[currentLang].blog;
  document.getElementById("blogDesc").innerText = translations[currentLang].blogDesc;

  document.getElementById("resume").innerText = translations[currentLang].resume;
  document.getElementById("resumeDesc").innerText = translations[currentLang].resumeDesc;

  document.getElementById("translator").innerText = translations[currentLang].translator;
  document.getElementById("translatorDesc").innerText = translations[currentLang].translatorDesc;

});


function openSummarizer(){
  window.location.href = "summarizer.html";
}
