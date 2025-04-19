function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
    section.classList.add("hidden");
  });

  document.getElementById(id).classList.add("active");
  document.getElementById(id).classList.remove("hidden");
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.remove("active");
}

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

