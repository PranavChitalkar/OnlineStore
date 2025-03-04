import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home/Home"
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import AllProduct from './components/AllProduct/AllProduct'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { onAuthStateChanged } from 'firebase/auth'
import{auth} from './FirebaseAuth/firebaseAuth';
import Navbar from './components/Navbar/navbar'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import Footer from './components/Footer/footer'
import Contact from './pages/Contact/contact'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {
  const [cart, setcart] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [Discount, setDiscount] = useState(0);
  const [userName,setuserName]=useState("")

  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id)
    console.log(isProductExist)

    if (isProductExist) {
      const upDateCart = cart.map((item) => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
      console.log(upDateCart)
      setcart(upDateCart);
    }
    else {
      setcart([...cart, { ...product, quantity: 1 }])
    }


    console.log(cart)
  }

  //handleInc......
  const handleInc = (id) => {
    const incQuantity = cart.map((item) => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    )
    setcart(incQuantity);
  }
  const handleDec = (id) => {

    const decQuantity = cart.map((item) => (
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item

    )
    )
    console.log("added")
    console.log("subtract")

    setcart(decQuantity);
  }

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id)
    setcart(updateByFilter)

  }

  //calculate total;
  const getTotalPrice = () => {
    var total = 0;
    cart.map((item) => (
      total += item.quantity * item.price
    ))
    return total + 10 - Discount;
  }

  //Promocode discount...


  const applyPromocode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice()*0.1);
      setPromocode("")
    }
    else {
      
    }
  }

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          setuserName(user.displayName);
          

        }
        else{
          setuserName("")
        }
      })
    },[])
  


  return (
    <>
      <div>        
        <BrowserRouter>
        <Navbar userName={userName} cart={cart}/>
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec} handleRemove={handleRemove} getTotalPrice={getTotalPrice} applyPromocode={applyPromocode} promocode={promocode} setPromocode={setPromocode} Discount={Discount}/>} />
            <Route path="/allproduct" element={<AllProduct AddToCart={AddToCart} />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/login" element={<Login />} />\
            <Route path="/signup" element={<SignUp />} />
            <Route path="/singleProduct/:productId" element={<SingleProductPage  AddToCart={AddToCart}/>} />

          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
