const tarjetas = document.querySelectorAll('.card-header');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        if (tarjeta.classList.contains('selected')) {
            tarjeta.classList.remove('selected');
        } else {
            // Removemos la clase 'selected' de todas las tarjetas
            tarjetas.forEach(t => t.classList.remove('selected'));
            // Agregamos la clase 'selected' solo a la tarjeta clickeada
            tarjeta.classList.add('selected');
        }
    });
});