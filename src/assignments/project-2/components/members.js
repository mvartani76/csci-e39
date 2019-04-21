import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Members extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {classroom} = this.props
		return <ul>
					{classroom.students.map(({id, name}) =>
						<li className="member-list" key={id}><img src="https://avatars.dicebear.com/v2/male/{name}.svg?options[mood][]=happy" /><span>{name}</span></li>
					)}
				</ul>
		}
	}
export default Members