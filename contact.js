let currentLang = "en";

const btn = document.getElementById("langBtn");


btn.onclick = function(){

if(currentLang === "en"){

currentLang = "ar";
btn.innerText = "English";


document.getElementById("pageTitle").innerText =
"تواصل معنا";

document.getElementById("pageDesc").innerText =
"يسعدنا سماع رأيك واقتراحاتك.";


document.getElementById("emailTitle").innerText =
"📩 البريد الإلكتروني";

document.getElementById("emailDesc").innerText =
"support@quickai.com";


document.getElementById("socialTitle").innerText =
"🌍 وسائل التواصل";

document.getElementById("socialDesc").innerText =
"قريبًا...";


}

else{


currentLang = "en";
btn.innerText = "العربية";


document.getElementById("pageTitle").innerText =
"Contact Us";

document.getElementById("pageDesc").innerText =
"We would love to hear from you.";


document.getElementById("emailTitle").innerText =
"📩 Email";

document.getElementById("emailDesc").innerText =
"support@quickai.com";


document.getElementById("socialTitle").innerText =
"🌍 Social Media";

document.getElementById("socialDesc").innerText =
"Coming soon...";

}

};
