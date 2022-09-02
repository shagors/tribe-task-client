import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <div className="avatar">
            <div className="w-20 rounded ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
            <div className=''>
                <h3 className='pl-4 text-lg'>Alvin Elain</h3>
            </div>
          </div>
        </div>
        <div className='flex'>
            <p className='pr-6'>3 min ago</p>
            <p className='flex text-xl'>...</p>
        </div>
      </div>
      <div>
        
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;