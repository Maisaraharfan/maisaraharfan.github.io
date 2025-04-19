
function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth <= 768) {
        sidebar.style.width = "0";
        document.querySelector(".content").style.marginLeft = "0";
    }
}
