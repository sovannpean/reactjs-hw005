import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default function UsersPage() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = () => {
    fetch('https://api.escuelajs.co/api/v1/users?limit=12')
    .then(conUsers => conUsers.json())
    .then(respUsers => {
      setUsers(respUsers)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchUsers()
  })

  return (
    <>
      {
        loading ? <Loading/> :
        <div className='max-w-screen-2xl mx-auto my-10 p-4'>
          <h1 className='mb-4 text-center text-2xl font-bold'>All Users</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
            {
              loading ? <Loading/> :
              users.map((user) => (
                <div key={user.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/">
                        <img className="rounded-t-lg h-72 w-full" src={user.avatar} alt="" />
                    </Link>
                    <div className="p-5">
                        <Link to="/">
                            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      }
    </>
  )
}
