export default function InputField({ label, type, value, onChange, error, id, placeholder, className = '', inputClassName = '' }) {
    return (
    <div className={`input_wrapper ${className}`}>
        <label htmlFor={id} className="label">{label}</label>
        <input
        className={`input ${inputClassName}`}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
        {error && <div className="error">{error}</div>}
    </div>
    );
}