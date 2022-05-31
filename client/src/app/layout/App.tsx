import { CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {useState, useEffect} from "react";
import Catalog from "../../features/catalog/catalog";
import { Product } from "../models/products";
import Header from "./Header";


function App() {
  
 
  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Container>
      <Catalog/>
      </Container>
      
    </>
  );
}

export default App;
