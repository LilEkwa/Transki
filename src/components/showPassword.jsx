import { useState } from "react";

export function PasswordInput() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
return(
    <div>
        <input
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600" 
            type={showPassword ? 'text' :  'password'}
            value={password}
            onChange={handlePasswordChange}
            />
        <i 
        className="fas fa-eye absolute right-3 top-4 text-gray-500"
        onClick={togglePasswordVisibility}>
        {showPassword ? 'Masquer' : 'Afficher'}
        </i>
    </div>
);
}
export default PasswordInput;