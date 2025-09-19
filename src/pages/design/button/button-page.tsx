import LiquidGlass from 'liquid-glass-react';
import Tabs from '../../../components/tabs'
import {
  ghostButtonData,
  liquidButtonData,
  outlineButtonData,
  primaryButtonData,
  redButtonData,
  secondayButtonData
} from './constants';

const ButtonDesign = () => {
  return (
    <>
      {/* <LiquidGlass
        style={{
          position: 'fixed',
          left: '50%',
          top: '75%'
        }}
        displacementScale={40}
        blurAmount={0}
        saturation={130}
        aberrationIntensity={2}
        elasticity={0}
        cornerRadius={0}
      >
        <div>
          hello
        </div>
      </LiquidGlass> */}

      <div un-flex='~ col' gap-8>
        <Tabs items={primaryButtonData} />
        <Tabs items={secondayButtonData} />
        <Tabs items={outlineButtonData} />
        <Tabs items={ghostButtonData} />
        <Tabs items={redButtonData} />
        <Tabs items={liquidButtonData} />
      </div>
    </>
  )
}

export default ButtonDesign