import React, { useState }  from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast } from "react-toastify";

import { db } from '../../FirebaseAuth/firebaseAuth';
import {collection ,addDoc} from 'firebase/firestore';


const Contact = () => {


    const [UserContact, setUserContact] = useState({ username: "", email: "", msg: "" });
    
    const handleContact = (e) => {
        setUserContact({ ...UserContact, [e.target.name]: e.target.value })

    }
    const handleSubmitContact = (e) => {
        e.preventDefault();
        if (!UserContact.username || !UserContact.email || !UserContact.msg) {
            return toast("h");

        }
        else {
           addDoc(collection(db,"contactUser"),{
            user:UserContact.username,
             email:UserContact.email,
              message:UserContact.msg,
           }).then(()=>{
            toast.success("Message Submitted")
            setUserContact({
                username: "", email: "", msg: "" 
            })
           }).catch((err)=>prompt("Error"))
        }
    }



    return (
        <>
            <div>
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div class="lg:w-1/2 px-6">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                                </div>
                                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p class="leading-relaxed">123-456-7890</p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 class="text-gray-900 text-lg mb-1 mr-0 font-medium title-font">Contact Us</h2>

                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input 
                                   autoComplete='off'
                                   value={UserContact.username}
                                    onChange={handleContact} 
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input 
                                   autoComplete='off'
                                   value={UserContact.email}
                                   onChange={handleContact}
                                type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea
                                   autoComplete='off' 
                                   value={UserContact.msg}
                                   onChange={handleContact}
                                id="message" name="msg" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button onClick={handleSubmitContact} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact