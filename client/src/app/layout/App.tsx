import {useState, useEffect} from "react";
import { Product } from "../models/products";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 101,
      name: "product" +(prevState.length +1), 
      price: (prevState.length *100) + 100,
      brand: "some brand",
      description: "some discription",
      pictureUrl: "http://picsum.photos/200"
    }])
  };
 
  return (
    <div className="app">
      <h1>Re-Store</h1>
      <ul>
        {products.map(product =>(
          <li key={product.name}>{product.name}- {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add a product</button>
    </div>
  );
}

export default App;
