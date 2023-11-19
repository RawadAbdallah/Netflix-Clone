import './index.css'

type ButtonProps = {
  buttonText: string
  buttonType: string
  buttonSize: string
}
const Button = ({ buttonText, buttonType, buttonSize }: ButtonProps) => {
  return <button className={`${buttonType} ${buttonSize}`}>{buttonText}</button>
}

export default Button
