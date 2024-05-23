document.getElementsByTagName("UL")[0].addEventListener("click", event => {
    if (event.target.classList.contains("li")) {
        let text = event.target.innerText;
        alert(text)
    }
});