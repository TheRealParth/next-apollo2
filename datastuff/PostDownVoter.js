import React from 'react'
import { gql, graphql } from 'react-apollo'

function PostDownVoter ({ voteDownPost, votes, id }) {
  return (

      <a className="btn-floating btn-small waves-effect waves-light red">
        <i onClick={() => voteDownPost(id)} className="small material-icons" style={{ color: '#ffffff'}}>thumb_down</i>
      </a>
  )
}

const voteDownPost = gql`
  mutation ($id: Int!) {
    voteDownPost(id: $id) {
      id
      votes
    }
  }
`

export default graphql(voteDownPost, {
  props: ({ ownProps, mutate }) => ({
    voteDownPost: (id) => mutate({
      variables: { id },
      optimisticResponse: {
        updatePost: {
          id: ownProps.id
        }
      }
    })
  })
})(PostDownVoter)
