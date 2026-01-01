function Button({ children, buttonStyle, onClick, style }) {
  return (
    <button onClick={onClick} className={buttonStyle} style={style}>
      {children}
    </button>
  );
}

export default Button;
