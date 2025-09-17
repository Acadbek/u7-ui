import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "../../../components/button";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


// Syntax

export const codeSuccessToastData = `import { Button } from "@/components/ui/button"

export function ToastSuccess() {
  return <Button variant="success" onClick={() => toast.success('Success')}>Success</Button>
}`;


export const codeErrorToastData= `import { Button } from "@/components/ui/button"

export function ToastError() {
  return <Button variant="error" onClick={() => toast.error('Error')}>Error</Button>
}`;


export const codeWarningToastData = `import { Button } from "@/components/ui/button"

export function ToastWarning() {
  return <Button variant="warning" onClick={() => toast.warning('Warning')}>Warning</Button>
}`;

export const codeInfoToastData = `import { Button } from "@/components/ui/button"

export function ToastInfo() {
  return <Button variant="info" onClick={() => toast.info('Info')}>Info</Button>
}`;



// data



export const successToastData = (toast: any) =>[
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
         <Button variant="success" onClick={() => toast.success('Success')}>Success</Button>
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
          {codeSuccessToastData}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const errorToastData = (toast: any) => [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
       <Button variant="error" onClick={() => toast.error('Error')}>Error</Button>
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
          {codeErrorToastData}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const warningToastData = (toast: any) => [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
         <Button variant="warning" onClick={() => toast.warning('Warning')}>Warning</Button>
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
          {codeWarningToastData}
        </SyntaxHighlighter>
      </div >
    ),
  },
];

export const infoToastData = (toast: any) => [
  {
    label: "Preview",
    content: (
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant="info" onClick={() => toast.info('Info')}>Info</Button>
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
          {codeInfoToastData}
        </SyntaxHighlighter>
      </div >
    ),
  },
];