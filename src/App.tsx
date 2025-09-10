import { useState } from 'react';
import { products } from './data';
import './App.css'
import Header from './components/Header';
import ProductCard from './components/ProductCard';
;

function App() {
  const [items, setItems] = useState(products);


  return (

    <>
    
      <ProductCard />
      <footer className="mt-10 border-t border-base-300 py-8 text-sm text-base-content/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          © 2025 MyShop
        </div>
      </footer>
    </>

  )
}

export default App
