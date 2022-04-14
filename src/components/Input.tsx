import {FC} from 'react'

interface props {
    type: string,
    placeholder: string,
    onChange: any
}

export const Input: FC<props> = ({type, placeholder, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} />
    )
}