import { Product } from './Product';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
export function ListProducts() {

     const [products,setProducts]=useState([]);
    //app mounted only once->useEffect->fetch-setMovies
    const getProducts=()=> {
    fetch("https://6166c4e813aa1d00170a6715.mockapi.io/products")
    .then((data)=>data.json())
    .then((pr)=>setProducts(pr));
    };
      
     useEffect(getProducts,[]);
     //after delete refresh
    const deleteProduct=(id)=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/products/${id}`,
     {method:"DELETE",
     }).then(()=>getProducts());
     }
      
        const history=useHistory();
    return(
        <section className="product-list">
            {products.map(({name,pic,rating,price,id})=>(
                <Product
                pic={pic}
                name={name}
                rating={rating}
                price={price}
                id={id}
                deleteButton={<IconButton 
           
                    onClick={() =>  deleteProduct(id)}
                     
                    className="product-show-button"
                    color="error"
                    aria-label="delete product"
                    >
                      <DeleteIcon />
                    </IconButton>}
          
                  editButton={<IconButton 
                    style={{marginLeft:"auto"}}
                    className="product-show-button" 
                    onClick={() => history.push("/products/edit/" + id)}
                    color="primary" 
                    aria-label=" edit product" >
                      <EditIcon />
                    </IconButton>}
                  />))}
              </section>
    );
    
}