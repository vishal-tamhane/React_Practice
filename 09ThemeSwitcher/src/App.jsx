import { useState } from 'react'
import './App.css'
import Card from './component/Card.jsx'
import { ThemeProvider } from './context/Theme.js'
import ThemeBtn from './component/ThemeBtn.jsx'
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
    document.documentElement.classList.add("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
    document.documentElement.classList.remove("dark");
  };

  return (

    <ThemeProvider value={{themeMode ,darkTheme, lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>


    </ThemeProvider>

  )
}

export default App
