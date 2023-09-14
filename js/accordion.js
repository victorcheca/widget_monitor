// Obtén todos los elementos del acordeón
const accordionItems = document.querySelectorAll('.accordion-item');

// Agrega un evento de clic a cada encabezado del acordeón
accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const arrow = header.querySelector('.arrow');
    let isOpen = false;

    header.addEventListener('click', () => {
        // Cambia la rotación de la flecha al primer clic
        arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        
        // Abre o cierra la sección al segundo clic
        if (!isOpen) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }

        isOpen = !isOpen;
    });
});
