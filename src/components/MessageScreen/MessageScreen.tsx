import { Link } from "react-router-dom"
import "./MessageScreen.scss"

export interface MessageScreenProps {
  message: string
}

const MessageScreen = (props: MessageScreenProps) => {
  return (
    <div className="message__container">
      <div className="message__header">Board Message</div>
      <div className="message__content">
        <div
          className="message__content-panel"
          dangerouslySetInnerHTML={{ __html: props.message }}
        />
      </div>
      <div className="message__actions">
        <Link className="return-btn" to="/">
          Return to home page
        </Link>
      </div>
    </div>
  )
}

export default MessageScreen
