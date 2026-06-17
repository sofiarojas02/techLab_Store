"use client";
import {  useState } from 'react';
import { useEffect } from 'react';
import {ProductCard} from '../components/ProductCard'
import {ProductList} from '../components/ProductList'
import {getProducts} from '../api/api'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(()=>{
    const fetchProducts = async () =>{
      try{
        const productData = await getProducts() as any
        setProducts(productData)
      }
      catch(err){
        console.log('page: ' + err)
      }
    }
    
    fetchProducts()
  },[])
  
  console.log(products)
  
  return (
    <>
      <ProductList >
        {products.map(product => (
          <ProductCard 
          key={product.id}
          title={product.title}
          image={product.images[0]}
          category={product.category}
          />
        ))}
      </ProductList>
    </>
  );
}
