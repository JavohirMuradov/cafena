import React, { useContext } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Theme } from '../Context/DarkMode'

const Layout = ({ children }) => {
    var { theme, ToggleTheme } = useContext(Theme)
    return ( 
        <div className={`${theme === "light" ? "bg-[#F6F2EE] text-black" : "bg-[#15120E] text-white"}`}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout