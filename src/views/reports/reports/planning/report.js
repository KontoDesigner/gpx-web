import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
// import TextInput from '../../../../components/textInput'
import { bindActionCreators } from 'redux'
// import * as filterActions from '../../../actions/planning/filterActions'
// import debounce from 'lodash/debounce'
import Select from 'react-select'



const Report = (props) => {

    return (
     
        <Card>
            <CardHeader>Report: Planning</CardHeader>

            <CardBody className="no-padding-bottom">
                <div className="form-row">

        {/* <Col sm="12" md="6" lg="6" xl="4" className="form-group"> */}
        <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group form-group-select">
        <label htmlFor="destination">Destination</label>

        <Select
          id="sourceMarket"
          valueKey="id"
          labelKey="name"
          className="form-control"
         //  options={this.props.sourceMarkets}
        //   onChange={this.updateSourceMarketState}
        //   value={this.props.filter.sourceMarket}
          placeholder="Source Market"
        />
      
                    </Col>

                    
                </div>
            </CardBody>
        </Card>
    );
};

export default Report
