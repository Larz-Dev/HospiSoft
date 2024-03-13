document.getElementById("loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    const formData = new FormData(event.target);
  
    // Get the values of the input fields
    const name = formData.get("username")  ;
    const email = formData.get("password") ;
  
    var datos = {};
    formData.forEach(function(value, key){
        datos[key] = value;
    });
    var json = JSON.stringify(datos);

    fetch("http://localhost:2000/user/login", {
       
    headers: {"Content-Type": "application/json"},
     method: "POST",
        mode: "cors",
        body: json,
      }).then(function(response) {

        return response.json();
      }).then(function(data) {
        console.log(data)


        if(data.status == "ok"){


            Swal.fire({
                icon: "success",
                title: "Correcto",
                text: data.mensaje,
            
              });

              localStorage.setItem('EMAIL',data.email);
              localStorage.setItem('ID',data.id);
              localStorage.setItem('USER',data.user);
              setTimeout(() => {
            


                console.log(localStorage.getItem('EMAIL'));
                console.log(localStorage.getItem('ID'));
                console.log(localStorage.getItem('USER'));
                window.location.replace("index.html")
            }, "1500");
        }

if(data.status == "error"){

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.mensaje,
    
      });
}


      });

  });



  function CerrarSesion() {

    localStorage.setItem('EMAIL',"");
    localStorage.setItem('ID',"");
    localStorage.setItem('USER',"");
    
  }