import React, { Component } from 'react'
import { connect } from 'react-redux'

class Planning extends Component {
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
