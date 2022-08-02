import axios from 'axios';
import React,{useState, useEffect} from "react";
import { BellIcon } from '@heroicons/react/outline';
import FreelancerProfile from '../components/FreelancerProfile';
import FreelancerImage from '../components/FreelancerImage';



export default function Profile() {
    
            const [user,setUser] = useState({});

            useEffect(()=>{
                //get request to the API endpoint
                axios
                .get('https://randomuser.me/api/')
                .then((result)=>setUser (result.data.results[0]))
                .catch((err)=>console.log(err));
                },[]);


  return (
    <div>

       <nav className="fixed-top text-amber-400 shadow-sm  flex justify-between items-center w-screen">
            <div className="flex "> 
            <a href="/" className="text-2xl mx-2 p-6 font-bold hover:underline ">KURDLANCER</a>
            </div>
            

                <div className="text-white mr-11 ">
                    <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-full hover:bg-amber-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </button>
                    <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-full hover:bg-amber-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-full hover:bg-amber-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-full hover:bg-amber-500 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </div>
        </nav>






        <div className='m-6 text-white'> 
          <div className='container mx-auto h-40  p-1 rounded-md  bg-brandyellow '>
            <div className=' text-white md:flex flex space-x-96'>
                        <div className='p-1 m-10'>
                        <p className='text-4xl font-medium py-4 '>Profile as freelancer</p>
                        
                        </div> 

                       
            </div>
         </div>
         </div>

        
            <div>
              {user && <FreelancerProfile user={user}/>} 
            </div>;




    </div>
     
  );
} 

