import React from 'react'
import Container from '../../components/container'
import { Button } from '../../components/button'
import { useToast } from '../../components/toast/useToast'

const ToastDesign = () => {
  const toast = useToast()
  return (
    <div flex='~ col' gap='4'>
      <Container componentName='Toaster Success'>
        <div flex='' gap='1px'>
          <Button onClick={() => toast.success('Success')}>Success</Button>
        </div>
      </Container>
      <Container componentName='Toaster Error'>
        <div flex='' gap='1px'>
          <Button onClick={() => toast.error('Hello')}>Error</Button>
        </div>
      </Container>
      <Container componentName='Toaster Warning'>
        <div flex='' gap='1px'>
          <Button onClick={() => toast.warning('Hello')}>Warning</Button>
        </div>
      </Container>
      <Container componentName='Toaster Info'>
        <div flex='' gap='1px'>
          <Button onClick={() => toast.info('Hello')}>Info</Button>
        </div>
      </Container>
    </div>
  )
}

export default ToastDesign