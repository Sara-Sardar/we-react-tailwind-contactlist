import React from 'react'
import FreelancerFullName from './FreelancerFullName';
import FreelancerImage from './FreelancerImage';
import { LocationMarkerIcon } from '@heroicons/react/outline';
export default function FreelancerProfile({ user }) {
  return (
    <div className='container mx-auto min-h-screen flex'>
        {/*JSON.stringify(user)*/}
        Freelancer Profile
       <div> <FreelancerImage picture={user.picture} /></div>
       <div> <FreelancerFullName name={user.name}/></div>

        {user.email}
        <div className='flex'>
            <LocationMarkerIcon className="h-5 w-5 mr-1" />
            {user.location.country}
        </div>
    </div>
  );
}
