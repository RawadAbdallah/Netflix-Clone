import './index.css'

type ButtonProps = {
  buttonType: 'primary' | 'secondary'
  children: React.ReactNode
}
const Button = ({ buttonType = 'primary', children }: ButtonProps) => {
  return <button className={'button ' + buttonType}>{children}</button>
}

export default Button
