function openMenu(){
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
}

function toggleSub(){
  const sub = document.getElementById("submenuPelayanan");
  sub.style.display = sub.style.display === "block" ? "none" : "block";
}

const links = document.querySelectorAll(".nav-desktop a");
const current = location.pathname.split("/").pop();

links.forEach(link => {
  if(link.getAttribute("href") === current){
    link.classList.add("active");
  }
});
