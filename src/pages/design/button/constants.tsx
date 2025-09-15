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
        <Button variant='red'>Red</Button>
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