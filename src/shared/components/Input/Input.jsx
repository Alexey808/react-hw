import './Input.css';

function Input({onChange, value, srcIcon = '', placeholder = ''}) {
  return (
    <div className="input-container">
      {srcIcon && <img src={srcIcon} alt="search-icon"></img>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={srcIcon && "with-left-icon"}
      />
    </div>
  );
}

export default Input;