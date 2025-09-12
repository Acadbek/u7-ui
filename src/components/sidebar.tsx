import React from 'react'
import { routes } from '../config/routes'
import { Link } from 'react-router-dom'

const Sidebar = ({ className }) => {
  return (
    <div className={`flex flex-col h-screen ${className}`}>
      <aside className='w-full fixed left-0 top-0 p-4'>
        <Link to='/'>
          <div className="i-tabler:topology-complex w-[45px] h-[45px]" />
        </Link>
        <div className='mt-3'>
          <div className={`flex flex-col gap-3 `}>
            {routes.map((route) => (
              <Link className='hover:underline' to={route.link}>
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar