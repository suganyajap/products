import { Card, CardActions, CardContent } from "@mui/material";


export function Product({ name , pic ,rating,price,deleteButton,editButton}){
    return(
            <Card className="product-container">
            <img className="product-pic" src={pic} alt={name} />
            <CardContent>
            <h3>{name}</h3>
            <p>{rating}</p>
            <h3>{price}</h3>
            
            <CardActions>
                {deleteButton} {editButton}
            </CardActions>
            </CardContent>

            </Card>
    );
};