import React, {Component} from 'react'
//import PropTypes from 'prop-types'
//import ArticleList from './ArticleList'

class ArticlesChart extends Component{
    static propTypes = {

    }

    componentDidMount(){
        //d3 works with this.chart
    }

    componentWillReceiveProps(nextProps) {
        //update chart for my article
    }

    render(){
        return(
            <div ref="chart">

            </div>
        )
    }

    componentWillUnmount(){
        //do some cleanup
    }
}

export default ArticlesChart