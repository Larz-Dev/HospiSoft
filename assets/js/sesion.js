document.getElementById("cerrarsesion").addEventListener("click",CerrarSesion);



let Email =localStorage.getItem('EMAIL');
let User =localStorage.getItem('USER');
let ID =localStorage.getItem('ID');
let Role =localStorage.getItem('ROLE');

document.getElementById("email").innerText = Email;
document.getElementById("user").innerText = User;
document.getElementById("role").innerText = Role;
//document.getElementById("id").innerText = ID;



function CerrarSesion() {

    localStorage.setItem('EMAIL',"");
    localStorage.setItem('ID',"");
    localStorage.setItem('USER',"");
    localStorage.setItem('ROLE',"");
    window.location.replace("pages-login.html")
  }