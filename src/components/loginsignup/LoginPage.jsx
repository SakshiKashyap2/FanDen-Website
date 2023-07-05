import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const LoginPage = ({ token }) => {

    // console.log(token)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    const [details, setdetails] = useState({})

    useEffect(() => {
        axios.get('https://fanden-backend-phfp.onrender.com/api/user/current', config)
            .then(data => {
                // console.log(data.data)
                setdetails(data.data)

            })
            .catch(err => { console.log(err) })

    }, [])

    // console.log(details)
    return (
        <>

            <div className='bg-white h-[100vh]'>
                User Page
                <div>
                    {JSON.stringify(details)}
                </div>
            </div>
        </>

    )
}

export default LoginPage