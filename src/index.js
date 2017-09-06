import checkForErrors from './lib/checkForErrors'
import getElementPosition from './lib/getElementPosition'
import checkForSupportAndAnimate from './lib/checkForSupportAndAnimate'

/*
	* scroll the page to an element
	* @param {string} targetSelector
	* @param {number} speed (defaults to 300)
	* @param {number} offset (defaults to 0)
*/

const scrollToTarget = (targetSelector, speed = 300, offset = 0) => {
	const hasNoErrors = checkForErrors(targetSelector, speed, offset)
	if (hasNoErrors) {
		clearInterval(window.scrollInterval)
		const target = document.querySelector(targetSelector)
		const targetPosition = getElementPosition(target, offset)
		checkForSupportAndAnimate(targetPosition, speed)
	}
}

export default scrollToTarget
