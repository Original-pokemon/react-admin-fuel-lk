import "./contacts-box.scss"

const contactsBox = () => {

  return (
    <div className="topBox">
      <h1>Контакты</h1>
      <div className="list">
        <div className="listItem">
            <span className="title">Ольга Иванова</span>
        </div>
        <div className="listItem">
            <span className="contacts">+7 (999) 999-99-99</span>
        </div>
      </div>
    </div>
  )
}

export default contactsBox