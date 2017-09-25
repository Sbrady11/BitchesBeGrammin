class Photo extends React.Component {
  render () {
    const { pic, caption } = this.props
    return (
      <div className='single-photo'>
        <li><img className='pic' src={pic}/></li>
        <li>{caption}</li>
      </div>
    )
  }
}
