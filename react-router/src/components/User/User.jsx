
import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div>
        <div> User: {userid} </div>
    </div>
  )
}

export default User
