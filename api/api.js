import axios, { all } from "axios";

async function getProducts() {
    const categories = ["smartphones", "laptops", "tablets", "mobile-accessories"];

    return Promise.all(
        categories.map(cat => 
            axios.get(`https://dummyjson.com/products/category/${cat}`)
                .then(res => res.data.products)
        )
    ).then(results => results.flat()) // <-- .flat() une todos los productos en una sola lista limpia



}

export{ getProducts }