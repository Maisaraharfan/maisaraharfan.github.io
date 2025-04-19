
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.sidebar nav ul li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');
}
