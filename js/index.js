const form = document.querySelector("#formulario"); //Seleccionar formulario y guardar sus valores en la constante form
const input = document.querySelector("#comentario"); //Seleccionar input y guardar sus valores en la constante input
const boton = document.querySelector("#boton"); //Seleccionar boton y guardar sus valores en la constante boton

form.addEventListener("submit", async (e) => {
  // Agregra evento al formulario de tipo submit que es para mandar datos

  e.preventDefault(); //Para evitar que se recargue la pagina que es lo que hace por defecto el evento submit
  const valor = input.value; //Obtenemos el valor escrito en el input y lo guardamos en la constante valor
  if (!valor) {
    alert("Primero ingresa un comentario");
    return;
  }
  try {
    boton.disabled = true; //Deshabilitamos el boton
    const res = await fetch(
      //Realizar peticion
      "https://curriculum-fer-default-rtdb.firebaseio.com/cv.json",
      {
        method: "POST", //Indicamos el metodo de la peticion
        headers: {
          "Content-Type": "application/json", //Indicamos el tipo de datos
        },
        body: JSON.stringify(valor), //Mandamos el valor del input en formato JSON
      }
    );
    input.value = ""; //Vaciamos el valor del input
    alert("Gracias por sus comentarios, los revisaré"); //Mostramos alerta
  } catch (e) {
    //En caso de error lo muestra en la consola
    console.log(e);
    alert("Ocurrió un error, vuelva a intentarlo");
  } finally {
    boton.disabled = false; //Habilitamos otra vez el boton
  }
});

const registrarVisita = async () => {
  const fecha = new Date();
  const fecha2 = fecha.toLocaleDateString("es-Es");

  try {
    await fetch(
      //Realizar peticion
      "https://curriculum-fer-default-rtdb.firebaseio.com/cv.json",
      {
        method: "POST", //Indicamos el metodo de la peticion
        headers: {
          "Content-Type": "application/json", //Indicamos el tipo de datos
        },
        body: JSON.stringify(fecha2), //Mandamos el valor del input en formato JSON
      }
    );
  } catch (e) {
    console.log(e);
  }
};
