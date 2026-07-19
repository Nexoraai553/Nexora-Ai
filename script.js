let currentLang = "en";

const btn = document.getElementById("langBtn");


function changeLanguage(){

const lang = currentLang;


// الصفحة الرئيسية
if(document.getElementById("homeTitle")){

document.getElementById("logo").innerText =
translations[lang].home.logo;

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
translations[lang].home.home.tool5Desc;

}



// صفحة About
if(document.getElementById("pageTitle")){

document.getElementById("logo").innerText =
translations[lang].home.logo;


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


btn.innerText = translations[lang].home.button;

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
