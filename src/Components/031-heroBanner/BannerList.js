import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class BannerList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allBannersQuery.refetch()
    }
  }

  render() {
    if (this.props.allBannersQuery.loading) {
      return (
        <div>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    return (
      <div>
        <Link to="/banner/create">Add Herobanner</Link>
        <div>
          {this.props.allBannersQuery.allBanners && this.props.allBannersQuery.allBanners.map(banner => (
            <Banner
              key={banner.id}
              banner={banner}
              refresh={() => this.props.allBannersQuery.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}

const ALL_POSTS_QUERY = gql`
  query allBannersQuery {
    allBanners(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
      title
    }
  }
`

const ListPageWithQuery = graphql(ALL_POSTS_QUERY, {
  name: 'allBannersQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(BannerList)

export default ListPageWithQuery
