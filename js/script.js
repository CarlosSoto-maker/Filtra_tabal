function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Recoremos todas la celdas de la tabla y escondemos las que no coincidan con lo que buscamos
    if(input.textContent != 'none'){
        for (i = 0; i < tr.length; i++) {
            visible = false;
            /* Obtenemos todas las celdas de la fila, no sólo la primera */
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
              if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                visible = true;
              }
            }
            if (visible === true) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
    }
  }
  //Segunda funcion para no tener altercados com buscar por secciones
  function myFunction2() {
    // Declare variables 
    var input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Recoremos todas la celdas de la tabla y escondemos las que no coincidan con lo que buscamos
        for (i = 0; i < tr.length; i++) {
            visible = false;
            /* Obtenemos todas las celdas de la fila, no sólo la primera */
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
              if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                visible = true;
              }
            }
            if (visible === true) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
    }