//import FormField from "./FormField"

import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function AddButton(){
    const navigate = useNavigate()
  function handleClick(){
    navigate('/formField')
  }
  return (
    <div>
        {/* <FormField /> */}
        <Link to='/formField'></Link>
        <Button onClick={handleClick}>ADD Student</Button>
    </div>
  )
}

export default AddButton