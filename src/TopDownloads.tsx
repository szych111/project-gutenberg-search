import {FC} from 'react'

import './index.css'


export const TopDownloads:FC = () => {
    return (
        <div className='card flex'>
            <p>author</p>
            <p>title</p>
            <p>language</p>
            <p>number of downloads</p>
        </div>
    )
}