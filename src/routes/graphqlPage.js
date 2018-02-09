import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'

import ReactModal from 'react-modal'
import Collapsible from 'react-collapsible';

import DefaultLayout from '../Components/02-layout/DefaultLayout';
import {Button} from '../Components/01-baseElements/elements/Button';

import CreateBanner from '../Components/031-heroBanner/CreateBanner';

class Graphql extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (contentModal) {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <DefaultLayout>
        <Button onClick={this.handleOpenModal}>Add component</Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
        >
          <div className="main-modal">
            <Collapsible trigger="Hero Banner">
              <CreateBanner />
            </Collapsible>
            <Collapsible trigger="CTA">
              CTA
            </Collapsible>
          </div>
          <Button onClick={this.handleCloseModal}>Close</Button>
        </ReactModal>
      </DefaultLayout>
    );
  }
}


const CREATE_POST_MUTATION = gql`
  mutation createBannerMutation($description: String!, $imageUrl: String!, $title: String!) {
    createBanner(description: $description, imageUrl: $imageUrl, title: $title) {
      id
      description
      imageUrl
      title
    }
  }
`

const CreatePageWithMutation = graphql(CREATE_POST_MUTATION, {name: 'createBannerMutation'})(Graphql)
export default withRouter(CreatePageWithMutation)
