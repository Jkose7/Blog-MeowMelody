import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Index } from './pages/index'
import { CreateNews } from './pages/createNew'

import {useEffect, useState} from 'react'
import { Nav } from './components/nav'
import { Footer } from './components/footer'

function App() {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-colors-sheme: dark)").matches) {
      return 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    theme === 'dark' ?
      document.querySelector('html').classList.add('dark')
      :
      document.querySelector('html').classList.remove('dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <main className='bg-primary-color dark:bg-second-color -z-10 h-full w-full absolute flex flex-col justify-center py-6'>
      <Nav 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Routes>
        <Route
          path='/' element={<Index theme={theme}></Index>}
        ></Route>
        <Route
          path='/createNew' element={<CreateNews></CreateNews>}
        ></Route>
      </Routes>

      <Footer/>

    </main>
  )
}

export default App
