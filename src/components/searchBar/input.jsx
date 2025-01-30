/* eslint-disable react/prop-types */
/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {string} label 
 * @param {(s: string) => void} onChange
 * @returns 
 */
export function Input ({placeholder, value, onChange,label}) {
    return <div>
        <label
                className="form-label">{label}
            </label>
        <input 
            type="text" 
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
        <div className="valid-feedback">
                Valide
            </div>
    </div>
}