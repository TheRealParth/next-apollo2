import { gql, graphql } from 'react-apollo';
import post from './post';
const POSTS_PER_PAGE = 10;

 const PostList = ({ data: { allPosts, loading, _allPostsMeta }, loadMorePosts }) => {
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count;
    return (
      <section>
        <ul>

          {allPosts.map((post, index) =>
            <li key={post.id}>
              <Post image={post.image} title={post.title} body={post.body}/>
            </li>
          )}
        </ul>
        {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}

        <style jsx>{`

        `}</style>

      </section>
    )
  }
  return <div>Loading</div>
}

const allPosts = gql`
  query posts {
    postsAll {
      id
      title
      body
      url
      votes
      latitude
      longitude
      author{
        id
        firstName
        lastName
        username
      }
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      limit: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      console.log(data)
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          console.log(previousResult)
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(PostList)
