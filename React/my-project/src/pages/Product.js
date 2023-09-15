function Product(){
    let products = [
        {
            id: 'p1',
            product_name: "City Tour",
            image:"",
            description: "Its a good tour",
            price: "20000"
        },
        {
            id: 'p2',
            product_name: "Forest Tour",
            image:"",
            description: "Its a refreshing tour",
            price: "50000"
        }
    ]

    return(
        <div>
            <ul>
                {products.map((item)=>{
                    return <li key={item.id}>
                        {item.product_name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Product;