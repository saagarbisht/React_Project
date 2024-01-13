import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
    return (
        <div className='flex flex-col justify-center items-center gap-10  text-center text-3xl bg-slate-500 text-black py-6'>Github Follower Count : {data.followers}
            <p>Name : {data.name}</p>
            <p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन्। </p>
                <p>मा कर्मफलहेतुर्भूर्मा ते संगोस्त्वकर्मणि</p>
            <img src={data.avatar_url} width={300}  alt="profile pic" className='rounded-xl'/>
        </div>
    )
}

export default Github


export const githubDataLoad = async() => {  
    const data = await fetch("https://api.github.com/users/saagarbisht")
    return data.json();
}