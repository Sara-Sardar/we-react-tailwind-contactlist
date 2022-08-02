
export default function FreelancerFullName(name) {
  return (
    <div>
          {JSON.stringify(name)}


          <p className='font-semibold text-amber-400'>
            {' ${name.title} ${name.first} ${name.last} '}
          </p>


    </div>
  );
}
