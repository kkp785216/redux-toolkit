import React from 'react'
import { add, remove } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const SingleProduce = ({ product, state }) => {

    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    return (
        <div className="p-4 w-1/4" title={product.title} key={product.id}>
            <div className='flex flex-col justify-between h-full p-5 rounded-[7px] bg-white shadow'>
                <h4 className='text-base font-medium overflow-hidden overflow-ellipsis mb-2.5' style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>{product.title}</h4>
                <span className="block text-sm font-semibold text-orange-700">Price: ${product.price}</span>
                <img className='max-h-40 w-fit mx-auto block p-5' src={product.image} alt={product.title} width='100%' />
                <div>
                    <div className='flex justify-between items-center mb-3'>
                        <span className='capitalize text-xs font-medium'>{product.category}</span>
                        <div className='text-orange-700 relative'>
                            <div className='absolute top-0 bottom-0 left-0 right-0 z-10'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" fill="currentColor" stroke="currentColor" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" fill="currentColor" stroke="currentColor" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" fill="currentColor" stroke="currentColor" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px] mr-0.5" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" fill="currentColor" stroke="currentColor" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-[13px]" viewBox="0 0 512 512"><path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" fill="currentColor" stroke="currentColor" /></svg>
                                <div className="absolute top-0 right-0 bottom-0 bg-white" style={{ width: `${(5 - product.rating.rate) * 20}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-700 overflow-hidden overflow-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>{product.description}</p>
                    <div>
                        {state === 'add' ?
                            <button onClick={e => handleAdd(product)} className="bg-[#f17fa9] hover:bg-[#ee6295] transition-colors duration-150 text-white py-1.5 px-5 text-xs rounded mt-4">Add to cart</button> :
                            <button onClick={e => handleRemove(product.id)} className="bg-[#f17fa9] hover:bg-[#ee6295] transition-colors duration-150 text-white py-1.5 px-5 text-xs rounded mt-4">Remove from cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduce