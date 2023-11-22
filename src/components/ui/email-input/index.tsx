import './index.css'

import Button from '../button'

/**
 * `EmailInput()` returns EmailInput component.
 * @returns a custom email input tsx tag
 */
function index() {
  return (
    <div className="email-container">
      <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
      <div className="email-input-wrapper">
        <input placeholder="Email Address" type="email" />
        <Button>
          <h1>Get Started {'>'}</h1>
        </Button>
      </div>
    </div>
  )
}

export default index
