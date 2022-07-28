import React from 'react'

export default function FindTalents() {
  return (
    <div className='m-6 text-white'> 
    <div className='container mx-auto h-96  p-10 rounded-md  bg-brandyellow '>
      <div className=' text-white md:flex flex space-x-96'>
          <div className='p-10 m-10'>
                <p className=' text-4xl font-medium py-4'>For Clients,</p>
                <p className='text-xl '>Make it real with the best Freelancers, Hire a pro for any skills.</p>
            </div>
          

            <div className="md:shrink-0">
              <img className="h-96 w-full object-cover md:h-full md:w-96"  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="immage not loading"/>
            </div>

      </div>
    </div>
    </div>
    

  );
}

