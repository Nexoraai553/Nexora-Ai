let currentLang = "en";

document.getElementById("langBtn").addEventListener("click", function () {

  if (currentLang === "en") {
    currentLang = "ar";
    this.innerText = "English";
  } else {
    currentLang = "en";
    this.innerText = "العربية";
  }

  document.getElementById("title").innerText =
    translations[currentLang].title;

  document.getElementById("description").innerText =
    translations[currentLang].description;

  document.getElementById("summarizer").innerText =
    translations[currentLang].summarizer;

  document.getElementById("email").innerText =
    translations[currentLang].email;

  document.getElementById("blog").innerText =
    translations[currentLang].blog;

  document.getElementById("resume").innerText =
    translations[currentLang].resume;

  document.getElementById("translator").innerText =
    translations[currentLang].translator;

});


function openSummarizer(){
  window.location.href = "summarizer.html";
}
