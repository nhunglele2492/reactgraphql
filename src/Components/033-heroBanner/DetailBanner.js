import React from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

class DetailBanner extends React.Component {

  render() {
    if (this.props.bannerQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {Banner} = this.props.bannerQuery

    return (
      <div>
        <button
          onClick={this.props.history.goBack}
        >
        BACK
        </button>
        <div>
          <div className="hero-banner-1 bg--dark-black--overlay">
            <div className="hero-banner-1__image">
              <img src={Banner.imageUrl} alt="Hero Banner"/>
            </div>
              <div className="hero-banner-1__content text--center">
                <div className="container">
                  <h1 className="hero-banner-1__title">{Banner.title}</h1>
                  <div className="hero-banner-1__description">{Banner.description}</div>
              </div>
            </div>
          </div>
          <button
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }

  handleDelete = async () => {
    await this.props.deleteBannerMutation({variables: {id: this.props.bannerQuery.Banner.id}})
    this.props.history.replace('/banner')
  }
}

const DELETE_BANNER_MUTATION = gql`
  mutation deleteBannerMutation($id: ID!) {
    deleteBanner(id: $id) {
      id
    }
  }
`

const POST_QUERY = gql`
  query BannerQuery($id: ID!) {
    Banner(id: $id) {
      id
      imageUrl
      description
    }
  }
`

const DetailPageWithGraphQL = compose(
  graphql(POST_QUERY, {
    name: 'bannerQuery',
    // see documentation on computing query variables from props in wrapper
    // http://dev.apollodata.com/react/queries.html#options-from-props
    options: ({match}) => ({
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(DELETE_BANNER_MUTATION, {
    name: 'deleteBannerMutation'
  })
)(DetailBanner)



const DetailPageWithDelete = graphql(DELETE_BANNER_MUTATION)(DetailPageWithGraphQL)

export default withRouter(DetailPageWithDelete)
