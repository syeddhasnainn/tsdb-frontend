import DemoPage from './Streamers/page'

export default function Home() {
  return (
      <main className='p-4'>
        <nav className='flex text-5xl'>
          <h1 className='mx-auto bg-[#CAF84F]'>TSDB</h1>
        </nav>
      <DemoPage/>
      </main>
  )
}
