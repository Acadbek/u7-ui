import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import { componentLink, docsLink } from '../config/routes'
import ButtonDesign from '../pages/design/button/button-page'
import ToastDesign from '../pages/design/toast/toast-page'
import TabsDesign from '../pages/design/tabs-page'
import DropDownDesign from '../pages/design/dropdown-page'
import DialogDesign from '../pages/design/dialog/dialog-page'
import Home from '../pages/home'
import CarouselDesign from '../pages/design/carousel/carousel-page'

const Routers = () => {
  return (
    <main un-grid='~ cols-7 gap-4'>
      <Sidebar className='col-span-2' />
      <div className='col-span-3'>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`${docsLink}/${componentLink}/button`} element={<ButtonDesign />} />
          <Route path={`${docsLink}/${componentLink}/toast`} element={<ToastDesign />} />
          <Route path={`${docsLink}/${componentLink}/dialog`} element={<DialogDesign />} />
          <Route path={`${docsLink}/${componentLink}/tabs`} element={<TabsDesign />} />
          <Route path={`${docsLink}/${componentLink}/dropdown`} element={<DropDownDesign />} />
          <Route path={`${docsLink}/${componentLink}/carousel`} element={<CarouselDesign />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>
      <div className='col-span-2 w-full'>
        <div className='fixed top-0 right-0 border px-4'>
          Content Content Content
        </div>
      </div>
    </main>
  )
}

export default Routers
