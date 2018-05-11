import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../../utils/API";
import axios from 'axios'

import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled, { css } from 'styled-components';

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    user: null
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchRecipes("chicken");
    axios.get('/auth/user').then(response => {
      console.log(response.data.user)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        console.log(response.data.user.local.username)
        this.setState({
          user: response.data.user
        })
        console.log(this.state)
      }
    })
  }

  searchRecipes = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.hits }))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
    console.log(this.state.results)
    console.log(this.state.user)
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRecipes(this.state.search);
  };

  handleRecipeSave = (url, title) => {
    const recipeData = {
      title: title,
      ingredients: url,
      user: this.state.user
    }
    axios.post("/api/recipes", recipeData)
  }

  render() {

    return (
      <Container>
        <Jumbotron>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList 
          results={this.state.results}
          handleRecipeSave={this.handleRecipeSave}/>
        </Jumbotron>
      </Container>
    );
  }
}

export default SearchResultContainer;
