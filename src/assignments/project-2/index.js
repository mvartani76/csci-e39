import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

import Layout from './components/layout'
import Menu from './components/menu'
import Advertisement from './components/advertisement'
import Messages from './components/messages'
import Members from './components/members'
import InputBox from './components/inputbox'

import MENUITEMS from './data/menu_data.js'
import ADITEMS from './data/ad_data.js'

import './app.scss'

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}

	onType(e) {
		const {chat} = this.props.actions
		const {currentText: prevText} = this.state
		const currentText = e.target.value

		if (!currentText.length) chat.stopTyping()
		if (currentText.length === 1 && !prevText.length) chat.startTyping()

		this.setState({currentText})
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(currentText)
		this.setState({currentText: ``})
	}

	getTypingMessage() {
		const {typing} = this.props.chat

		switch (typing.length) {
			case 0: return null
			case 1: return `${typing[0].name} is typing...`
			case 2: return `${typing[0].name} and ${typing[1].name} are typing...`
			case 3: return `${typing[0].name}, ${typing[1].name}, and ${typing[2].name} are typing...`
			// len > 3
			default: return `${typing.length} members are typing...`
		}
	}

	render() {
		const {classroom, chat, actions} = this.props
		const {currentText} = this.state

		return (
		
		<Layout>
			<Layout.Header title="Pizza Lover's Chat" >
				<Menu menuItems={MENUITEMS}/>
			</Layout.Header>

			<Layout.Content title="I am main content">
				<h1>Chatroom</h1>

				<h2>Messages</h2>
				<Messages chat={chat} />
				<InputBox currentText={currentText} onType={this.onType} onSend={this.onSend} getTypingMessage={this.getTypingMessage()} />
			</Layout.Content>
			
			<Layout.Sidebar>
				<h2>Members</h2>
				<Members classroom={classroom} />
			</Layout.Sidebar>

			<Layout.Adbar>
				<Advertisement adItems={ADITEMS}/>
			</Layout.Adbar>
			<Layout.Footer>
				<p>&copy; 2019 PizzaChat App</p>
			</Layout.Footer>
		</Layout>
		)
	}

}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
})

Chat.propTypes = {
	classroom: PropTypes.shape({
		self: studentPropType,
		students: PropTypes.arrayOf(studentPropType).isRequired,
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired
	}),
	actions: PropTypes.object.isRequired,
}

export default Chat