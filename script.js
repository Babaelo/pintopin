// sample product data

const products = [
    {
        name: "Bluetooth Speaker",
        price: "$40.77"
        image: "images/hp laptop.jpg"
    },
    {
        name: "Ipad",
        price: "$50.80",
        image: "images/ipad.jpg"
    },
    {
        name: "Iphone 16",
        price: "$2000.00",
        image: "images/iphone 16.jpg"
    },
    {
        name: "Jbl",
        price: "$200.00",
        image: "images/JBL.jpg"
    },
    {
        name: "Vivo Y40",
        price: "$30.56",
        image: "images/vivo y40.jpg"
    },
];

// inject product into HTML
const productGrid - document.getElementById('productGrid');


products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
    <img src="${product.image}" ait="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button class="add-to-cart">Add to cart</button>`
    
;
productGrid.appendChild(productCard);

});