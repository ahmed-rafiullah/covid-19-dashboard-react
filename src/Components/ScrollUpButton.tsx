import React from 'react'

export function ScrollUpButton(){

 let scrollToTop =   () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          });
    }
    return (
        <button className='scrollup-button' onClick={scrollToTop}><i className="fas fa-arrow-up fa-2x"></i></button>
    )
}