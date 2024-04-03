

let sAPI = [
  "http://localhost:2000/medic/listing",
  "http://localhost:2000/medicine/listing",
  "http://localhost:2000/user/listing",
];



if (window.location.pathname.includes("consultas")) {

  let listapaciente = document.getElementById("pacientes");
  let listamedicos = document.getElementById("medicos");
  let listamedicamentos = document.getElementById("medicamentos");
  
  let listapaciente2 = document.getElementById("2pacientes");
  let listamedicos2 = document.getElementById("2medicos");
  let listamedicamentos2 = document.getElementById("2medicamentos");
  
  


  function autotabla1(sAPI) {
    let Paso2 = -1;
  
    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;
  
    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";
  
        var results = res;
  
        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;
  
                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;
  
                  break;
                }
  
                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }
  
        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listamedicamentos.append(elemento);
        }
      });
  }
  function autotabla2(sAPI) {
    let Paso2 = -1;
  
    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;
  
    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";
  
        var results = res;
  
        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;
  
                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;
  
                  break;
                }
  
                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }
  
        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " " + res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listamedicos.append(elemento);
        }
      });
  }
  function autotabla3(sAPI) {
    let Paso2 = -1;
  
    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;
  
    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";
  
        var results = res;
  
        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;
  
                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;
  
                  break;
                }
  
                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }
  
        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " " + res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listapaciente.append(elemento);
        }
      });
  }
  
  autotabla1(sAPI[1]);
  autotabla2(sAPI[0]);
  autotabla3(sAPI[2]);

  function autotabla4(sAPI) {
    let Paso2 = -1;

    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;

    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";

        var results = res;

        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;

                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;

                  break;
                }

                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }

        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listapaciente2.append(elemento);
        }
      });
  }
  function autotabla5(sAPI) {
    let Paso2 = -1;

    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;

    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";

        var results = res;

        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;

                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;

                  break;
                }

                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }

        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " " + res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listamedicos2.append(elemento);
        }
      });
  }
  function autotabla6(sAPI) {
    let Paso2 = -1;

    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;

    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";

        var results = res;

        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;

                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;

                  break;
                }

                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }

        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " " + res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listamedicamentos2.append(elemento);
        }
      });
  }

  autotabla4(sAPI[1]);
  autotabla5(sAPI[0]);
  autotabla6(sAPI[2]);
}


if (window.location.pathname.includes("citas")) {
  
let listamedicos3 = document.getElementById("3medicos");
let listapacientes3 = document.getElementById("3pacientes");

  
  
  autotabla7(sAPI[2]);
  autotabla8(sAPI[0]);

  function autotabla7(sAPI) {
    let Paso2 = -1;

    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;

    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";

        var results = res;

        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;

                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;

                  break;
                }

                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }

        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " "+  res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listapacientes3.append(elemento);
        }
      });
  }
  function autotabla8(sAPI) {
    let Paso2 = -1;

    let largo2 = 0;
    let keys2 = [];
    let ind2 = 0;
    let ronda2 = 0;

    fetch(sAPI)
      .then((res) => res.json())
      .then((res) => {
        let f2 = true;
        let c2;
        let cancelar2 = "";

        var results = res;

        if (results.length > 0) {
          // iterating through the results array
          for (var i = 0; i < results.length; i++) {
            largo2 += 1 * results.length;
            // get i-th object in the results array
            var columnsIn = results[i];
            // loop through every key in the object
            if (f2 == true) {
              for (var key2 in columnsIn) {
                keys2[ind2] = key2;

                ind2 += 1;
                if (cancelar2 == key2 && c2 == true) {
                  f2 = false;

                  break;
                }

                if (cancelar2 == "") {
                  cancelar2 = key2;
                  c2 = true;
                  ronda2 += 1;
                }
              }
            }
          }
        }

        for (let i = 0; i < results.length; i++) {
          let elemento = document.createElement("option");
          elemento.innerText = res[i][keys2[1]] + " " + res[i][keys2[2]];
          elemento.setAttribute("value", res[i][keys2[0]]);
          listamedicos3.append(elemento);
        }
      });
  }


}