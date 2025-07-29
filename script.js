// sample product data

const products = [
    {
        name: "Bluetooth Speaker",
        price: "$40.77",
        description: "sounding so good",
        image: "images/hp laptop.jpg"
    },
    {
        name: "Ipad",
        price: "$50.80",
        description: "so good for playing games",
        image: "images/ipad.jpg"
    },
    {
        name: "Iphone 16",
        price: "$2000.00",
        description: "upgraded camera system",
        image: "images/iphone 16.jpg"
    },
    {
        name: "JBL",
        price: "$200.00",
        description: "it brings out the bass",
        image: "images/JBL.jpg"
    },
    {
        name: "Vivo Y40",
        price: "$30.56",
        description: "networing is so fast",
        image: "images/vivo y40.jpg"
    },
    {
        name: "Samsung s24 ultra",
        price: "$1000.23",
        description: "one of tne phone",
        image: "images/samsung s24 ultra.jpg"

    },
    
    
];

// inject product into HTML
const productcard = document.getElementById('productGrid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
    <button class="add-to-cart">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);

});
// toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventLIsteener('click', () => {
    navLinkls.classList,toggle(`active`);
})