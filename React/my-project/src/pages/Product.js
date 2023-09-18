import ProductList from "../components/product/ProductList";

function Product(){
    let products = [
        {
            id: 'p1',
            product_name: "City Tour",
            image:"https://images7.alphacoders.com/132/1327252.jpeg",
            description: "Its a good tour",
            price: "20000"
        },
        {
            id: 'p2',
            product_name: "Forest Tour",
            image:"https://images4.alphacoders.com/131/1313274.jpeg",
            description: "Its a refreshing tour",
            price: "50000"
        }
    ]

    return(
        <div>
                <ProductList products={products} />
        </div>
    )
}

export default Product;