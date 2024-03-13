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
      }).then((response) => console.log(response));
    
    console.log(`date: ${date}`);

  });