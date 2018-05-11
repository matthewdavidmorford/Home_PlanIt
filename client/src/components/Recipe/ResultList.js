import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, CardGroup
} from 'reactstrap';
import styled, { css } from 'styled-components';

const ResultList = props => (
  <div className="list-group">
    <Row>
      {props.results.map(result => (
          <Col sm="4">
            <Card>
              <CardImg top width="100%" className="img-fluid" src={result.recipe.image} alt={result.title} />
              <CardBody>
                <CardTitle><h2>{result.recipe.label}</h2></CardTitle>
                <CardText>{result.recipe.ingredients.map(ingredient => (<p>{ingredient.text}</p>))}</CardText>
                <Button><a href={result.recipe.url}>Go to Recipe</a></Button>
              </CardBody>
            </Card>
          </Col>
      ))}
    </Row>
  </div>
);

export default ResultList;
