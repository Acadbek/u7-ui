import React from 'react'
import { Button } from '../button'

interface ContainerProps {
  children: React.ReactNode,
  componentName: string
}

const Container = ({ children, componentName }: ContainerProps) => {
  const [preview, setPreview] = React.useState<'preview' | 'code'>('preview')

  return (
    <div className='w-full bg-[#F8F8F8]'>
      <div flex='~ items-center justify-between' gap='1px' border='b [#dbd7d7]' p='1'>
        <div flex gap='1px'>
          <Button onClick={() => setPreview('preview')} variant='outline' size='sm'>Preview</Button>
          <Button onClick={() => setPreview('code')} variant='outline' size='sm'>Code</Button>
        </div>
        <h2 p='r-2'>{componentName}</h2>
      </div>
      <div className='h-[300px] flex items-center justify-center'>
        {preview === 'preview' ?
          <div flex gap='1px'>
            {children}
          </div>
          : <p>Code</p>
        }
      </div>
    </div>
  )
}

export default Container