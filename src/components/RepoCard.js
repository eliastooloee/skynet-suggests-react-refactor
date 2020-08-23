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
                <div className="repo-card">
                    <h1 > {map.name} </h1>
                    <p> Repository Name {repo.nickname}°</p>
                    <Button
                        onClick={() => {
                        {props.analyzeRepository(repo);
                            props.history.push("/map");};
                        }}
                        > 
                        Analyze Repository
                    </Button>
                    
                    <Button
                        classname="delete-button"
                        onClick={() => {
                        {props.deleteRepo(repo)};
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
export default withRouter(RepoCard);