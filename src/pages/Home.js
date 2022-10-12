import React from 'react'
import { Container } from '../components/Layout'
import Products from '../components/Products'

const Home = () => {

    return (
    <div className='bg-[#f0f0f0]'>
        <div className="pt-7">
            <Container>
                <span className='block text-center font-semibold text-[23px] mb-7'>Welcome to Redux Toolkit Store</span>

                <section>
                    <h3 className='text-[19px] font-medium mb-5 text-orange-700'>Products</h3>
                    <Products />
                </section>
            </Container>
        </div>
    </div>
    )
}

export default Home