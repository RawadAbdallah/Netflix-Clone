import './index..css'

export default function LanguageSelector() {
  return (
    <div className="language-menu">
      <div className="select-wrapper">
        <div className="select-arrow globe">
          <select defaultValue={'english'} className="select">
            <option value={'arabic'}>العربية</option>
            <option value={'english'}>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}
