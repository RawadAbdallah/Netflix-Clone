import './index..css'

function index() {
  return (
    <div className="language-menu">
      <div className="select-wrapper">
        <div className="select-arrow globe">
          <select className="select">
            <option>العربية</option>
            <option selected>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default index
