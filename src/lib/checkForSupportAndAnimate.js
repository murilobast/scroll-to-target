import animateWithSetInterval from './animateWithSetInterval'
import animateWithRequestAnimationFrame from './animateWithRequestAnimationFrame'
/*
	* check for browser support (requestAnimationFrame)
	* and call the right animation method
	* @param {number} position
*/

const checkForSupportAndAnimate = (position, speed) => {
	const targetPosition = position - window.pageYOffset
	const stepSize = Math.abs(targetPosition / (speed / 1000 * 60))
	window.scrollTarget = position
	if ('requestAnimationFrame' in window)
		animateWithRequestAnimationFrame(position, stepSize)
	else
		animateWithSetInterval(position, stepSize)
}

export default checkForSupportAndAnimate
