
const sections = document.querySelectorAll('.section');
function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('hidden');
});
