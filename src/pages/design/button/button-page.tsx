import Tabs from '../../../components/tabs'
import {
  ghostButtonData,
  outlineButtonData,
  primaryButtonData,
  redButtonData,
  secondayButtonData
} from './constants';

const ButtonDesign = () => {
  return (
    <div un-flex='~ col' gap-8>
      <Tabs items={primaryButtonData} />
      <Tabs items={secondayButtonData} />
      <Tabs items={outlineButtonData} />
      <Tabs items={ghostButtonData} />
      <Tabs items={redButtonData} />
    </div>
  )
}

export default ButtonDesign