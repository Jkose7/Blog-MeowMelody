import { useEffect, useState } from "react"

export function ChangeTheme (){
    const [theme, setTheme] = useState(()=>{
        if(window.matchMedia("(prefers-colors-sheme: dark)").matches){
            return 'dark'
        }

        return 'light'
    })
    
    useEffect(()=>{
        theme === 'dark' ? 
        document.querySelector('html').classList.add('dark') 
        :  
        document.querySelector('html').classList.remove('dark')
    }, [theme])


    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)


    return (
        <button onClick={toggleTheme}>
            {
                theme === 'light' ? 
                "c" 
                :
                "d"
            }        
        </button>
    )
}