



let btnConsultar = document.getElementById("buscar");
let reload = 0;
let idbuscar =0;

btnConsultar.addEventListener("click", () => {
  reload +=1

  if(reload >=2){

    window.location.reload();
   
  }


  if(reload >= 1){
    btnConsultar.innerText = "Realizar nueva consulta"
    idbuscar = document.getElementById("3pacientes").value;
    btnConsultar.removeAttribute("class")
    btnConsultar.setAttribute("class", "btn btn-warning")
    autotabla(API)
    document.getElementsByClassName("dt-empty")[0].remove();
  
  }
    
  
  
  

})




  

  let Paso = -1;
  let API = "http://localhost:2000/history/listing?id="

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

    fetch(API + idbuscar)

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
          ;
            let contenido = res[i][keys[j]] + "";
            JSON.stringify(contenido);
            contenido.replace(/"|{|}/g, " ");

            if (contenido.includes("https://")) {
              contenido = `<img src="${
                res[i][keys[j]]
              }" class="img-thumbnail">`;
            }

            fila.innerHTML += `<td scope="col">${contenido}  </td>`;
      
           

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


