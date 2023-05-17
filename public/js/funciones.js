verificar = () => {

    const departingDate = new Date(document.getElementById('departing').value);
    const returningDate = new Date(document.getElementById('returning').value);
    const currentDate = new Date();


    if (departingDate < currentDate || returningDate < currentDate) {
        alert("Error: •	La fecha departing o la fecha returning es inferior a la fecha actual..");
    } else if (departingDate > returningDate) {
        alert("Error: La fecha de salida no puede ser posterior a la fecha de regreso.");
    } else {
        alert("Búsqueda de vuelo exitosa!");
    }
}


const boton = document.querySelector('#showFligths')

boton.addEventListener('click',verificar)