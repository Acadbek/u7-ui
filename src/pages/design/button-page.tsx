import Container from '../../components/container'
import { Button } from '../../components/button'

const ButtonDesign = () => {
  return (
    <div un-flex='~ col' un-gap='4'>
      <Container componentName='Primary'>
        <div un-flex un-gap='1px'>
          <Button variant='primary'>Primary</Button>
        </div>
      </Container>
      <Container componentName='Secondary'>
        <div un-flex un-gap='1px'>
          <Button variant='secondary'>Secondary</Button>
        </div>
      </Container>
      <Container componentName='Outline'>
        <div un-flex un-gap='1px'>
          <Button variant='outline'>Outline</Button>
        </div>
      </Container>
      <Container componentName='Ghost'>
        <div un-flex un-gap='1px'>
          <Button variant='ghost'>Ghost</Button>
        </div>
      </Container>
    </div>
  )
}

export default ButtonDesign