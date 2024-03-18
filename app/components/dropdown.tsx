'use client'

import React, { use, useEffect, useState } from 'react'

interface DropdownProps {
    content: { [key: string]: any };
}

export const Dropdown = ({ content }: DropdownProps) => {
    const [btnName, setBtnName] = useState('All categories')
    const revealDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        document.getElementById('dropdown-menu')?.classList.toggle('hidden')
    }
    const filterClicked = (name: string) => {
        setBtnName(name)
        document.getElementById('dropdown-menu')?.classList.add('hidden')
    }

    useEffect(() => {
        window.addEventListener('click', (e: MouseEvent) => windowClicked(e))
    })

    const windowClicked = (event: MouseEvent) => {
        if (!!event.target) {
            if (!(event.target as HTMLElement).matches('.dropdown')) {
                var dropdowns = document.getElementsByClassName("dropdown-menu");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (!openDropdown.classList.contains('hiddenb')) {
                        openDropdown.classList.add('hidden');
                    }
                }
            }
        }
    }

    return (
        <div className='relative w-32'>
            <div id="dropdown" onClick={revealDropdown}>{btnName}
            </div>
            <div id="dropdown-menu" className={`hidden absolute z-10 bg-white`}>
                {content.map((obj: { name: string; link: string; }) => {
                    return (<div key={obj.name} onClick={() => filterClicked(obj.name)}>{obj.name}</div>)
                })}
            </div>
        </div>
    )
}
