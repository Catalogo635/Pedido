    document.addEventListener("DOMContentLoaded", function () {
        const itemsPerPage = 9; // Número de productos por página
        const productList = document.getElementById("list"); // ID de la lista de productos
        const products = productList.getElementsByClassName("animals"); // Clase de cada producto
        const numPages = Math.ceil(products.length / itemsPerPage); // Calcular el número de páginas
    
        // Función para mostrar los productos en la página actual
        function showPage(page) {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
    
            for (let i = 0; i < products.length; i++) {
                if (i >= start && i < end) {
                    products[i].style.display = "block";
                } else {
                    products[i].style.display = "none";
                }
            }
        }
    
        // Función para crear la barra de paginación
        function createPagination() {
            const pagination = document.createElement("ul");
            pagination.classList.add("pagination");
    
            for (let i = 1; i <= numPages; i++) {
                const pageItem = document.createElement("li");
                const pageLink = document.createElement("a");
                pageLink.href = "#";
                pageLink.textContent = i;
                pageItem.appendChild(pageLink);
    
                // Agregar la clase "active" a la página actual
                if (i === 1) {
                    pageLink.classList.add("active");
                }
    
                // Manejar el evento clic para cambiar de página
                pageLink.addEventListener("click", function (event) {
                    event.preventDefault();
    
                    // Remover la clase "active" de todas las páginas y agregarla a la página seleccionada
                    const paginationLinks = pagination.getElementsByTagName("a");
                    for (let j = 0; j < paginationLinks.length; j++) {
                        paginationLinks[j].classList.remove("active");
                    }
                    this.classList.add("active");
    
                    // Mostrar los productos de la página seleccionada
                    showPage(i);
                });
    
                pagination.appendChild(pageItem);
            }
    
            // Agregar la barra de paginación al documento
            const section = document.getElementById("lista-platillos");
            section.appendChild(pagination);
        }
    
        // Mostrar la primera página al cargar el documento
        showPage(1);
    
        // Crear la barra de paginación
        createPagination();
    });
