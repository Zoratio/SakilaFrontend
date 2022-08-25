import React from 'react'

// this is the specific component scenario whereas the other component that called this is the hub generic one
export default function SeparateGenre({ genre }) {
    return (
        <div>{genre && <p>{genre.name} {genre.revenue}</p>}</div>
    )
}
