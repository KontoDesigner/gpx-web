import React, { Component } from 'react'
import { connect } from 'react-redux'

class Settings extends Component {
    render() {
        return (
            <div>
                Settings
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
