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


// الصفحة الرئيسية
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


// About
if(document.getElementById("whoTitle")){

setText("pageTitle", translations[lang].about.title);
setText("pageDesc", translations[lang].about.description);

setText("whoTitle", translations[lang].about.whoTitle);
setText("whoDesc", translations[lang].about.whoDesc);

setText("goalTitle", translations[lang].about.goalTitle);
setText("goalDesc", translations[lang].about.goalDesc);

}


// Contact
if(document.getElementById("emailTitle")){

setText("pageTitle", translations[lang].contact.title);
setText("pageDesc", translations[lang].contact.description);

setText("emailTitle", translations[lang].contact.emailTitle);
setText("emailDesc", translations[lang].contact.email);

setText("socialTitle", translations[lang].contact.socialTitle);
setText("socialDesc", translations[lang].contact.social);

}


// Summarizer
if(document.getElementById("resultTitle")){

setText("pageTitle", translations[lang].summarizer.title);
setText("pageDesc", translations[lang].summarizer.description);

document.getElementById("inputText").placeholder =
translations[lang].summarizer.placeholder;

setText("summarizeBtn", translations[lang].summarizer.button);

setText("resultTitle", translations[lang].summarizer.resultTitle);

setText("result", translations[lang].summarizer.result);

}


// زر اللغة

if(btn){

btn.innerText = translations[lang].home.button;

}

}



if(btn){

btn.onclick = function(){

currentLang = currentLang === "en" ? "ar" : "en";

changeLanguage();

};

}


function openSummarizer(){

window.location.href = "summarizer.html";

}


changeLanguage();
