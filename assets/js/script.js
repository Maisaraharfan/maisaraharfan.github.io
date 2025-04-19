
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  
  document.querySelectorAll('.sidebar nav ul li').forEach(el => {
    el.classList.remove('active');
  });
  event.target.classList.add('active');
}
