import React from 'react'
import Tabs from '../../components/tabs'
import { Button } from '../../components/button';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='primary'>Button</Button>
}`;

const TabsDesign = () => {
  const tabData = [
    {
      label: "Preview",
      content: (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
          <Button>Click</Button>
        </div>
      ),
    },
    {
      label: "Code",
      content: (
        <div>
          <SyntaxHighlighter customStyle={{
            height: '400px',
            backgroundColor: '#F8F8F8',
            padding: '40px',
            fontSize: '14px'
          }} language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div >
      ),
    },
  ];
  return (
    <div>
      <Tabs items={tabData} />
    </div>
  )
}

export default TabsDesign