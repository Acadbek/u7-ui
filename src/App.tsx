import './App.css'
import { Button } from './components/button'
import Container from './components/container';
import { useToast } from './components/toast/useToast'

function App() {
  const toast = useToast();

  return (
    <div un-flex='~ col' className='justify-center items-center gap-4'>
      <Container componentName='Button'>
        <div un-flex un-gap='1px'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>
      </Container>
      <Container componentName='Toaster'>
        <div un-flex='' un-gap='1px'>
          <Button onClick={() => toast.success('Success')}>Success</Button>
          <Button onClick={() => toast.error('Hello')}>Error</Button>
          <Button onClick={() => toast.warning('Hello')}>Warning</Button>
          <Button onClick={() => toast.info('Hello')}>Info</Button>
        </div>
      </Container>

    </div>
  )
}

export default App