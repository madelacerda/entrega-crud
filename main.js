//Evento para crear nuevo libro
document.getElementById("formulario").addEventListener("submit", crear);
let libros = [];
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

  libros.push(libro);
  localStorage.setItem("Libros", JSON.stringify(libros));

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
        <td><button onclick="eliminar('${titulo}')" class="btn btn-danger">Eliminar</button></td>
        <td><button onclick="editar('${titulo}')" class="btn btn-succes">Editar</button></td>
      </tr> `;
  }
}

//funcion editar
function editar(titulo) {
  let libros = JSON.parse(localStorage.getItem("Libros"));
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo === titulo) {
      document.getElementById("body").innerHTML = ` <div class="row">
            <div class="col-md-5">
              <div class="card">
                <div class="card-header">
                  <h2>Editar  libro</h2>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        id="newtitulo"
                        class="form-control"
                        placeholder="${libros[i].titulo}"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        id="newdescripcion"
                        class="form-control"
                        placeholder="${libros[i].descripcion}"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control"
                        id="newprecio"
                        placeholder="${libros[i].precio}"
                      />
                    </div>
                  
                  </form>  
                  <button  class="btn btn-succes"  onclick="actualizar('${i}')">Actualizar</button>
                  <button  class="btn btn-primary" onclick="vistaPrincipal()">Cancelar</button>
                </div>
              </div>
            </div>
          </div>`;
    }
  }
}

//Funcion actualizar
function actualizar(i) {
  let libros = JSON.parse(localStorage.getItem("Libros"));
  libros[i].titulo = document.getElementById("newtitulo").value;
  libros[i].descripcion = document.getElementById("newdescripcion").value;
  libros[i].precio = document.getElementById("newprecio").value;
  if (libros[i].titulo == "") {
    alert("No ha ingresado el titulo");
  } else {
    if (libros[i].descripcion == "") {
      alert("No ha ingresado la descripcion");
    } else {
      if (libros[i].precio == "") {
        alert("No ha ingresado el precio");
      } else {
        localStorage.setItem("Libros", JSON.stringify(libros));
        vistaPrincipal();
      }
    }
  }
}

//funcion eliminar
function eliminar(titulo) {
  let libros = JSON.parse(localStorage.getItem("Libros"));
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo === titulo) {
      libros.splice(i, 1);
    }
  }

  localStorage.setItem("Libros", JSON.stringify(libros));
  leer();
}

function vistaPrincipal() {
  document.getElementById("body").innerHTML = `<div class="row">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">
          <h2>agregar un libro</h2>
        </div>
        <div class="card-body">
          <form id="formulario">
            <div class="form-group">
              <input
                type="text"
                id="titulo"
                class="form-control"
                placeholder="Ingresar titulo"
              />
            </div>
            <div class="form-group">
              <textarea
                id="descripcion"
                class="form-control"
                placeholder="ingresar descripcion"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                id="precio"
                placeholder="ingresar precio"
              />
            </div>
            <button type="submit" class="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr>
          <td>Señor de los anillos</td>
          <td>Libro de fantasia</td>
          <td>50.000</td>
        </tr>
      </tbody>
    </table>
  </div>`;
  leer();
}

leer();
