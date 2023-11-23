import './index.css'

import CollapseWrapper from '@/components/ui/collapse-wrapper'
import EmailInput from '@/components/ui/email-input'

function index() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <CollapseWrapper />
      <EmailInput />
    </div>
  )
}

export default index
