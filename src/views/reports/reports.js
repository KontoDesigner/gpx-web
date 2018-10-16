import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reports extends Component {
    componentWillMount() {
        document.title = 'Reports - GPX'
    }

    render() {
        return (
            <div>
                Reports
                eqweqwewqeqwewqeqwe
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
