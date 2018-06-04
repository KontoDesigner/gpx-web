import React, { Component } from 'react'
import { connect } from 'react-redux'

class Staff extends Component {
    render() {
        return (
            <div>
                Staff
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

export default connect(mapStateToProps, mapDispatchToProps)(Staff)
