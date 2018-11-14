import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Import from './import'
import Tabs from './tabs'
class Imports extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            activeTab: 'fileImport',
            years: [    //not in use  delete
                {
                    id: '2018',
                    name: '2018'
                },
                {
                    id: '2019',
                    name: '2019'
                },
                {
                    id: '2020',
                    name: '2020'
                },
                {
                    id: '2021',
                    name: '2021'
                }
            ],
           
        }

   


    }
  
    toggle = (tab, getData, resetData) => {
     
        if (this.state.activeTab !== tab) {
            //Reset current tab state
            this.state.resetData([])

            //Reset filter
           // this.props.filterActions.handleFilter()

            //Get tab data
            getData()

            this.setState({
                activeTab: tab,
                resetData: resetData
            })
        }
    }
    render() {
        return (
            <div>
                <Row>
                  
                    <Tabs
                       toggle={this.toggle}
                       activeTab={this.state.activeTab}
                      
                    />
                            <Col sm="12" md="9" lg="9" xl="10">
                        <Import 
                        fileimportTypes={this.state.fileimportTypes}
                        years={this.state.years}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Imports