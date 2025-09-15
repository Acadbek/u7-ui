import { routes } from '../config/routes'
import { Link } from 'react-router-dom'

interface SidebarProps {
  className: string
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={`flex flex-col h-screen ${className}`}>
      <aside className='fixed left-0 top-0 p-4'>
        <Link to='/' className=''>
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