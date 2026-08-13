let currentLang = localStorage.getItem("language") || "en";

function setText(id, text) {
const element = document.getElementById(id);

if (element) {
    element.innerText = text;
}

}

function changeLanguage() {

const lang = currentLang;
const t = translations[lang];

// ================= LOGO =================

setText("logo", t.home.logo);

// ================= NAVIGATION =================

setText("homeNav", t.home.homeNav);
setText("aboutNav", t.home.aboutNav);
setText("pricingNav", t.home.pricingNav);
setText("contactNav", t.home.contactNav);

// ================= LANGUAGE BUTTON =================

const btn = document.getElementById("langBtn");

if (btn) {
    btn.innerText = t.home.button;
}

// ================= HOME =================

setText("homeTitle", t.home.title);
setText("homeDesc", t.home.description);

setText("tool1", t.home.tool1);
setText("desc1", t.home.tool1Desc);

setText("tool2", t.home.tool2);
setText("desc2", t.home.tool2Desc);

setText("tool3", t.home.tool3);
setText("desc3", t.home.tool3Desc);

setText("tool4", t.home.tool4);
setText("desc4", t.home.tool4Desc);

setText("tool5", t.home.tool5);
setText("desc5", t.home.tool5Desc);

// ================= ABOUT =================

setText("pageTitle", t.about.title);
setText("pageDesc", t.about.description);

setText("whoTitle", t.about.whoTitle);
setText("whoDesc", t.about.whoDesc);

setText("goalTitle", t.about.goalTitle);
setText("goalDesc", t.about.goalDesc);

// ================= CONTACT =================

setText("contactTitle", t.contact.title);
setText("contactDesc", t.contact.description);

setText("emailTitle", t.contact.emailTitle);
setText("email", t.contact.email);

setText("socialTitle", t.contact.socialTitle);
setText("social", t.contact.social);

// ================= SUMMARIZER =================

setText("summarizerTitle", t.summarizer.title);
setText("summarizerDesc", t.summarizer.description);

const inputText = document.getElementById("inputText");

if (inputText) {
    inputText.placeholder = t.summarizer.placeholder;
}

setText("summarizeBtn", t.summarizer.button);
setText("resultTitle", t.summarizer.resultTitle);
setText("result", t.summarizer.result);

// ================= EMAIL WRITER =================

setText("emailTitlePage", t.emailWriter.title);
setText("emailDesc", t.emailWriter.description);

const emailInput = document.getElementById("emailInput");

if (emailInput) {
    emailInput.placeholder = t.emailWriter.placeholder;
}

setText("generateBtn", t.emailWriter.button);
setText("emailResultTitle", t.emailWriter.resultTitle);
setText("emailResult", t.emailWriter.result);

// ================= BLOG WRITER =================

setText("blogTitle", t.blogWriter.title);
setText("blogDesc", t.blogWriter.description);

const blogInput = document.getElementById("blogInput");

if (blogInput) {
    blogInput.placeholder = t.blogWriter.placeholder;
}

setText("generateBlogBtn", t.blogWriter.button);
setText("blogResultTitle", t.blogWriter.resultTitle);
setText("blogResult", t.blogWriter.result);

// ================= RESUME BUILDER =================

setText("resumeTitle", t.resumeBuilder.title);
setText("resumeDesc", t.resumeBuilder.description);

const resumeInput = document.getElementById("resumeInput");

if (resumeInput) {
    resumeInput.placeholder = t.resumeBuilder.placeholder;
}

setText("generateResumeBtn", t.resumeBuilder.button);
setText("resumeResultTitle", t.resumeBuilder.resultTitle);
setText("resumeResult", t.resumeBuilder.result);

// ================= TRANSLATOR =================

setText("translatorTitle", t.translator.title);
setText("translatorDesc", t.translator.description);

const translatorInput = document.getElementById("translatorInput");

if (translatorInput) {
    translatorInput.placeholder = t.translator.placeholder;
}

setText("translateBtn", t.translator.button);
setText("translatorResultTitle", t.translator.resultTitle);
setText("translatorResult", t.translator.result);

// ================= PRICING =================

setText("pricingTitle", t.pricing.title);
setText("pricingDesc", t.pricing.description);

setText("freeTitle", t.pricing.freeTitle);
setText("freeDesc", t.pricing.freeDesc);
setText("free1", t.pricing.free1);
setText("free2", t.pricing.free2);
setText("free3", t.pricing.free3);
setText("free4", t.pricing.free4);
setText("freeBtn", t.pricing.freeBtn);

setText("proTitle", t.pricing.proTitle);
setText("proDesc", t.pricing.proDesc);
setText("pro1", t.pricing.pro1);
setText("pro2", t.pricing.pro2);
setText("pro3", t.pricing.pro3);
setText("pro4", t.pricing.pro4);
setText("pro5", t.pricing.pro5);
setText("proBtn", t.pricing.proBtn);

setText("businessTitle", t.pricing.businessTitle);
setText("businessDesc", t.pricing.businessDesc);
setText("business1", t.pricing.business1);
setText("business2", t.pricing.business2);
setText("business3", t.pricing.business3);
setText("business4", t.pricing.business4);
setText("business5", t.pricing.business5);
setText("businessBtn", t.pricing.businessBtn);

// ================= PRO PAGE =================

if (document.getElementById("proPageTitle")) {

    setText("proPageTitle", t.proPage.title);
    setText("proPageDesc", t.proPage.description);

    setText("proPlanTitle", t.proPage.planTitle);
    setText("proPlanDesc", t.proPage.planDescription);

    setText("proFeature1", t.proPage.feature1);
    setText("proFeature2", t.proPage.feature2);
    setText("proFeature3", t.proPage.feature3);
    setText("proFeature4", t.proPage.feature4);
    setText("proFeature5", t.proPage.feature5);

    setText("paymentTitle", t.proPage.paymentTitle);
    setText("paymentDesc", t.proPage.paymentDescription);
    setText("paymentBtn", t.proPage.paymentButton);

    setText("backBtn", t.proPage.backButton);

}

// ================= RTL =================

if (lang === "ar") {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
} else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
}

}

// ================= LANGUAGE BUTTON =================

document.addEventListener("DOMContentLoaded", function () {

const btn = document.getElementById("langBtn");

if (btn) {

    btn.onclick = function () {

        currentLang = currentLang === "en" ? "ar" : "en";

        localStorage.setItem("language", currentLang);

        changeLanguage();
    };

}

changeLanguage();

});

// ================= NAVIGATION =================

function openSummarizer() {
window.location.href = "summarizer.html";
}

function openEmailWriter() {
window.location.href = "email.html";
}

function openBlogWriter() {
window.location.href = "blog.html";
}

function openResumeBuilder() {
window.location.href = "resume.html";
}

function openTranslator() {
window.location.href = "translator.html";
}

// ================= DARK MODE =================

document.addEventListener("DOMContentLoaded", function () {

const themeBtn = document.getElementById("themeBtn");

if (!themeBtn) {
    return;
}

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeBtn.innerText = "☀️";

} else {

    themeBtn.innerText = "🌙";

}

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.innerText = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.innerText = "🌙";

    }

};

});
