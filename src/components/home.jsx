
import "../styles/home.css"
import logo from '../assets/K_Logo.png'
import profile from '../assets/profil.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";


function Message({ sender, objet, date }) {
  return (
    <div className="message">
      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" /> {/* Checkbox de sélection */}
      <span className="sender font-semibold text-gray-700">{sender}</span>
      <span className="sender font-semibold text-gray-700">{objet}</span>
      <span className="date text-gray-400">{date}</span>
    </div>
  );
}
const messages = [
  { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
  { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
  // ... autres messages
      { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
      { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerform', date: '15/11/2024 14:52' },
      { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
      { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
      { sender: 'Mr Kemayo', objet: 'Code D\'acces a la platerforme', date: '15/11/2024 14:52' },
];
function Home() {
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
       <section className="home-section">
      <div className="text">
        <i className='fas fa-inbox mr-2'></i>
            Boite de reception
    </div>
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 border-b border-gray-200 cursor-pointer">
            <div className="flex items-center space-x-4 border-b-8">
         {messages.map((message, index) => (
            <Message key={index} objet={message.objet}  sender={message.sender}  date={message.date}/>  
        ))}
            </div> 
             </div> 
    </section> 
  </>
}
export default Home;
