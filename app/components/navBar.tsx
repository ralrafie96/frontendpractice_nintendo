import React from 'react'
import { SearchBar } from './searchBar'

export const NavBar = () => {
    return (
        <>
            <div className='absolute w-full h-10 border-2 border-black flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-1'>
                    <p className=''>Nintendo</p>
                    <SearchBar />
                </div>
            </div>
        </>
    )
}
