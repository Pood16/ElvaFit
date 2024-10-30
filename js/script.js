const select = document.getElementsByClassName('selector');
const products = document.getElementsByClassName('.col-4');
const container = document.getElementsByClassName('row');

select.addEventListener('change', (e) => {
    const category = e.target.value;
    const filtered = [];

    products.forEach((product) => {
        product.style.display = 'none';
        if (category === 'default' || product.id === category) {
            filtered.push(product);
        }
    });
    container.innerHTML = '';

    filtered.forEach((product) => {
        product.style.display = 'block';
        container.appendChild(product);
    });
});