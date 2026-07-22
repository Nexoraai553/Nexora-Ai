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

// ================= START =================

changeLanguage();

// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (themeBtn) {
        themeBtn.innerText = "☀️";
    }
}

if (themeBtn) {

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
