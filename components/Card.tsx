import { formDataType } from '@/types/zodTypes'
import React from 'react'

type Props = { snippet: formDataType & { stdOut: string } }

export const Card: React.FC<Props> = ({ snippet }) => {
    return (
        <div>Card</div>
    )
}