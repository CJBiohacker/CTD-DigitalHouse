import React, { useContext } from 'react'
import LanguageContext from '../context'
import "../App.css"

const Navbar = () => {
    const { language, handleChangeLA } = useContext(LanguageContext)
    console.log("NAVBAR LANGUAGE ==> ", language);
    const { text, id } = language

    return (
        <div className="navbar">
            <p>{ text.home }</p> 
            <p>{ text.current }: { id }</p>
            <button onClick={ handleChangeLA }>{ text.button }</button>
        </div>
    )
}

export default Navbar