import React from 'react'
import { gql, graphql } from 'react-apollo'

import Post from './post'
import UserPic from '../components/UserPic'
function AuthorDetails ({ author, username}) {
  if (author && username != 'unknown') {
    return (
      <div>
        <div>
        {author.lastName}, {author.firstName}
      </div>
        <UserPic username={username}/>

        <ul>
        {author.posts.forEach((post)=>{
          return (<Post post={post} />)
        })

        }
        </ul>
      </div>
    )
  }
  return <div>Loading</div>
}

const author = gql`
  query author($username: String!) {
    author(username: $username) {
      id
      firstName
      lastName
      username
      posts{
        id
        title
        body
        url
        votes
      }
    },

  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(author, {
  options: {
  },
  props: ({ data }) => ({
    author: data.author
  })
})(AuthorDetails)
