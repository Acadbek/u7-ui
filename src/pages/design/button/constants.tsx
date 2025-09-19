import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "../../../components/button";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Syntax

export const codePrimaryButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='primary'>Primary</Button>
}`;


export const codeSecondaryButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='secondary'>Secondary</Button>
}`;


export const codeOutlineButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='outline'>Outline</Button>
}`;

export const codeGhostButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='ghost'>Ghost</Button>
}`;

export const codeRedButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='red'>Red</Button>
}`;

export const codeLiquidButton = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button variant='liquid'>Liquid Glass</Button>
}`;


// data



export const primaryButtonData = [
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
          {codePrimaryButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const secondayButtonData = [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant='secondary'>Secondary</Button>
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
          {codeSecondaryButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const outlineButtonData = [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant='outline'>Outline</Button>
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
          {codeOutlineButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const ghostButtonData = [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant='ghost'>Ghost</Button>
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
          {codeGhostButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const redButtonData = [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant='error'>Red</Button>
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
          {codeRedButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const liquidButtonData = [
  {
    label: "Preview",
    content: (
      <div className="overflow-y-auto overflow-x-hidden relative border border-gray items-center gap-4 h-[400px]">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt sapiente necessitatibus modi explicabo eius recusandae ipsum laborum et laboriosam, nulla ipsa quo, ad consequuntur nemo, libero ab animi eos eligendi suscipit incidunt tenetur dicta molestiae! Fugit earum necessitatibus esse, harum excepturi id doloremque expedita fugiat voluptates doloribus eius, voluptatem distinctio aspernatur? Labore dicta perspiciatis alias quasi deserunt. Facilis veniam iste qui eaque omnis delectus temporibus itaque sapiente consequatur non.</p>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' />
        <Button style={{
          position: 'absolute',
          left: '-9%',
          top: '50%'
        }} variant='liquid'>Liquid Glass</Button>
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
          {codeLiquidButton}
        </SyntaxHighlighter>
      </div >
    ),
  },
]