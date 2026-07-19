let currentLang = "en";

const btn = document.getElementById("langBtn");


function changeLanguage(){

const lang = currentLang;

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
translations[lang].home.tool5Desc;


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
