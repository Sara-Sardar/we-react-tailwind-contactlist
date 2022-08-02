import React from 'react'
import FreelancerFullName from './FreelancerFullName';
import FreelancerImage from './FreelancerImage';

export default function FreelancerProfile({ user }) {
  return (
    <div className='container mx-auto min-h-screen'>
        {/*JSON.stringify(user)*/}
        Freelancer Profile
        <FreelancerImage picture={user.picture} />
        <FreelancerFullName name={user.name}/>
    </div>
  );
}
