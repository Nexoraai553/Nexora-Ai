let currentLang = "en";

const btn = document.getElementById("langBtn");

function setText(id, text){

const element = document.getElementById(id);

if(element){
element.innerText = text;
}

}

function changeLanguage(){

const lang = currentLang;

// الشعار
setText("logo", translations[lang].home.logo);

// ================= HOME =================

if(document.getElementById("homeTitle")){

setText("homeTitle", translations[lang].home.title);
setText("homeDesc", translations[lang].home.description);

setText("tool1", translations[lang].home.tool1);
setText("desc1", translations[lang].home.tool1Desc);

setText("tool2", translations[lang].home.tool2);
setText("desc2", translations[lang].home.tool2Desc);

setText("tool3", translations[lang].home.tool3);
setText("desc3", translations[lang].home.tool3Desc);

setText("tool4", translations[lang].home.tool4);
setText("desc4", translations[lang].home.tool4Desc);

setText("tool5", translations[lang].home.tool5);
setText("desc5", translations[lang].home.tool5Desc);

}

// ================= ABOUT =================

if(document.getElementById("whoTitle")){

setText("pageTitle", translations[lang].about.title);
setText("pageDesc", translations[lang].about.description);

setText("whoTitle", translations[lang].about.whoTitle);
setText("whoDesc", translations[lang].about.whoDesc);

setText("goalTitle", translations[lang].about.goalTitle);
setText("goalDesc", translations[lang].about.goalDesc);

}

// ================= CONTACT =================

if(document.getElementById("emailTitle")){

setText("pageTitle", translations[lang].contact.title);
setText("pageDesc", translations[lang].contact.description);

setText("emailTitle", translations[lang].contact.emailTitle);
setText("emailDesc", translations[lang].contact.email);

setText("socialTitle", translations[lang].contact.socialTitle);
setText("socialDesc", translations[lang].contact.social);

}

// ================= SUMMARIZER =================

if(document.getElementById("inputText")){

setText("pageTitle", translations[lang].summarizer.title);
setText("pageDesc", translations[lang].summarizer.description);

document.getElementById("inputText").placeholder =
translations[lang].summarizer.placeholder;

setText("summarizeBtn", translations[lang].summarizer.button);

setText("resultTitle", translations[lang].summarizer.resultTitle);

setText("result", translations[lang].summarizer.result);

}

// ================= EMAIL WRITER =================

if(document.getElementById("emailInput")){

setText("pageTitle", translations[lang].emailWriter.title);

setText("pageDesc", translations[lang].emailWriter.description);

document.getElementById("emailInput").placeholder =
translations[lang].emailWriter.placeholder;

setText("generateBtn", translations[lang].emailWriter.button);

setText("resultTitle", translations[lang].emailWriter.resultTitle);

setText("result", translations[lang].emailWriter.result);

}

// زر اللغة

if(btn){

btn.innerText = translations[lang].home.button;

}

}
// ================= LANGUAGE BUTTON =================

if(btn){

btn.onclick = function(){

currentLang = currentLang === "en" ? "ar" : "en";

changeLanguage();

};

}

// ================= NAVIGATION =================

function openSummarizer(){

window.location.href = "summarizer.html";

}

function openEmailWriter(){
function openBlogWriter(){
  
window.location.href = "blog.html";

}
window.location.href = "email.html";

}

// ================= START =================

changeLanguage();

// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

if(themeBtn){
themeBtn.innerText = "☀️";
}

}

if(themeBtn){

themeBtn.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerText = "☀️";

}else{

localStorage.setItem("theme","light");

themeBtn.innerText = "🌙";

}

};

}
