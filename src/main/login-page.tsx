import React, { FormEvent } from "react"
import logo from "../assets/Logo.svg";
import hero from "../assets/hero.svg"
import { FormField } from "../components/form-field";
import { useNavigate } from "react-router-dom";


const LoginPage: React.FC = ()=>{
const navigate = useNavigate()
function submitData(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    navigate("/dashboard", {replace:true})
}

return (
<div className="login-page">
    <img src={logo} alt="Lendsqr Logo" />
    <div>
        <img src={hero} alt="empowering the smartest lenders" />
        <form  onSubmit={submitData}>
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
                <FormField desc="Email" inputType="email"/>
                <FormField desc="Password" inputType="password"/>
                <a href="" className="form-action">FORGOT PASSWORD?</a>
                <button type="submit">LOG IN</button>
            </form>
    </div>
</div>)
}

export {LoginPage};