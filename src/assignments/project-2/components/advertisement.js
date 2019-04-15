import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Advertisement extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {adItems} = this.props
		return( 
			<div className="ad-item">
				<ul>
					{
						adItems.map((item,i) => {
							return <li key={i}><img src={item.url}/></li>
						})
					}
				</ul>
			</div>
			 )
		}
	}
export default Advertisement