export default [
    {
        name: 'Фастфуд',
        src: 'src/assets/imgs/categories/burger.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'fastfood'
            }
        }
    }, 
    {
        name: 'Веган',
        src: 'src/assets/imgs/categories/broccoli.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'vegan'
            }
        }
    },
    {
        name: 'Десерты',
        src: 'src/assets/imgs/categories/cake.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'deserts'
            }
        }
    },
    {
        name: 'Стейки',
        src: 'src/assets/imgs/categories/meat.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'meat'
            }
        }
    },
    {
        name: 'Пицца',
        src: 'src/assets/imgs/categories/pizza.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'pizza'
            }
        }
    },
    {
        name: 'Суши',
        src: 'src/assets/imgs/categories/sushi.png',
        to: {
            name: 'restaurants',
            query: {
                filter: 'sushi'
            }
        }
    }
]