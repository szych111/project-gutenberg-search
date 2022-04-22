//@ts-nocheck

import {Card} from './Card'

export const SearchResults = (props) => {
    return (
        <Card>
            {props.books.map(book => {
                return (
                    <div key={book.id}>
                        <p>{book.authors && book.authors[0] ? book.authors[0].name : 'no authors'}</p>
                        <p>{book.title}</p>
                    </div>
                )
            })}
        </Card>
    )
}