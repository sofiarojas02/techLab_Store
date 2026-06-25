"use client";
import { useEffect, useState } from 'react';
import logo from '../statics/logo.png'
import {Searcher} from '../components/Searcher'
import {ProductCard} from '../components/ProductCard'
import {ProductList} from '../components/ProductList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../slices/dataSlice'


export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const products = useSelector((state:any) => state.data.products, shallowEqual)
  const dispatch = useDispatch<any>()

  const filteredProducts = products.filter((item: any) => 
    item.title.toLowerCase().includes(searchValue.toLowerCase()) || 
    item.category.toLowerCase().includes(searchValue.toLowerCase())
);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  console.log(products)
  


  return (
    <>
    <div className='pt-10 w-full flex justify-center'>
      <img src={logo.src} alt='TechLab logo' width={250}/>
    </div>
    <Searcher 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
/>
      <ProductList >
        {filteredProducts.map((product: any) => (
          <ProductCard 
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.images[0]}
          category={product.category}
          favorite = {product.favorite}
          price={product.price}
          />
        ))}
      </ProductList>
    </>
  );



}