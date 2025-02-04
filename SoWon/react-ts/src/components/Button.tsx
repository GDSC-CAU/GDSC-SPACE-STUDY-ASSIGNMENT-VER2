import React, { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
    isValid: boolean
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ isValid, onClick, children }) => {
    return (
        <button
            type={isValid ? 'submit' : 'button'}
            className={`${isValid ? 'btn btn-green' : 'btn btn-gray'} w-full`}
            onClick={onClick}
            disabled={!isValid}
        >
            {children}
        </button>
    )
}
