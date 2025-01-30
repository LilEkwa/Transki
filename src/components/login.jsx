/* eslint-disable react/no-unescaped-entities */
import { Link} from "react-router-dom";
import logo from "../assets/Logo.png";
 import img from "../assets/imgSignIn.png";
 import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from "react";
import "../styles/login.css"


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    
    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }

    return <>
    <div className="login">
      <div className="login2">
      <div className="container">
      <img alt="Kokitech Group Logo" 
           className="logo" 
           src={logo}
           style={{objectFit:"contain"}}
       />
      <div className="content">

        <div className="image-box">
          <img src={img} alt="" 
          style={{objectFit:"contain"}}/>
        </div>
        <form action="#">
        <h1 className="text-2xl font-bold mb-4">
             Bienvenue sur  <span className="text-blue-600">
             TransKi
        </span>
         ,
</h1>
<p className="txt text-slate-950 mb-6">
 Votre application de transfert de fichiers Kokitech pour un travail toujours plus optimal.
</p>
          <div className="input-box">
            <input type="text" 
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
            <label>Nom d'utilisateur</label>
          </div>
          <div className="input-box">
            <input type={type} 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required />
            <span className="flex justify-around items-center" onClick={handleToggle}>
            <Icon className="absolute right-3 top-3 text-gray-600" icon={icon} size={18}/>
        </span>
            <label>Mot de passe </label>
          </div>
          <div className="mb-2 flex items-center">
        <input className="form-checkbox h-4 w-4 text-blue-600" 
            id="admin"
            type="checkbox"/>
        <label className="txt text-slate-950">
             Se connecter en tant qu’administrateur
        </label>
    </div>
          <div className="txt text-left">
                <a className="txt text-blue-600" href="#">
                 mot de passe oublié ?
                </a>
         </div>
          <div className="input-box">
            <input type="submit" value="Se Connecter" />
          </div>
        </form>
      </div>
      <div className="foot">
<p className="txt text-center text-gray-700">
Pas de compte ? <Link className="text-red-600" to="/signUp">
  Créez votre compte
  </Link>
</p>
</div>
    </div>
    </div>
    </div>
   </>
}
export default Login;
