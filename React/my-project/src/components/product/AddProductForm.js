import { useRef } from "react";
import CustomWrapper from "../layouts/CustomWrapper"

const AddProductForm = (props) => {
    const product_name_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const description_ref = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const product_name = product_name_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const description = description_ref.current.value;

        const product = {
            product_name,
            image,
            price,
            description
        }; 
        
        props.addProductHandler(product);
    }

  return (
    <CustomWrapper>
      <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="product_name">Product Name</label>
            <input type="text" placeholder="" id="product_name" ref={product_name_ref}/>
        </div>
        <div>
            <label htmlFor="image">Image</label>
            <input type="text" placeholder="" id="image" ref={image_ref}/>
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="" id="price" ref={price_ref}/>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows="5" ref={description_ref    }></textarea>
        </div>
        <div>
            <button>Add</button>
        </div>
      </form>
    </CustomWrapper>
  )
}

export default AddProductForm
