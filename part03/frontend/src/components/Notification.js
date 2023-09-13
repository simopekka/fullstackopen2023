const Notification = ({ message, success }) => {
    if (message === null) {
      return null
    } else if (success === true) {
        return (
            <div className="success">
              {message}
            </div>
          )
    } else {
        return (
        <div className="error">
            {message}
        </div>
        )
    }
  }
  
  export default Notification