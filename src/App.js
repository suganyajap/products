import './App.css';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { EditProduct } from './EditProduct';
import { ListProducts } from './ListProducts';
import { CreateProduct } from './CreateProduct';

function App() {
  const history=useHistory();
  return (
    <div className="App">
      <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/products")}
       >List Products</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/create-product")}
       >Create Product</Button>
        </Toolbar>
       </AppBar>

<Switch>
       
       <Route exact path="/">
       <Welcome />
       </Route>
       <Route path="/products/edit/:id">
       <EditProduct />
       </Route>
       <Route path="/products">
       <ListProducts />
       </Route>
       <Route path="/create-product">
       <CreateProduct  />
       </Route>
       <Route path="/**">
           <NotFound />
       </Route>
       
    </Switch>

    </div>
  );
}


export default App;
