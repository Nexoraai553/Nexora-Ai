let currentLang = "en";

const btn = document.getElementById("langBtn");

function setText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    }
}

function changeLanguage() {

    const lang = currentLang;

    // ================= LOGO =================
    setText("logo", translations[lang].home.logo);

    // ================= HOME =================

    if (document.getElementById("homeTitle")) {

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

    if (document.getElementById("whoTitle")) {

        setText("pageTitle", translations[lang].about.title);
        setText("pageDesc", translations[lang].about.description);

        setText("whoTitle", translations[lang].about.whoTitle);
setText("whoDesc", translations[lang].about.whoDesc);

setText("missionTitle", translations[lang].about.missionTitle);
setText("missionDesc", translations[lang].about.missionDesc);

setText("whyTitle", translations[lang].about.whyTitle);
setText("whyDesc", translations[lang].about.whyDesc);

}
                    // ================= SUMMARIZER =================

    if (document.getElementById("inputText")) {

        setText("pageTitle", translations[lang].summarizer.title);
        setText("pageDesc", translations[lang].summarizer.description);

        document.getElementById("inputText").placeholder =
            translations[lang].summarizer.placeholder;

        setText("summarizeBtn", translations[lang].summarizer.button);
        setText("resultTitle", translations[lang].summarizer.resultTitle);
        setText("result", translations[lang].summarizer.result);

    }

    // ================= EMAIL WRITER =================

    if (document.getElementById("emailInput")) {

        setText("pageTitle", translations[lang].emailWriter.title);
        setText("pageDesc", translations[lang].emailWriter.description);

        document.getElementById("emailInput").placeholder =
            translations[lang].emailWriter.placeholder;

        setText("generateBtn", translations[lang].emailWriter.button);
        setText("resultTitle", translations[lang].emailWriter.resultTitle);
        setText("result", translations[lang].emailWriter.result);

    }

    // ================= BLOG WRITER =================

    if (document.getElementById("blogInput")) {

        setText("pageTitle", translations[lang].blogWriter.title);
        setText("pageDesc", translations[lang].blogWriter.description);

        document.getElementById("blogInput").placeholder =
            translations[lang].blogWriter.placeholder;

        setText("generateBlogBtn", translations[lang].blogWriter.button);
        setText("resultTitle", translations[lang].blogWriter.resultTitle);
        setText("blogResult", translations[lang].blogWriter.result);

    }

    // ================= RESUME BUILDER =================

if (document.getElementById("resumeInput")) {

    setText("pageTitle", translations[lang].resumeBuilder.title);
    setText("pageDesc", translations[lang].resumeBuilder.description);

    document.getElementById("resumeInput").placeholder =
        translations[lang].resumeBuilder.placeholder;

    setText("generateResumeBtn", translations[lang].resumeBuilder.button);
    setText("resultTitle", translations[lang].resumeBuilder.resultTitle);
    setText("resumeResult", translations[lang].resumeBuilder.result);

}

// ================= TRANSLATOR =================

if(document.getElementById("translatorInput")){

    setText("pageTitle", translations[lang].translator.title);

    setText("pageDesc", translations[lang].translator.description);

    document.getElementById("translatorInput").placeholder =
    translations[lang].translator.placeholder;

    setText("translateBtn", translations[lang].translator.button);

    setText("resultTitle", translations[lang].translator.resultTitle);

    setText("translatorResult", translations[lang].translator.result);

}

    // ================= PRICING =================

if (document.getElementById("freeTitle")) {

    setText("pageTitle", translations[lang].pricing.title);
    setText("pageDesc", translations[lang].pricing.description);

    setText("freeTitle", translations[lang].pricing.freeTitle);
    setText("freeDesc", translations[lang].pricing.freeDesc);
    setText("free1", translations[lang].pricing.free1);
    setText("free2", translations[lang].pricing.free2);
    setText("free3", translations[lang].pricing.free3);
    setText("free4", translations[lang].pricing.free4);
    setText("freeBtn", translations[lang].pricing.freeBtn);

    setText("proTitle", translations[lang].pricing.proTitle);
    setText("proDesc", translations[lang].pricing.proDesc);
    setText("pro1", translations[lang].pricing.pro1);
    setText("pro2", translations[lang].pricing.pro2);
    setText("pro3", translations[lang].pricing.pro3);
    setText("pro4", translations[lang].pricing.pro4);
    setText("pro5", translations[lang].pricing.pro5);
    setText("proBtn", translations[lang].pricing.proBtn);

    setText("businessTitle", translations[lang].pricing.businessTitle);
    setText("businessDesc", translations[lang].pricing.businessDesc);
    setText("business1", translations[lang].pricing.business1);
    setText("business2", translations[lang].pricing.business2);
    setText("business3", translations[lang].pricing.business3);
    setText("business4", translations[lang].pricing.business4);
    setText("business5", translations[lang].pricing.business5);
    setText("businessBtn", translations[lang].pricing.businessBtn);

}

    // ================= NAVIGATION TEXT =================

setText("homeNav", translations[lang].home.homeNav);
setText("aboutNav", translations[lang].home.aboutNav);
setText("pricingNav", translations[lang].home.pricingNav);
setText("contactNav", translations[lang].home.contactNav);
// زر اللغة يكون هنا
if (btn) {
    btn.innerText = translations[lang].home.button;
}

}
    // ================= LANGUAGE BUTTON =================

if (btn) {

    btn.onclick = function () {

        currentLang = currentLang === "en" ? "ar" : "en";

        changeLanguage();

    };

}

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

function openTranslator(){

    window.location.href = "translator.html";

}

// ================= START =================

changeLanguage();

// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // استرجاع آخر وضع محفوظ
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

}
