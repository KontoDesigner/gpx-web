import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import Revisions from './revisions'

    const History = (props) => {

  

  return (


                        <Revisions

                       revision= {props.history}
              
                         />
           
               
          

  )
        }


export default History