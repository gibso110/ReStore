import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import { Product } from "../models/products";
import Header from "./Header";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212"
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
      <Route exact path="/" component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/catalog/:id" component={ProductDetails}/>
      <Route exact path="/catalog" component={Catalog}/>
      <Route path="/about" component={AboutPage}/>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
