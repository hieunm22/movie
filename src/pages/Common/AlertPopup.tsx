import classNames from "classnames"
import React from "react"
import { connect } from "redux-zero/react"
import { ReduxState } from "../../types/Redux"
import { clearErrorMessage } from "../actions"
import { HomeProps } from "../Home/Home.types"

const AlertPopup = (props: HomeProps) => {
  const {
    error,
    clearErrorMessage
  } = props

  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    clearErrorMessage()
  }

  const clsName = classNames(
    { "modal-content popup": true },
    { "fade-in-up": error },
    { "fade-in-down": !error }
  )

  return (
    <div className="modal-dialog">
      <div className={clsName}>
        <div className="modal-header">
          <span className="change-color__header-row1">Notification</span>
          <span
            className="closeClassName"
            onClick={onCloseModal}
            title="Close"
          />
        </div>
        <div className="modal-body custom-scrollbar">
          {error}
        </div>
        <div className="modal-footer custom-footer-popup">
          <span className="wide-link" onClick={onCloseModal}>OK</span>
        </div>
      </div>
    </div>
  )
}

const mapToProps = ({ error }: ReduxState) => ({
  error
})

const actions = { clearErrorMessage }

const connected = connect(mapToProps, actions)

export default connected(AlertPopup)
