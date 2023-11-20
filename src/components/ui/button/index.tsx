import './index.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  children,
  className
}: ButtonProps) {
  return <button className={`button ${variant} ${className}`}>{children}</button>
}
