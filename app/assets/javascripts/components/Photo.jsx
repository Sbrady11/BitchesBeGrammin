class Photo extends React.Component {
  render () {
    const { comments } = this.props
    return (
      <div className='single-photo'>
      <ul>
         <li><img src= 'https://c1.staticflickr.com/3/2181/1568918513_b944560a2e_z.jpg?zz=1' />
         <div className='comment'>
           {comments.map((tweet, i) =>
             <Comment
               key={comment.id}
               user={comment.user}
               body={comment.body} />
           )}
        </div>
         </li>
        </ul>
    )
