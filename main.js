//Evento para crear nuevo libro
document.getElementById("formulario").addEventListener("submit", crear);

//funcion crear

function crear(e) {
  titulo = document.getElementById("titulo").value;
  descripcion = document.getElementById("descripcion").value;
  precio = document.getElementById("precio").value;

  let libro = {
    titulo,
    descripcion,
    precio,
  };

  if (localStorage.getItem("Libros") === null) {
    let libros = [];
    libros.push(libro);
    localStorage.setItem("Libros", JSON.stringify(libros));
  } else {
    let libros = localStorage.getItem(JSON.parse("Libros"));
    libros.push(libro);
    localStorage.setItem("Libros", JSON.stringify(libros));
  }
  leer();
  document.getElementById("formulario").reset();
  e.preventDefault();
  console.log("Libro Guardado");
}

//funcion leer libro
function leer() {
  let libros = JSON.parse(localStorage.getItem("Libros"));
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < libros.length; i++) {
    let titulo = libros[i].titulo;
    let descripcion = libros[i].descripcion;
    let precio = libros[i].precio;

    document.getElementById("tbody").innerHTML += ` <tr>
             
        <td>${titulo}</td>
        <td>${descripcion}</td>
        <td>${precio}</td>
        <td><button onclick="eliminar()" class="btn btn-danger">Eliminar</button></td>
        <td><button onclick="editar()" class="btn btn-succes">Editar</button></td>
      </tr> `;
  }
}

//funcion editar
function editar(){
    
}


leer();
