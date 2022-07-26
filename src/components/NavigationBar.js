import { Link } from 'react-router-dom';

const links =[
    {name: 'Home', url: '/'},
    {name: 'Find Talents', url: '/findtalents'},   
    {name: 'Find Jobs', url: '/findjobs'},
    {name: 'Post Jobs', url: '/PostJobs'},    
];
 
export default function NavigationBar() {
  return (
  
    <nav className="fixed-top text-amber-400 shadow-sm  flex justify-between items-center w-screen">
       
       <div className="flex "> 
       <a href="/" className="text-2xl mx-2 p-6 font-bold hover:underline ">KURDLANCER</a>
                
        <ul className="flex  py-4 ">
           {links.map((link)=>{
              return(
          <li className="text-xl mx-2 font-semibold  hover:underline rounded-md  py-2">
                <Link to={link.url}>{link.name}</Link>
              </li>
              );
           })}
        </ul>
       </div>
         
        <div className="text-white mr-11 ">
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignIn</button>
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignUp</button>
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">Languages</button>
        </div>
    </nav>
  );
}
