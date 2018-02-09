import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'

class CreateBanner extends React.Component {
  state = {
    description: '',
    imageUrl: '',
    title: ''
  }

  render() {
    return (
      <div>
        <div style={{maxWidth: 400}} className=''>
          {this.state.imageUrl &&
            <img
              src={this.state.imageUrl}
              alt=''
            />}
          <input
            value={this.state.imageUrl}
            placeholder='Image Url'
            onChange={e => this.setState({imageUrl: e.target.value})}
            autoFocus
          />
          <input
            value={this.state.description}
            placeholder='Description'
            onChange={e => this.setState({description: e.target.value})}
          />
          <input
            value={this.state.title}
            placeholder='Title'
            onChange={e => this.setState({title: e.target.value})}
          />
          {this.state.description &&
            this.state.imageUrl &&
            <button
              onClick={this.props.handleBanner}
            >
              Post
            </button>}
        </div>
      </div>
    )
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

const CreatePageWithMutation = graphql(CREATE_POST_MUTATION, {name: 'createBannerMutation'})(CreateBanner)
export default withRouter(CreatePageWithMutation)
