import React from 'react'

export const Container = ({ children }) => {
    return (
        <div className='px-8'>
            <div className='max-w-[1140px] mx-[auto]'>
                {children}
            </div>
        </div>
    )
}