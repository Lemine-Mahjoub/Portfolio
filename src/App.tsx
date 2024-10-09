import './App.css'
import { Header, Home } from './Component'


function App() {

  return (
    <div className='background-layout'>
      <div className='flex flex-col px-4 xl:px-8'>
        <Header />
        <Home />

      </div>
    </div>
  )
}

export default App
