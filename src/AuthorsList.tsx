import {FC} from 'react'

import './index.css'

interface author {
    name: string;
    lang: string;
    dateOfBirth: string;
    dateOfDeath?: string;
    books: any[]
}

export const AuthorsList:FC<author> = ({books, name, lang, dateOfBirth, dateOfDeath}) => {
    return (
        <div className='card'>
            <div className='author'>
                <p>{name}</p>
                <p>{dateOfBirth}</p>
                <p>{dateOfDeath}</p>
            </div>
            <div className='books'>
            <div className='book'>
            </div>
            </div>
        </div>
    )
}