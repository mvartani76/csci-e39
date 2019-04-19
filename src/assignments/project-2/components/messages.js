import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Messages extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {chat} = this.props
		return <ul>
					{chat.messages.map(({id, student, text, createdAt}) =>
						<li key={id}>
							<label>{student.name} at {createdAt.toISOString()}</label>
							<p>{text}</p>
						</li>
					)}
				</ul>
		}
	}
export default Messages