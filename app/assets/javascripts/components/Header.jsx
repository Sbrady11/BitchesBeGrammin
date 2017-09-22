class Header extends React.Component {
  render () {
    const { avatar, username, bio, photos } = this.props.data
    return (
      <div className="header">
        <img className="avatar" src={avatar} alt=""/>
        <div className="username">
          <ul className="unstyled">
            <li>
              <span className="username">{username}</span>
              <span className="bio">{bio}</span>
            </li>
            <li>
              {photos.map((photo)=>
                <Photo
                  key={photo.id}
                  pic={photo.pic}
                  caption={photo.caption}/>
                )}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
