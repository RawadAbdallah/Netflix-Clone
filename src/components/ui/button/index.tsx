import './index.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

/**
 * `Button` returns a button component.
 *
 * It takes variant, children, className as parameters.
 * @param variant by default set to primary, can take `primary` | `secondary` variants
 * @param children are children passed to the function
 * @param className are additional classes that can be assigned to the component
 *
 * @returns a customized button tag
 */
export default function Button({
  variant = 'primary',
  children,
  className
}: ButtonProps) {
  return <button className={`button ${variant} ${className}`}>{children}</button>
}
