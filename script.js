let currentLang = "en";

const btn = document.getElementById("langBtn");


function changeLanguage(){

const lang = currentLang;


// الشعار
const logo = document.getElementById("logo");
if(logo){
logo.innerText = translations[lang].home.logo;
}


// الصفحة الرئيسية
if(document.getElementById("homeTitle")){

document.getElementById("homeTitle").innerText =
translations[lang].home.title;

document.getElementById("homeDesc").innerText =
translations[lang].home.description;


document.getElementById("tool1").innerText =
translations[lang].home.tool1;

document.getElementById("desc1").innerText =
translations[lang].home.tool1Desc;


document.getElementById("tool2").innerText =
translations[lang].home.tool2;

document.getElementById("desc2").innerText =
translations[lang].home.tool2Desc;


document.getElementById("tool3").innerText =
translations[lang].home.tool3;

document.getElementById("desc3").innerText =
translations[lang].home.tool3Desc;


document.getElementById("tool4").innerText =
translations[lang].home.tool4;

document.getElementById("desc4").innerText =
translations[lang].home.tool4Desc;


document.getElementById("tool5").innerText =
translations[lang].home.tool5;

document.getElementById("desc5").innerText =
translations[lang].home.tool5Desc;

}


// صفحة About
if(document.getElementById("whoTitle")){

document.getElementById("pageTitle").innerText =
translations[lang].about.title;

document.getElementById("pageDesc").innerText =
translations[lang].about.description;


document.getElementById("whoTitle").innerText =
translations[lang].about.whoTitle;

document.getElementById("whoDesc").innerText =
translations[lang].about.whoDesc;


document.getElementById("goalTitle").innerText =
translations[lang].about.goalTitle;

document.getElementById("goalDesc").innerText =
translations[lang].about.goalDesc;

}


// صفحة Contact
if(document.getElementById("emailTitle")){

document.getElementById("pageTitle").innerText =
translations[lang].contact.title;

document.getElementById("pageDesc").innerText =
translations[lang].contact.description;


document.getElementById("emailTitle").innerText =
translations[lang].contact.emailTitle || "📩 Email";


document.getElementById("emailDesc").innerText =
translations[lang].contact.email || "support@quickai.com";


document.getElementById("socialTitle").innerText =
translations[lang].contact.socialTitle || "🌍 Social Media";


document.getElementById("socialDesc").innerText =
translations[lang].contact.social || "Coming soon...";

}



// زر اللغة
if(btn){

btn.innerText = translations[lang].home.button;

}

}



if(btn){

btn.onclick = function(){

if(currentLang === "en"){

currentLang = "ar";

}else{

currentLang = "en";

}

changeLanguage();

};

}



function openSummarizer(){

window.location.href = "summarizer.html";

}


changeLanguage();
