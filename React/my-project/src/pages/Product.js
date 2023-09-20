import { useEffect, useState } from "react";

import ProductList from "../components/product/ProductList";

function Product() {
    let [products, setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(() => {
        setIsDataFetching(true);
        fetch('http://127.0.0.1:3004/product')
            .then(response => response.json())
            .then(responseData => {
                setIsDataFetching(false);
                setProducts(responseData.data)
            })
            .catch(err => console.log(err));
    }, [])


    if (isDataFetching) {
        return (
            <div>
                Loading . . .
            </div>
        )
    };

    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default Product;






// {
//     id: 'p1',
//     product_name: "City Tour",
//     image:"https://images7.alphacoders.com/132/1327252.jpeg",
//     description: "Its a good tour",
//     price: "20000"
// },
// {
//     id: 'p2',
//     product_name: "Forest Tour",
//     image:"https://images4.alphacoders.com/131/1313274.jpeg",
//     description: "Its a refreshing tour",
//     price: "50000"
// }