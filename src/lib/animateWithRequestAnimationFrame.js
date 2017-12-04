import getNextPosition from './getNextPosition'
/*
	* animates window scroll with requestAnimationFrame
	* @param {number} position
	* @param {number} stepSize
*/

const animateWithRequestAnimationFrame = (position, stepSize) => {
	const nextPosition = getNextPosition(position, stepSize)
	const maxPosition = document.body.scrollHeight - window.innerHeight
	window.scrollTo(0, nextPosition)
	if (window.scrollTarget === position && nextPosition <= maxPosition && nextPosition !== position)
		return requestAnimationFrame(() => animateWithRequestAnimationFrame(position, stepSize))
	delete window.scrollTarget
}

export default animateWithRequestAnimationFrame
