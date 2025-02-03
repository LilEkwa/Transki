import logo from '../assets/K_Logo.png'
import profile from '../assets/profil.jpg'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/setting.css"

function Setting(){
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setProfilePicture(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Ici, vous pouvez envoyer la photo de profil à votre backend
      console.log('Photo de profil à envoyer:', profilePicture);
      // Réinitialiser le formulaire après soumission
      setProfilePicture(null);
      setPreview(null);
    };
    
    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }



    const [isOpen, setIsOpen] = useState(false);
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      }
      // const getButtonIconClass = () => {
      //   return isOpen ? "bx-menu-alt-right" : "bx-menu";
      // }

    return <>
     <div className={`sidebar ${isOpen ? "open" : ""}`}>
       <div className="logo_details">
                           <i className="fa-solid fa-bars"
                               onClick={toggleSidebar}
                               ></i>
                             <img src={logo} style={{ objectFit:"contain" }} 
                             className="logo_name"
                             onClick={toggleSidebar}
                             width="50px"/>
                             <div className="logo_name">Transki</div>
                   </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search" onClick={toggleSidebar}></i>
            <input type="text" placeholder="Rechercher"/>
             <span className="tooltip">Rechercher</span>
          </li>
          <li>
            <Link to="/home">
              <i className="fas fa-inbox"></i>
              <span className="link_name">Boite de Reception</span>
            </Link>
            <span className="tooltip">Boite de Reception</span>
          </li>
          <li>
            <Link to="/send">
              <i className="fas fa-paper-plane"></i>
              <span className="link_name">Envoyez vos fichiers</span>
            </Link>
            <span className="tooltip">Envoyez vos fichiers</span>
          </li>
          <li>
            <Link to="/history">
              <i className="fas fa-clock-rotate-left"></i>
              <span className="link_name">Historique</span>
            </Link>
            <span className="tooltip">Historique</span>
          </li>
          <li>
            <Link to="/setting">
              <i className="fa-solid fa-gear"></i>
              <span className="link_name">Reglages</span>
            </Link>
            <span className="tooltip">Reglages</span>
          </li>
          <li className="profile">
            <div className="profile_details">
              <img src={profile} alt="profile image" style={{objectFit:"contain"}}/>
              <div className="profile_content">
                <div className="name">Anna Jhon</div>
                <div className="designation">Admin</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
        <section className='home-section'>
          <div className='login'>
          <div className='login2'>
            <div className="container">   
          <div className="content">
          <div>
        <label htmlFor="profile-picture">Changer la photo de profil</label>
        <input
          type="file"
          id="profile-picture"
          accept="image/*"
          onChange={handleFileChange}
       />
      </div>
      {preview && (
        <div>
          <img src={preview} alt="Aperçu de la photo de profil" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </div>
      )} 
           <form onSubmit={handleSubmit}>
      <p className="txt text-slate-950 mb-6">
     Modifier vos informations
    </p>
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
                <input type="submit" value="Modifier" />
              </div>
    </form>
          </div>
          </div>
          </div>
    </div>
    </section>    
    </>
}
export default Setting;

{/* <div onClick={handleImageClick}>
         {image ? <img src={image} 
              alt='profil'
              className='prof'
              /> : <img src={profile} alt='profil' className='prof' />}
              <input
                type='file'
                ref={inputRef}
                onChange={handleImageChange}
                style={{display: "none"}}
              />
              <p className="txt text-slate-950 mb-10">
                 Modifier vos informations
               </p>
              </div> */}
    {/* //           <section className="home-section">
    //   <div className="text">
    //     <i className='fa-solid fa-gear mr-2'></i>
    //         Reglages
    // </div>
    <p className="txt text-slate-950 mb-6">
     Modifier vos informations
    </p>
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
                <input type="submit" value="Modifier" />
              </div> */}