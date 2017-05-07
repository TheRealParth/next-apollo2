import React from 'react'
import { gql, graphql } from 'react-apollo'

function PostUpvoter ({ voteUpPost, votes, id }) {
  return (
      <a className="btn-floating btn-small waves-effect waves-light green">
        <i onClick={() => voteUpPost(id)} className="small material-icons" style={{ color: '#ffffff'}}>thumb_up</i>
      </a>
  )
}

const voteUpPost = gql`
  mutation ($id: Int!) {
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
