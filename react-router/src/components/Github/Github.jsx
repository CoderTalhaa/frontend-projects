import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()

    //! First method to call api with react hooks
    // const [data , setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/CoderTalhaa')
    //     .then(res => res.json())
    //     .then (data => {
    //         setData(data)
    //     })
    // },[])

  return (
    <div className="text-center m-4 bg-slate-900 text-white p-4 text-3xl" >
      Github followers: {data.followers}
      <img className="text-center" src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github

export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/CoderTalhaa')
    return response.json()
}