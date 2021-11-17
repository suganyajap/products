import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { useParams,useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

export function EditProduct() {
  const { id } = useParams();
  
 const [product,setProduct]=useState(null);
  useEffect(()=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/products/${id}`,
    {method:"GET",
  })
    .then((data)=>data.json())
    .then((pr)=>setProduct(pr));
  },[id]);
  //only show update movie when data is available
  return product ? < UpdateProduct product={product} />:"";

}
  
   function UpdateProduct({product}){
    const history=useHistory();
    const formValidationSchema = yup.object({
      name: yup
      .string()
      .required("why not fill this name?😯"),
  
      pic: yup
      .string()
      .min(4,"need bigger poster 😕")
      .required("why not fill this picture?😯"),
  
      rating: yup
      .string()  
      .min(0)
      .max(5)
      .required("why not fill this rating?😯"),

      price: yup
      .number()  
      .required("why not fill this price?😯")


  
      });
  
    const { handleSubmit,values,handleChange,handleBlur,errors,touched } =
      useFormik({
          initialValues:
          {
            name:product.name,
            pic:product.pic,
            rating:product.rating,
            price:product.price
            
          },
         validationSchema:formValidationSchema,
          onSubmit:(updatedProduct)=>{
              console.log("onSubmit",updatedProduct);
              editProduct(updatedProduct);
          },
      });
  
  const editProduct = (updatedProduct) => {
    
   
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/products/${product.id}`,
  {
    method:"PUT",
    body:JSON.stringify(updatedProduct),
    headers:{'Content-Type':'application/json',},
}).then(()=>history.push("/products"));
};
  

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
    <TextField
      value={values.name}
      id="name"
      name="name"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Name"
      variant="standard"
      error={errors.name && touched.name}
      helperText={errors.name && touched.name ? errors.name : ""} />
      

    <TextField
      value={values.pic}
      id="pic"
      name="pic"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="pic"
      variant="standard"
      error={errors.pic && touched.pic}
      helperText={errors.pic && touched.pic ? errors.pic : ""} />
      

    <TextField
      value={values.rating}
      id="rating"
      name="rating"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="rating"
      variant="standard"
      error={errors.rating && touched.rating}
      helperText={errors.rating && touched.rating ? errors.rating : ""} />
      

    <TextField
      value={values.price}
      id="price"
      name="price"
      // type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      label="price"
      variant="standard"
      error={errors.price && touched.price }
      helperText={errors.price && touched.price ? errors.price : ""} />
      

       

    <Button type="submit" variant="outlined">Save Product</Button>
    </form>
  
  
);

  }
