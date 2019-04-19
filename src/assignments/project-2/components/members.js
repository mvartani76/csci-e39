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
						<li key={id}><span>{name}</span></li>
					)}
				</ul>
		}
	}
export default Members