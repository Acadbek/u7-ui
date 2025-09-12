import Container from '../../components/container'
import { Button } from '../../components/button'
import { useToast } from '../../components/toast/useToast'

const ToastDesign = () => {
  const toast = useToast()
  return (
    <div un-flex='~ col' un-gap='4'>
      <Container componentName='Toaster Success'>
        <div un-flex='' un-gap='1px'>
          <Button onClick={() => toast.success('Success')}>Success</Button>
        </div>
      </Container>
      <Container componentName='Toaster Error'>
        <div un-flex='' un-gap='1px'>
          <Button onClick={() => toast.error('Hello')}>Error</Button>
        </div>
      </Container>
      <Container componentName='Toaster Warning'>
        <div un-flex='' un-gap='1px'>
          <Button onClick={() => toast.warning('Hello')}>Warning</Button>
        </div>
      </Container>
      <Container componentName='Toaster Info'>
        <div un-flex='' un-gap='1px'>
          <Button onClick={() => toast.info('Hello')}>Info</Button>
        </div>
      </Container>
    </div>
  )
}

export default ToastDesign