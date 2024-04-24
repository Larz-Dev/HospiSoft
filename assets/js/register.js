document.getElementById("registerForm")?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    const formData = new FormData(event.target);
  
    // Get the values of the input fields

    const date = formData.get("date") ;
  
    var datos = {};
    formData.forEach(function(value, key){
        datos[key] = value;
    });
    var json = JSON.stringify(datos);

   fetch("http://localhost:2000/user/create", {
       
    headers: {"Content-Type": "application/json"},
     method: "POST",
        mode: "cors",
        body: json,
      }
      ).then(function(response) {

        return response.json();
      }).then(function(data) {
 
if(data.status == "error"){

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.mensaje,
    
      });
}

if(data.status == "ok"){

    Swal.fire({
        icon: "success",
        title: "Correcto",
        text: data.mensaje,
    
      });
      window.location.replace("pages-login.html")
}

      });
    

  });