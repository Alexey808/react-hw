import './LinkButton.css';

function LinkButton({children}) {
  return (
    <a className="link-button">{children}</a>
  )
}

export default LinkButton;