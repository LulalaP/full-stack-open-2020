import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'

const Blog = ({ blog }) => {
  const [showInfo, setShowInfo] = useState(false)
  const dispatch = useDispatch()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const buttonStyle = {
    color: 'blue'
  }

  const handleLike = async(blog) => {
    try {
      dispatch(likeBlog(blog))
      dispatch(setNotification(`Blog ${blog.title} likes + 1`, 5))
    } catch(exception){
      dispatch(setNotification('Failed to like', 5))
    }
  }

  const handleDelete = async(blogToDelete) => {
    const answer = window.confirm(`Delete Blog ${blogToDelete.title}?`)
    if(answer){
      try {
        dispatch(deleteBlog(blog))
        dispatch(setNotification(`Deleted Blog: ${blogToDelete.title}`, 5))
      } catch(exception){
        dispatch(setNotification('Failed to Delete', 5))
      }
    }
  }

  const detailForm = () => (
    <div id='blog-info' className="blog-info">
      <p>
        url: {blog.url}
      </p>
      <p>
        likes: {blog.likes}
        <button id='like-button' onClick={() => handleLike(blog)}>like</button>
      </p>
      <p>added by {blog.user && blog.user.name}</p>
      <button id='remove-button' style={buttonStyle} onClick={() => handleDelete(blog)}>Remove</button>
    </div>
  )

  const changeLabel = showInfo ? 'hide' : 'view'

  return(
    <div style={blogStyle} >
      <p id='blog-form' className='blog-title'>
        {blog.title} by {blog.author}
        <button id='showinfo-button' onClick={() => setShowInfo(!showInfo)}>{changeLabel}</button>
      </p>
      {showInfo ? detailForm(): null}
    </div>
  )}

export default Blog