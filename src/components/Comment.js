import React from 'react'
import PropTypes from 'prop-types'

function Comment ({comment}) {
	return(
		<div>
			<div><b>{comment.user}</b></div>
			<p>{comment.text}</p>
		</div>
	)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired
}

export default Comment
