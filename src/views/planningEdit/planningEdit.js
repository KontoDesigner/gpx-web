import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as planningInfoActions from '../../actions/planningEdit/planningInfoActions'
import PlanningInfo from './planningInfo/planningInfo'
//import Buttons from './buttons';


class PlanningEdit extends Component {

    constructor(props) {
        super()

        const {
            match: { params }
        } = props
        const mplid = params.mplid 
       
        

        this.state = {
            mplid: mplid,
           // mplID: mplID,
            position: null
       
        }
    }

   componentWillMount=async()=>  {
         const _this = this
        
        
        // this.props.employeeInfoActions.getAvailablePositions(this.props.currentSeason.name, this.props.nextSeason.name, this.props.followingSeason.name)
        // this.props.employeeInfoActions.getPositionAssigns(this.state.staffId)

         this.props.planningInfoActions.getPosition(this.state.mplid).then(function () {
          
            if (_this.props.position != null) { 
               
                document.title = `${_this.props.position.jobTitle} - ${_this.props.position.destination} `
           }
            else {
                
               document.title = 'Position not found - GPX'
           }
         })
    }

    save = () => {
        alert('not implemented')
    }

    render() {
    //     const buttons = <Buttons
    //     save={this.save}
    //     unsavedEdit={this.state.unsavedEdit}
    // />
        if (this.props.position === null) {
            //Loading
            return ''
        } else if (this.props.position === undefined) {
            //Not found
            return (

                <Card>
                    <CardHeader>Could not find position {this.state.mplid}</CardHeader>

                    <CardBody>
                        <p className="card-text">
                           Position with id: <b>{this.state.mplid}</b> was  not found. 
                        </p>
                    </CardBody>

                    <CardFooter>
                        <LinkContainer to="/planning">
                            <Button color="primary">Back</Button>
                        </LinkContainer>
                    </CardFooter>
                </Card>
            )
        } else {
            //Found
            return (
            
                <div>
                   

                    <Row>
                        
                    </Row>

                    <Row>
                        <Col>
                           
                               
                                    <PlanningInfo
                                
                                        position={this.props.position}

                                    />
                                

                            
                           
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    
    return {

        position: state.planningEdit.planningInfo.position,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //positionInfoActions: bindActionCreators(positionInfoActions, dispatch),
        planningInfoActions: bindActionCreators(planningInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanningEdit)
