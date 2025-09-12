import Container from '../../components/container'
import { Button } from '../../components/button'

const ButtonDesign = () => {
  return (
    <div flex='~ col' gap='4'>
      <Container componentName='Primary'>
        <div flex gap='1px'>
          <Button variant='primary'>Primary</Button>
        </div>
      </Container>
      <Container componentName='Secondary'>
        <div flex gap='1px'>
          <Button variant='secondary'>Secondary</Button>
        </div>
      </Container>
      <Container componentName='Outline'>
        <div flex gap='1px'>
          <Button variant='outline'>Outline</Button>
        </div>
      </Container>
      <Container componentName='Ghost'>
        <div flex gap='1px'>
          <Button variant='ghost'>Ghost</Button>
        </div>
      </Container>
    </div>
  )
}

export default ButtonDesign