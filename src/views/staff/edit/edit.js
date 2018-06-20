import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tabActions from '../../../actions/staff/tabActions'
import RestClient from '../../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../../actions/ajaxStatusActions'

class Edit extends Component {
    constructor() {
        super()

        this.state = {
            staff: null
        }
    }

    async componentWillReceiveProps(props) {
        //When navigating between two user tabs, component is not reloaded - check for changes manually and get new staff if changed
        if (props.match.params.id !== this.state.staff.staffID) {
            this.props.beginAjaxCall();

            try {
                const staff = await RestClient.Get(`staff/${props.match.params.id}`)

                this.setState({ staff });

                this.props.endAjaxCall();
            } catch (error) {
                this.props.ajaxCallError(error);

                throw error
            }
        }
    }

    async componentWillMount() {
        const { match: { params } } = this.props;

        this.props.beginAjaxCall();

        try {
            const staff = await RestClient.Get(`staff/${params.id}`)

            this.setState({ staff });

            this.handleTabs(staff)

            this.props.endAjaxCall();
        } catch (error) {
            this.props.ajaxCallError(error);

            throw error
        }
    }

    handleTabs = (staff) => {
        const exists = this.props.tabs.filter(t => {
            return t.staffId === staff.staffID
        })[0];

        if (exists === undefined) {
            let tabs = Object.assign([], this.props.tabs);

            const tab = {
                staffId: staff.staffID,
                firstNameLastName: `${staff.firstName} ${staff.lastName}`
            }

            tabs.push(tab);

            this.props.tabActions.handleTabs(tabs);
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
        tabActions: bindActionCreators(tabActions, dispatch),
        beginAjaxCall: bindActionCreators(beginAjaxCall, dispatch),
        endAjaxCall: bindActionCreators(endAjaxCall, dispatch),
        ajaxCallError: bindActionCreators(ajaxCallError, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)
