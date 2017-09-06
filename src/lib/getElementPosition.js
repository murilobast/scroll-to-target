/*
	* get the actual position of provided element
	* @param {Dom Element} element
	* @param {number} offset
*/

const getElementPosition = (element, offset) => {
	const viewportOffset = element.getBoundingClientRect()
	return window.pageYOffset + viewportOffset.top - offset
}

export default getElementPosition
