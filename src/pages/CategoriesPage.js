import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesPage() {
    const [categories, setCategories] = useState([])
    const fetchCategories = () => (
        fetch('https://api.escuelajs.co/api/v1/categories?limit=12')
        .then(conCategories => conCategories.json())
        .then(respCategories => setCategories(respCategories))
    )
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl mx-auto my-10 p-4'>
                <h1 className='mb-4 text-center text-2xl font-bold'>All Categories</h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
                    {
                        categories.map((category) => (
                            <div key={category.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to="/">
                                    <img className="rounded-t-lg" src={category.image} alt="" />
                                </Link>
                                <div className="p-5">
                                    <Link to="/">
                                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category.creationAt}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category.updatedAt}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
