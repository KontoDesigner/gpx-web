import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RestClient from '../../../infrastructure/restClient'
import { beginAjaxCall, endAjaxCall, ajaxCallError } from '../../../actions/ajaxStatusActions'
import { Row, Col } from 'reactstrap'
import EmployeeInfo from './employeeInfo/employeeInfo'
import Absence from './absence/absence'
import Cv from './cv/cv'
import FullYearReview from './fullYearReview/fullYearReview'
import Applications from './applications/applications'
import A1 from './a1/a1'
import Team from './team/team'
import History from './history/history'

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
                <Row>
                    <Col>
                        {/* <EmployeeInfo /> */}
                        {/* <Cv /> */}
                        {/* <FullYearReview /> */}
                        {/* <Applications /> */}
                        {/* <A1 /> */}
                        {/* <Team /> */}
                        <History />
                    </Col>
                </Row>
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