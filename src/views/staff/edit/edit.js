import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../../actions/ajaxStatusActions'
import AssignedRoles from './assignedRoles'
import ContactInformation from './contactInformation'
import CurrentSeason from './currentSeason'
import EmployeeInformation from './employeeInformation'
import FollowingSeason from './followingSeason'
import Gap from './gap'
import NextSeason from './nextSeason'
import PhotoFile from './photoFile'
import PlannedMove from './plannedMove'
import Tabs from './tabs'
import WorkExperience from './workExperience'

class Edit extends Component {
    constructor() {
        super()

        this.state = {
            staff: null
        }
    }

    async componentDidMount() {
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