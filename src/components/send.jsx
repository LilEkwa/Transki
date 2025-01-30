import profile from '../assets/profil.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/K_Logo.png'
import pdf from '../assets/pdf.png'
import txt from '../assets/sms.png'
import "../styles/send.css"



function Send() {
  
    const [files, setFiles] = useState([]);
    // Gérer la sélection de fichiers
    const handleFileChange = (e) => {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };
     // Supprimer un fichier de la liste
  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return <img src={pdf}
        style={{width: '50px'}}/>;
      case "jpg":
      case "jpeg":
      case "png":
        return "🖼";
      case "doc":
      case "docx":
        return "📝";
        case "txt":
          return <img src={txt}
          style={{width: '50px'}}/>
      default:
        return "📁";
    }
  };
  const [progress, setProgress] = useState(0); // État pour suivre la progression
  const [isUploading, setIsUploading] = useState(false); // État pour vérifier si l'upload est en cours

  // Fonction pour simuler l'upload d'un fichier
  const simulateFileUpload = async () => {
    setIsUploading(true);
    setProgress(0);

    // Simulation d'un téléchargement avec un délai
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 10; // Augmente la progression de 10% à chaque intervalle
      });
    }, 500); // Intervalle de 500ms
  };
  
    const [selectedUser, setSelectedUser] = useState('Choisir le destinataire');
    const [selectedDepartment, setSelectedDepartment] = useState('choisir un departement');
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
                    <div className="name">Ice Ghost</div>
                    <div className="designation">Admin</div>
                  </div>
                </div>
                <i className="bx bx-log-out" id="log_out"></i>
              </li>
            </ul>
          </div>
     <section className="home-section">
    <div className="text">
        <i className='fas fa-paper-plane mr-2'></i>
            Envoyez vos fichiers
    </div>       
 <div className="overflow-y-auto">
     <div className="bg-white rounded-lg shadow p-6 ">
      <div className=" justify-between mb-4 border-bottom">
       <span className="text-lg font-semibold ">
        A : {selectedDepartment} / {selectedUser}
       </span>
        <div className="flex">
       <select id="country" 
                name="Department" 
                autoComplete="country-name" 
                className=" text-gray-500 " 
                type="textplaceholder"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}>
            <option>Departement</option>
            <option>Soft</option> 
            <option>RH</option>
            <option>Courant Fort</option>
        </select>
        <select id="department"
                name="Department" 
                autoComplete="country-name" 
                className="flex items-center text-gray-500 " 
                type="textplaceholder"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                >
            <option>Destinataire</option>
            <option>Kemayo</option>
            <option>Nono</option>
            <option>Nana</option>
        </select>
       </div>
      </div> 
      <div className="flex items-center justify-between mb-4 border-bottom">
       <span className="text-lg">
        Objet :
        <input className="textinp  p-2 mb-2" type="text"/>
       </span>
      </div> 
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 w-full text-center text-gray-400 mb-4">
         <label htmlFor="document">
          <span> + Importer vos fichiers </span>
        <input
        type="file" 
        multiple
        id="document"
        onChange={handleFileChange}
        onClick={simulateFileUpload}
        />
        </label>
      </div> 
      <div style={{ padding: '10px',justifyContent: 'space-between', alignItems: 'center'  }}>
       <ul>
        {files.map((file, index) => (
          <li key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{getFileIcon(file.name)}</span>
              <span>{file.name}</span>
              <span onClick={() => handleRemoveFile(file.name)}
                style={{color: 'red',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}>X</span>
            </div>
            <div
        style={{
          width: '100%',
          backgroundColor: '#e9ecef',
          borderRadius: '5px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '15px',
            backgroundColor: '#007bff',
            transition: 'width 0.3s ease',
          }}
        ></div>
        <div style={{ textAlign: 'center', color: '#666' }}>
        {progress}% complété
      </div>
            </div>
          </li>
          
        ))}
        
      </ul>  
      </div>
      <div className="buton flex justify-end mt-6">
      <button>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="fas fa-paper-plane mr-2" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span disabled={isUploading}
          style={{
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: isUploading ? 'not-allowed' : 'pointer',
          }}
        >
          {isUploading ? 'chargement en cours...' : 'Envoyer'}</span>
</button>
      </div>
     </div>
    </div>  
    </section> 
        </>
}
 export default Send;