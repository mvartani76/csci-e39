import React from 'react'

const Slider = ({sliderType, min, max, value, classes}) =>
	<div class="slidecontainer">
  		<input type={sliderType} min={min} max={max} className={classes} />
 	</div>

export default Slider