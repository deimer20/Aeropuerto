function validateDates() {
    const departingDate = new Date(document.getElementById("departing").value);
    const returningDate = new Date(document.getElementById("returning").value);
    const currentDate = new Date();

    if (departingDate < currentDate || returningDate < currentDate) {
        alert("Error: Departing and returning dates cannot be in the past.");
    } else if (departingDate > returningDate) {
        alert("Error: Departing date cannot be greater than returning date.");
    } else {
        // Aquí puedes realizar las acciones necesarias si las validaciones son exitosas
        // Por ejemplo, mostrar los vuelos disponibles
        alert("Flight search successful!");
    }
}

