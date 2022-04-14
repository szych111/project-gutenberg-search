import {FC} from 'react'


export const Search: FC = () => {
    return (
        <div>
            <h3>Search books by:</h3>
            <input type='text'>Author's name</input>
            <input type='text'>Book's title</input>
            <input type='text'>Book's subject</input>
            <input type='text'>Book's language</input>
        </div>
    )
}