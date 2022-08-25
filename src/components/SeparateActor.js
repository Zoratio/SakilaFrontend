import React from 'react'

// this is the specific component scenario whereas the other component that called this is the hub generic one
export default function SeparateActor({ actor }) {
    return (
        <div>{actor && <p>{actor.firstName} {actor.lastName}</p>}</div>
    )
}
