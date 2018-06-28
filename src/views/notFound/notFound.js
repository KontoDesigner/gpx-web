import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NotFound = (props) => {
    return (
        <Card>
            <CardHeader>
                Not Found
                </CardHeader>

            <CardBody>
                <b className="card-text text-danger">Page was not found.</b>
            </CardBody>

            <CardFooter>
                <LinkContainer to="/staff">
                    <Button color="primary">Back</Button>
                </LinkContainer>
            </CardFooter>
        </Card>
    )
}

export default NotFound;