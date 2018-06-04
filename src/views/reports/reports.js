import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reports extends Component {
    render() {
        return (
            <div>
                Reports
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
