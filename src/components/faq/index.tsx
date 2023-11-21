import './index.css'

import CollapseWrapper from '@/components/ui/collapse-wrapper'

function index() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <CollapseWrapper />
      {/* To Do: Add email input component */}
    </div>
  )
}

export default index
