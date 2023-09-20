import ProductItem from "./ProductItem"

const ProductList = (props) => {
  return (
    <ul>
      Product List
      {props.products.map((item)=>{
                    return <ProductItem key={item._id} id={item._id} item={item}/>
                })}
    </ul>
  )
}

export default ProductList
