import gql from "graphql-tag";

export const feedBackSchema = gql`

    type Mutation{
        postFeedback (input:FeedbackInput! ): FeedbackResponse!
    }

    input FeedbackInput{
        name: String!
        email: String!
        message: String!
    }

    type FeedbackResponse{
        success: Boolean!
    }
`