import './App.css'
import { Button } from './components/button'
import Container from './components/container';
import DialogDemo from './components/dialog-demo';
import { useToast } from './components/toast/useToast'

function App() {
  const toast = useToast();

  return (
    <div flex='~ col' className='justify-center items-center gap-4'>
      <Container componentName='Button'>
        <div flex gap='1px'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>
      </Container>
      <Container componentName='Toaster'>
        <div flex='' gap='1px'>
          <Button onClick={() => toast.success('Success')}>Success</Button>
          <Button onClick={() => toast.error('Hello')}>Error</Button>
          <Button onClick={() => toast.warning('Hello')}>Warning</Button>
          <Button onClick={() => toast.info('Hello')}>Info</Button>
        </div>
      </Container>
      <Container componentName='Dialog'>
        <DialogDemo />
      </Container>
    </div>
  )
}

export default App