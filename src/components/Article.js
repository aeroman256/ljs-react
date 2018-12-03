import React, {Component} from 'react';
import CommentList from './CommentList'
import PropTypes from 'prop-types'
//import {findDOMNode} from 'react-dom'

class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			text: PropTypes.string,
			title: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired
		}).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.defaultOpen
		}
	}

	componentWillReceiveProps(nextProps) {
		//console.log('---', 'updating', this.props.isOpen, '||', nextProps.isOpen)
	}

	componentWillMount() {
		//console.log('---', 'mounting')
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props

		return(
		<div ref = {this.setContainerRef}>






			<h3>{article.title}</h3>
			<button onClick = {toggleOpen}>
				{isOpen ? 'close' : 'open'}
			</button>
			{this.getBody()}
		</div>
		)
	}
	//Функция получения ссылки на отрендерившийся блок в DOM(React API refs)
	setContainerRef = ref => {
		this.container = ref
		//console.log('---', ref)
	}
	//
	componentDidMount() {
		//console.log('---', 'mounted')
	}

	getBody(){
        const {article, isOpen} = this.props
		if (!isOpen) return null
		return (
			<section>
				{article.text}
				<CommentList comments = {article.comments} />
			</section>)
	}


}

export default Article
