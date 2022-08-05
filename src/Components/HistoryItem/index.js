import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="history-list">
        <p className="time">{timeAccessed}</p>
        <img className="logo" alt="domain logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
          testId="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
