/*
	* check if
	* @param {string} targetSelector
	* @param {number} speed
	* @param {number} offset
*/

const checkForErrors = (targetSelector, speed, offset) => {
	if (typeof targetSelector !== 'string')
		throw new Error('Invalid selector. It must be a string')
	if (typeof speed !== 'number')
		throw new Error('Invalid speed. It must be a number.')
	if (typeof offset !== 'number')
		throw new Error('Invalid offset. It must be a number.')
	return true
}

export default checkForErrors
