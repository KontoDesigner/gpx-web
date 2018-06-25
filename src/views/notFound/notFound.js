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
                <p className="card-text">Page was not found.</p>
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