/*

import React, { useEffect } from 'react'
import Layout from '../Layout/layout'
import axios from 'axios'

const AllProduct=()=>{

    //const [allCategory,setAllCategory]=useState([]);


    useEffect(()=>{
        const getAllProduct= async()=>{
            const res= await axios('https://dummyjson.com/products?sortBy=title&order=asc')
            console.log(res.data)
          //  setAllCategory(res.data)
        }
        getAllProduct();
    },[])
    


    return (
        <>
        <Layout>AllProduct</Layout>
            
        
        </>
    )
}

export default AllProduct;

*/



import React, { useEffect, useState } from 'react'

import axios, { all } from 'axios'

import { Link } from "react-router-dom";

const AllProduct = ({ AddToCart }) => {
  // Step 1: Define state to store the products
  const [products, setProducts] = useState([]);
  const [type, setType] = useState([]);
  const [selectProducts, setSelectProduct] = useState("");
  const [allProducts, setallProducts] = useState([])
  const [searchItem, setsearchItem] = useState("")
  const [minPrice, setminPrice] = useState("");
  const [maxPrice, setmaxPrice] = useState("");


  useEffect(() => {
    const getAllProductCategory = async () => {
      try {
        // Step 2: Fetch data from the API
        const res = await axios('https://dummyjson.com/products?sortBy=title&order=asc');


        // Step 3: Set the state with the fetched data
        setProducts(res.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };

    // Call the function to fetch data
    getAllProductCategory();
  }, []);

  //maing for every category
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        if (selectProducts) {
          const filterProduct = allProducts.filter((filterItem) => filterItem.category === selectProducts)
          setType(filterProduct);
        } else {
          const res = await axios('https://dummyjson.com/products');
          setallProducts(res.data.products)
          setType(res.data.products)
        }
        // Step 2: Fetch data from the API

        // console.log(res.data.products);  // Check the data in console (optional)

        // Step 3: Set the state with the fetched data
        // setProducts(res.data.products);
        // setType(res.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



    // Call the function to fetch data
    getAllProduct();
  }, [selectProducts]);

  const filterProducts = (selectedProduct) => {


    // making direct sort the list,,

    setSelectProduct(selectedProduct);
  }
  const getAllProduct = () => {
    setType(allProducts);
  }

  //serch product;

  const handleSearchByButton = () => {
    const searchProduct = allProducts.filter((item) => (
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    ))
    setType(searchProduct)
  }

  // filtering product by price;
  const handlePrice = () => {
    const priceFilterProduct = allProducts.filter((item) => (
      (item.price <= parseFloat(maxPrice)) && (item.price >= parseFloat(minPrice))
    ))
    setType(priceFilterProduct)
  }

  return (
    <>
    <div className='mb-7 min-h-screen'>

      <div>
        <button className='bg-gray-100 rounded-lg  p-3' onClick={getAllProduct}>All Products</button>
      </div>
      <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
    
        <div>
          <select
            onChange={(e) => filterProducts(e.target.value)}
            className='bg-white border-2 border-orange-300 text-black px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 w-56 transition duration-300 hover:border-orange-400'
          >
            <option value="" className='text-gray-600'>Filter By Product</option>
            {products.length > 0 ? (
              products.map((product, index) => (
                <option key={index} className='text-black px-2 py-2'>
                  {product.category}
                </option>
              ))
            ) : (
              <option className='text-gray-600'>Loading products...</option>
            )}
          </select>
        </div>

        <div className='text-center flex justify-center items-center'>
          <input
            placeholder='Search Items'
            className='border-2 border-orange-300 bg-white px-6 py-1 mr-2 ml-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg w-full max-w-xl transition duration-300 hover:shadow-xl active:scale-95'
            onChange={(e) => setsearchItem(e.target.value)}
          />
          <button
            onClick={handleSearchByButton}
            className='bg-orange-300 text-white px-3 py-1 mt-4 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 text-lg w-32 max-w-xl active:scale-95'>
            Search
          </button>
        </div>

        <div className='mt-6 flex justify-center items-center'>
          <input
            value={minPrice}
            placeholder='Min Price'
            className='border-3 border-orange-200 bg-white px-5 py-1 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg w-32 transition duration-300 hover:shadow-xl active:scale-95'
            onChange={(e) => setminPrice(e.target.value)}
          />
          <input
            value={maxPrice}
            placeholder='Max Price'
            className='border-3 border-orange-200 bg-white px-5 py-1 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg w-32 ml-4 transition duration-300 hover:shadow-xl active:scale-95'
            onChange={(e) => setmaxPrice(e.target.value)}
          />
          <button
            onClick={handlePrice}
            className='bg-orange-300 text-white px-6 py-1 ml-4 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 text-lg w-32 active:scale-95'>
            Filter
          </button>
        </div>
      </div>







      {/* Product Section   ..............*/}
      <div>
        <div className='flex gap-5 mt-3 flex-wrap items-center'>
          {products.length > 0 ? (
            type.map(items => (
              <div className='shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>

                <div className="h-full border-2 w-[270px] ml-none border-gray-200 border-opacity-60 p-3 rounded-lg overflow-hidden">
                  <Link to={`/singleProduct/${items.id}`}>
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg " src={items.thumbnail} alt="" />
                  </Link>
                  <div className="p-6">

                    
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{items.title}</h1>
                    <h3 className=" text-lg font-medium text-gray-600 mb-3">{items.brand}</h3>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">$ {items.price}</h1>

                    <button className='bg-blue-600 text-white p-3 rounded-lg ml-0 l-[80px] hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out' onClick={() => AddToCart(items)}>Add Cart</button>

                  
                  </div>
                </div>

              </div>






            ))
          ) : (
            <p>Loading..</p>
          )

          }
        </div>

      </div>

</div>
    </>
  );
};

export default AllProduct;
