import { gql  } from '@apollo/client'

export const ALL_BOOKS = gql`
  query {
    allBooks  {
      title
      author{
        name
        born
      }
      published
      genres
    }
  }
`

export const ALL_AUTHORS = gql`
query {
  allAuthors  {
    name
    born
    bookCount
  }
}
`

export const ADD_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ) {
      title,
      author{
        name
        born
      }
    }
  }
`

export const EDIT_AUTHOR = gql`
mutation editBorn($name: String!, $born: Int!){
  editAuthor(
    name: $name,
    setBornTo: $born
  ) {
    name,
    born
  }
}
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`