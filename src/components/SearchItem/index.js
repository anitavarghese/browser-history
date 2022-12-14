import './index.css'

const SearchItem = props => {
  const {historyList, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    deleteSearch(id)
  }
  return (
    <li className="search-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title-text">{title}</p>
        <p className="domain-url-text">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button type="button" className="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            className="delete-logo"
            alt="delete logo"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
