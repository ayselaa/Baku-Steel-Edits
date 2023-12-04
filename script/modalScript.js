export function modalScript(){
    document.addEventListener("DOMContentLoaded", function () {

    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const modal = document.getElementById("myModal");
    const iframe  = document.getElementById("videoIframe");

    if (openModalButton) {

    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
        iframe.setAttribute("src", "https://www.youtube.com/embed/LvUT7QGpAe4");

    });

}

if (openModalButton) {

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
        const iframeSrc = iframe.getAttribute("src");
    iframe.setAttribute("src", "");
    });
}
    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            const iframeSrc = iframe.getAttribute("src");
    iframe.setAttribute("src", "");
        }
    });
    
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            const iframeSrc = iframe.getAttribute("src");
    iframe.setAttribute("src", "");
        }
    });
});
}