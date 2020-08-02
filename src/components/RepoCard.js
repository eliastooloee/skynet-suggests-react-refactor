import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Container, Button } from 'react-bootstrap';

const RepoCard = props => {
    const { map, selectMap } = props;

    return(
        <div>
        <Container>
            <Row>
            <Col>
                <div className="map-card">
                    <h1 > {map.name} </h1>
                    <p> Repository Name {map.latitude}°</p>
                    <Button
                        onClick={() => {
                        {props.selectMap(map);
                            props.history.push("/map");};
                        }}
                        > 
                        Show Repository
                    </Button>
                    
                    <Button
                        classname="delete-button"
                        onClick={() => {
                        {props.deleteMap(map)};
                        }}
                        > 
                        Delete Repository from your account.
                    </Button>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
    )
}
export default withRouter(MapCard);