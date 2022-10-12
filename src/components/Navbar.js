import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from './Layout'

const Navbar = () => {

    const { cart } = useSelector(state => state);

    return (
        <nav className='h-[60px] leading-[60px] shadow sticky top-0 bg-white z-50'>
            <Container>
                <div className='flex justify-between'>
                    <div className='flex space-x-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/cart'>Cart</Link>
                    </div>
                    <div>Cart Items: <strong className='text-orange-700'>{cart.length}</strong></div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar