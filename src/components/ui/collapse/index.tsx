import { useState } from 'react'

import './index.css'

type props = {
  title: string
  children: React.ReactNode
}

/**
 * `Collapse()` returns Collapse component.
 *
 * It takes title and children.
 * @param title, a string which is represented as component's title.
 * @param children, a React Node Element which is represented as component's descrition body.
 *
 * @returns a custom collapse tsx tag
 */

function index({ title, children }: props) {
  const [isCollapse, setIsCollapse] = useState(true)

  function handleClick() {
    setIsCollapse(!isCollapse)
  }

  return (
    <div className={`collapse${isCollapse ? ' collapsed' : ''}`}>
      <div className="collapse-header" onClick={handleClick}>
        <p className="collapse-title">{title}</p>
        <div className="collapse-icon">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="collapse-body">
        <p className="collapse-text">{children}</p>
      </div>
    </div>
  )
}

export default index
