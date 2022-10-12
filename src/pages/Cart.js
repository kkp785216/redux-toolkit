import React from 'react'
import { Container } from '../components/Layout'
import SingleProduce from '../components/SingleProduce'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart } = useSelector(state => state)

  return (
    <Container>
      <div className='mt-7'>
        <section>
          <h3 className='text-[19px] font-medium mb-5 text-orange-700'>Cart</h3>
          {cart.length >= 1 ? <div className='flex flex-wrap -m-4'>
            {cart?.map(product => (
              <SingleProduce product={product} state='remove' key={product.id} />
            ))}
          </div> :
            <div>
              Please go to <Link className='text-[blue] underline' to='/'>Home</Link> add some itmes to the cart to display here.
            </div>
          }
        </section>
      </div>
    </Container>
  )
}

export default Cart