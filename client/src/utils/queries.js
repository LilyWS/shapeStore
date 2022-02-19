import { gql } from '@apollo/client';

export const QUERY_SHAPES = gql`
    query shapes {
        shapes {
            _id
            name
        }
    }
`