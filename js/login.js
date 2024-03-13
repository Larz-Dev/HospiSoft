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
      }).then((response) => console.log(response));
    // Log the values
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  });