import React from 'react'

export default function Header(props) {

    const { countCartItems } = props

    return (
        <div className='row center block'>
            <div>
                <a href="#">
                    <h2>
                        Simple Cart
                    </h2>
                </a>
            </div>
            <div>
                <a href="#/Cart">
                    Cart
                    {countCartItems ? (<button className='badge'>{countCartItems}</button>)
                        : ('')
                    }
                </a>
                <a href="#/Signin">Sign In</a>
            </div>
        </div>
    )
}
