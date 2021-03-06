import { gql  } from '@apollo/client'

const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    title
    author{
      name
      born
    }
    published
    genres
    id
  }
`

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

export const FIND_BOOKS_BY_GENRE = gql`
  query findBooksByGENRE($genreToSearch: String) {
    allBooks(genre: $genreToSearch) {
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

export const USER = gql`
query {
  me{
    username
    favoriteGenre
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
      published
      genres
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
      username
      favoriteGenre
    }
  }
`

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}
`
