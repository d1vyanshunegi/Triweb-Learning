import { useNavigate } from "react-router-dom";

import AddProductForm from "../components/product/AddProductForm"

const AddProduct = () => {
    const navigate = useNavigate();
    const addProductHandler = (newProduct) =>{
        fetch('http://127.0.0.1:3004/product', {
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>navigate('/',{replace:true}))
        .catch(err=>console.log(err));
    }

  return (
    <AddProductForm addProductHandler={addProductHandler} />
  )
}

export default AddProduct
