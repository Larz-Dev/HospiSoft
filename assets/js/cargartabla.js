

if(window.location.pathname.includes("historias") ){

  let buscar = document.getElementById("buscar")
  buscar.addEventListener("click",mostrar)

}else{



  setTimeout(() => {
    
    const datatables = document.querySelectorAll('.datatable');
    
    datatables.forEach(datatable => {
      new DataTable(datatable, {
   
responsive: true,
    
        layout: {
    
          topEnd:{ buttons: ['copy', 'excel', 'pdf', 'print']},
          bottomEnd: {
            buttons: ['pageLength'],
            }
        }
    });
      })
    }, "200");




}



function mostrar() {
  


  setTimeout(() => {
    
    const datatables = document.querySelectorAll('.datatable');
    
    datatables.forEach(datatable => {
      new DataTable(datatable, {
   
responsive: true,
    
        layout: {
    
          topEnd:{ buttons: ['copy', 'excel', 'pdf', 'print']},
          bottomEnd: {
            buttons: ['pageLength'],
            }
        }
    });
      })
    }, "200");




}

