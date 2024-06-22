import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, selectTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActiveTab ? 'active-tab-button' : ''

  const onClickTabButton = () => {
    selectTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeTabClassName}`}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
