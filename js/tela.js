const menuToggle = document.querySelector('.menu-toggle');
        const menuItems = document.querySelector('.menu-items');
        const categories = document.querySelector('.categories');

        menuToggle.addEventListener('click', () => {
            menuItems.classList.toggle('active');
            categories.classList.toggle('active');
        });
