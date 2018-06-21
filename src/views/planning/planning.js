import React, { Component } from 'react'
import { connect } from 'react-redux'

class Planning extends Component {
    componentWillMount() {
        document.title = 'Planning - GPX'
    }

    render() {
        return (
            <div>
                Planning
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

export default connect(mapStateToProps, mapDispatchToProps)(Planning)
