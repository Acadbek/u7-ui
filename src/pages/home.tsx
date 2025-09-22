import Carousel from '../components/carousel'

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Carousel>
        <div className="w-full h-400px flex items-center justify-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Slide 1</div>
        <div className="w-full h-400px flex items-center justify-center bg-slate-200">Slide 2</div>
        <div className="w-full h-400px flex items-center justify-center">Slide 3</div>
      </Carousel>
    </>
  )
}

export default Home
