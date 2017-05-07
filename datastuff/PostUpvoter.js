import React from 'react'
import { gql, graphql } from 'react-apollo'

function PostUpvoter ({ voteUpPost, votes, id }) {
  return (
    <button onClick={() => voteUpPost(id, votes + 1)}>
      {votes}
      <style jsx>{`
      `}</style>
    </button>
  )
}

const voteUpPost = gql`
  mutation voteUpPost($id: ID!) {
    voteUpPost(id: $id) {
      id
      votes
    }
  }
`

export default graphql(voteUpPost, {
  props: ({ ownProps, mutate }) => ({
    voteUpPost: (id) => mutate({
      variables: { id },
      optimisticResponse: {
        updatePost: {
          id: ownProps.id
        }
      }
    })
  })
})(PostUpvoter)
