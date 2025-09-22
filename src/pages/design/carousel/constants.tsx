import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Carousel from "../../../components/carousel";

export const codeCarousel = `import { Carousel } from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel>
      <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 1</div>
      <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 1</div>
      <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 1</div>
    </Carousel>
  )
}`;


export const carouselData = [
  {
    label: "Preview",
    content: (
      <Carousel>
        <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 1</div>
        <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 2</div>
        <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 3</div>
      </Carousel>
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
          {codeCarousel}
        </SyntaxHighlighter>
      </div >
    ),
  },
];
