const rowsPerPage = 3; // Número de filas por página
        const rows = document.querySelectorAll('.row');
        const totalRows = rows.length;
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        const pagination = document.getElementById('pagination');
        let currentPage = 1;

        // Función para mostrar las filas correspondientes a la página actual
        function displayRows(page) {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            rows.forEach((row, index) => {
                if (index >= start && index < end) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
        }

        // Función para crear los botones de paginación
        function setupPagination() {
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button');
                button.innerText = i;
                button.addEventListener('click', function () {
                    currentPage = i;
                    displayRows(currentPage);
                    document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });

                if (i === currentPage) {
                    button.classList.add('active');
                }

                pagination.appendChild(button);
            }
        }

        // Inicializa la paginación
        displayRows(currentPage);
        setupPagination();