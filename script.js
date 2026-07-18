document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    if(index === 0){
      window.location.href = "summarizer.html";
    } else {
      alert("This AI tool is coming soon!");
    }
  });
});
