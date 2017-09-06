/*
	* get the next scroll position
	* @param {number} position
	* @param {number} stepSize
*/

const getNextPosition = (position, stepSize) => window.pageYOffset - position > 0 ?
	Math.max(window.pageYOffset - stepSize, position) :
	Math.min(window.pageYOffset + stepSize, position)

export default getNextPosition
