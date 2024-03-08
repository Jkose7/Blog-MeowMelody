import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Index } from './pages/index'
import { CreateNews } from './pages/createNew'

function App() {
  return (
    <main className='bg-black'>
      <Routes>
        <Route
          path='/' element={<Index></Index>}
        ></Route>
        <Route
          path='/createNew' element={<CreateNews></CreateNews>}
        ></Route>
      </Routes>
    </main>
  )
}

export default App
