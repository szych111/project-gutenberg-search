import {FC} from 'react'

const styles = require('./Card.module.css')

export const Card: FC = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}