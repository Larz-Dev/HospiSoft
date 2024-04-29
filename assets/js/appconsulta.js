document.getElementById("dateform")?.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  var e = document.getElementById("pacientes");
  var val = e.value;

  document.getElementById("paci").value = val;

  e = document.getElementById("medicos");
  val = e.value;

  document.getElementById("medi").value = val;

  e = document.getElementById("medicamentos");
  val = e.value;

  document.getElementById("medica").value = val;

  document.getElementById("poso").value =
    document.getElementById("posologias").value;

  // Get the form data
  const formData = new FormData(event.target);

  // Get the values of the input fields

  var datos = {};
  formData.forEach(function (value, key) {
    datos[key] = value;
  });
  var json = JSON.stringify(datos);

  fetch("http://localhost:2000/formula/create", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    mode: "cors",
    body: json,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.status == "error") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.mensaje,
        });
      }

      if (data.status == "ok") {
        Swal.fire({
          icon: "success",
          title: "Correcto",
          text: data.mensaje,
        });
        setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    });
});

document.getElementById("feditar")?.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(event.target);

  // Get the values of the input fields

  var datos = {};
  formData.forEach(function (value, key) {
    datos[key] = value;
  });
  var json = JSON.stringify(datos);

  fetch("http://localhost:2000/formula/edit", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    mode: "cors",
    body: json,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.status == "error") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.mensaje,
        });
      }

      if (data.status == "ok") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, "1200");
      }
    });
});

function leer(idpaciente,idmedico,iddetalle,idconsecutivo,iditem, fecha,posologia,existencia) {
  
  document.getElementById("idconsecutivo").value = idconsecutivo;
   document.getElementById("iddetalle").value = iddetalle;
  document.getElementById("2pacientes").value = idpaciente;
  const date = new Date(fecha).toISOString().slice(0, 10);
  document.getElementById("efecha").value = date;
  document.getElementById("eposologia").value = posologia;
  document.getElementById("eexistencia").value = existencia ;
  document.getElementById("2medicamentos").value = iditem;

  document.getElementById("2medicos").value = idmedico;
}

let Paso = -1;
let API = "http://localhost:2000/formula/listing";
let largo = 0;
let keys = [];
let ind = 0;
let ronda = 0;

function autotabla(API) {
  let thead = document.getElementById("appendcabezera");
  let tbody = document.getElementById("tabla");

  let cabezeratabla = document.createElement("tr");
  let elementostabla = document.createElement("tbody");

  cabezeratabla.setAttribute("id", "cabezeratabla");
  elementostabla.setAttribute("id", "elementostabla");

  fetch(API)
    .then((res) => res.json())
    .then((res) => {
      let f = true;
      let c;
      let cancelar = "";
      var results = res;

      // you can loop through all, assuming that each result set is the same.

      if (results.length > 0) {
        // iterating through the results array
        for (var i = 0; i < results.length; i++) {
          largo += 1 * results.length;
          // get i-th object in the results array
          var columnsIn = results[i];
          // loop through every key in the object
          if (f == true) {
            for (var key in columnsIn) {
              keys[ind] = key;
              ind += 1;
              if (cancelar == key && c == true) {
                f = false;

                break;
              }

              cabezeratabla.innerHTML += `<th scope="col">${key} </th>`;

              if (cancelar == "") {
                cancelar = key;
                c = true;
                ronda += 1;
              }
            }
          }
        }
      }

      for (let i = 0; i < results.length; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < keys.length + Paso; j++) {
          let contenido = res[i][keys[j]] + "";
          JSON.stringify(contenido);
          contenido.replace(/"|{|}/g, " ");

          if (contenido.includes("https://")) {
            contenido = `<img src="${res[i][keys[j]]}" class="img-thumbnail">`;
          }

          fila.innerHTML += `<td scope="col">${contenido}  </td>`;
          fila.setAttribute("data-bs-toggle", "modal");
          fila.setAttribute("data-bs-target", "#exampleModal");
          fila.setAttribute("data-bs-whatever", "@mdo");
          fila.setAttribute("onclick", `leer(${res[i]["Id paciente"]},${res[i]["Id medico"]},${res[i]["Id detalle"]},${res[i]["consecutivo"]},${res[i]["Id item"]},"${res[i]["Fecha"]}","${res[i]["Posologia"]}",${res[i]["cantidad"]})`);

          elementostabla.appendChild(fila);
        }
      }

      //

      cabezeratabla.innerHTML += ` 
    </tbody>
  </table>
  
 `;
    });
  thead.append(cabezeratabla);
  tbody.append(elementostabla);
}

autotabla(API);
