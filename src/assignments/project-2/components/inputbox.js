import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class InputBox extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {currentText, onSend, onType, getTypingMessage} = this.props
		return <>
				<input className="chat-input" value={currentText} onChange={onType} onKeyUp={onSend} placeholder="Type your love of pizza here..."/>
				<button className="chat-send-button" disabled={currentText === ``} onClick={onSend}>Send</button>
				<p>{getTypingMessage}</p>
			</>
		}
	}
export default InputBox