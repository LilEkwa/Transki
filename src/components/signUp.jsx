/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/Logo.png";
import img from "../assets/imgSignUp.png";
import { Link } from "react-router-dom";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from "react";
import "../styles/signUp.css"
// import { setRendererRect } from "react-doc-viewer/build/state/actions";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const onSubmit = () => {
        if (name && password && department && confirmedPassword) {
            if (password !== confirmedPassword) {
                alert("Passwords do not match");
        }
        if(department === "choisir un departemnt"){
            alert("Please select a department");
        }
        }
        alert("Sign up successful");
            alert(`soumis ${name} ${department} ${password}  ${confirmedPassword}`);
    }

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
             style={{objectFit:"contain",
              height: "510px",
              width: "650px"
             }}/>
           </div>
           <form action="#">
           <h1 className="txt text-2xl font-bold mb-4">
           Rejoignez nous sur  <span className="text-blue-600">
                TransKi
           </span>
            ,
   </h1>
   <p className="txt text-slate-950 mb-6">
   Veuillez remplir les champs avec les informations.
   </p>
              <div className="input-box">
               <input type="email" 
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required />
               <label>Adresse mail</label>
             </div>
             <div className="input-box">
               <input type="text" 
               id="username"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required />
               <label>Nom d'utilisateur</label>
             </div>
             <select id="Department" 
                     name="Department" 
                     autoComplete="country-name" 
                     className="s input-box rounded" 
                     type="textplaceholder" 
                     value={department}
                     onChange={(e) => setDepartment(e.target.value)}>
                <option>Departement</option>
                <option>Soft</option>
                <option>RH</option>
                <option>Courant Fort</option>
                </select>
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
             <div className="input-box">
               <input type={type} 
               name="confirmedPassword"
               value={confirmedPassword}
               onChange={(e) => setConfirmedPassword(e.target.value)}
               autoComplete="current-password"
               required />
               <span className="flex justify-around items-center" onClick={handleToggle}>
               <Icon className="absolute right-3 top-3 text-gray-600" icon={icon} size={18}/>
           </span>
               <label>Confirmez le mot de passe </label>
             </div>
             <div className="input-box">
               <input type="submit" 
               value="Soumettre" 
               onClick={onSubmit}/>
             </div>
           </form>
         </div>
         <div className="foot">
   <p className="txt text-center text-gray-700">
    Vous avez un compte ?
       <Link className="text-red-600" to="/">
     Connectez-vous
     </Link>
   </p>
   </div>
       </div>
       </div>
       </div>
   </>
}
export default SignUp;