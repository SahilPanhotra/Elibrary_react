import React from 'react'
import Undrawbooks from '../assets/Undraw_Books.svg'
export const Landing = () => {
  return (
    <section id='landing'>
        <div className="header__container">
            <div className="header__description">
                <h1>India's Most reputed and awarded online library platform</h1>
                <h2>Find your dream book with
                     <span>Library</span> </h2>
                     <a href="#features"><button className='btn'>Browse Books</button></a>

            </div>
            <figure className='header__img--wrapper'>
                <img src={Undrawbooks} alt="" />
            </figure>
        </div>
    </section>
  )
}
