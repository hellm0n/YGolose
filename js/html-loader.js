async function loadComponent(id, path) {
    const response = await fetch(path);
    const text = await response.text();
    const item = document.getElementById(id);
    item.innerHTML = text;
}

function setHighlight(){
    const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
    const navs = document.querySelectorAll(".nav-item");

    console.log("start", navs.length);

    navs.forEach(nav => {
        if (nav.dataset.page == currentUrl) nav.classList.add("selected-nav");
        else nav.classList.remove("selected-nav");
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("place-header", "../pages/header-footer/header.html");
    await loadComponent("place-footer", "../pages/header-footer/footer.html");

    setHighlight();
});