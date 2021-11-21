import './App.css';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Welcome } from './Welcome';
import { NotFound } from './NotFound';
import { EditProduct } from './EditProduct';
import { ListProducts } from './ListProducts';
import { CreateProduct } from './CreateProduct';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
 import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const history=useHistory();
  const [mode,setMode]=useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{bordeRadius:"0px",minHeight:"100vh"}} >
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

<Button 
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        style={{ marginLeft:"auto" }}
       variant="text"
       color="inherit"
       onClick={()=>setMode(mode==="light" ? "dark" : "light")}
       >{ mode==="light" ? "dark" : "light" } Mode</Button>
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
       <Route path="**">
           <NotFound />
       </Route>
       
    </Switch>

    </div>
    </Paper>
    </ThemeProvider>
  );
}


export default App;
