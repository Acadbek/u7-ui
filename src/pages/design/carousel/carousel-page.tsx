import Tabs from '../../../components/tabs'
import { carouselData } from './constants'

const CarouselDesign = () => {
  return (
    <div un-flex='~ col' gap-8>
      <Tabs items={carouselData} />
    </div>
  )
}

export default CarouselDesign
