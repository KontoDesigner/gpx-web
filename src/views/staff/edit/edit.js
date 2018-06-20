import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../../actions/ajaxStatusActions'

class Edit extends Component {
    constructor() {
        super()

        this.state = {
            staff: null
        }
    }

    async componentWillMount() {
        const { match: { params } } = this.props;

        this.props.beginAjaxCall();

        try {
            const staff = await RestClient.Get(`staff/${params.id}`)

            this.setState({ staff });

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    render() {
        if (this.state.staff !== null) {
            return (
                <div>
                    {this.state.staff.fullName}
                </div>
            )
        }
        else {
            return ('')
        }
    }
}
function mapStateToProps(state) {
    return {
        tabs: state.staff.tabs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        beginAjaxCall: bindActionCreators(beginAjaxCall, dispatch),
        endAjaxCall: bindActionCreators(endAjaxCall, dispatch),
        ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)
