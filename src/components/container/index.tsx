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
      <div un-flex='~ items-center justify-between' un-gap='1px' un-border='b [#dbd7d7]' un-p='1'>
        <div un-flex un-gap='1px'>
          <Button onClick={() => setPreview('preview')} variant='outline' size='sm'>Preview</Button>
          <Button onClick={() => setPreview('code')} variant='outline' size='sm'>Code</Button>
        </div>
        <h2 un-p='r-2'>{componentName}</h2>
      </div>
      <div className='h-[300px] flex items-center justify-center'>
        {preview === 'preview' ?
          <div un-flex un-gap='1px'>
            {children}
          </div>
          : <p>Code</p>
        }
      </div>
    </div>
  )
}

export default Container