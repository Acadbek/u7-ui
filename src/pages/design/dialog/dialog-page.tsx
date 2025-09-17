import Tabs from '../../../components/tabs'
import { useModalFormEditData, useModalFormLoginData, useModalSureData, useModalVariantData } from './constants'

const DialogDesign = () => {
  const modalVariants = useModalVariantData();
  const modalLoginVariant = useModalFormLoginData()
  const modalEditVariant = useModalFormEditData()
  const modalSureVariant = useModalSureData()
  return (
    <div className='py-10'>
      <div className='pb-10 space-y-3 mx-auto max-w-xl'>
        <h2 className='text-4xl font-bold '>Dialog</h2>
        <p>A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</p>
      </div>
      <div un-flex='~ col' gap-8>
        <Tabs items={modalVariants} />
        <div>
          <h3 className='mx-auto max-w-xl text-2xl font-semibold'>Examples</h3>
          <Tabs items={modalLoginVariant} />
        </div>
        <Tabs items={modalEditVariant} />
        <Tabs items={modalSureVariant} />
      </div>
    </div>
  )
}

export default DialogDesign