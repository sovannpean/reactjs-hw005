import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    let {id} = useParams()

    return (
        <>
            <h1>Detail Page {id}</h1>
        </>
    )
}
