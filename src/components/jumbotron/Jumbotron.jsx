import React from 'react'

export const Jumbotron = ({title, subtitle}) => {
    return (
        <div className='jumbotron'>
            <h1>{ title }</h1>
            <hr />
            <span>{ subtitle }</span>
        </div>
    )
}