import './index.css'

type TagLineProps = {
  tagLine: string | undefined
}

const Hook = ({ tagLine }: TagLineProps) => {
  return (
    <div className="hook-wrapper">
      <div className="hook-hr top"></div>
      <div className="hook-text">{tagLine}</div>
      <div className="hook-hr bottom"></div>
    </div>
  )
}
export default Hook
