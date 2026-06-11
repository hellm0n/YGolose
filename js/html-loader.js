async function loadComponent(id, path) {
    const respone = await fetch(path);
    const text = await respone.text();
    document.getElementById(id).innerHTML = text;
}

function setHighlight(){
    const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
    const navs = document.querySelectorAll(".nav-item");

    console.log("start", navs.length);

    navs.forEach(nav => {
        console.log("==== CHECK ====");
        console.log(nav.dataset.page, currentUrl);
        console.log(typeof nav.dataset.page, typeof currentUrl);
        console.log(nav.dataset.page === currentUrl);

        if (nav.dataset.page == currentUrl) nav.classList.add("selected-nav");
        else nav.classList.remove("selected-nav");
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("place-header", "../pages/header-footer/header.html");
    await loadComponent("place-footer", "../pages/header-footer/footer.html");

    setHighlight();
});