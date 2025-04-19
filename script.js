
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main-content');
    if (sidebar.style.width === '60px') {
        sidebar.style.width = '200px';
        main.style.marginLeft = '200px';
    } else {
        sidebar.style.width = '60px';
        main.style.marginLeft = '60px';
    }
}
