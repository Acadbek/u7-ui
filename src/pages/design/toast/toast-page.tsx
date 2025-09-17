import Tabs from '../../../components/tabs'
import { useToast } from '../../../components/toast/useToast';
import { errorToastData, infoToastData, successToastData, warningToastData } from './constants'

const ToastDesign = () => {

  const toast = useToast();
  return (
    <div un-flex='~ col' un-gap='4'>
      <Tabs items={successToastData(toast)} />
      <Tabs items={errorToastData(toast)} />
      <Tabs items={warningToastData(toast)} />
      <Tabs items={infoToastData(toast)} />
    </div>
  )
}

export default ToastDesign