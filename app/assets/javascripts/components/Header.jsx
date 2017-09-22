class Header extends React.Component {
  render () {
    const { avatar, username, bio} = this.props.data
    return (
      <div className="header">
        <img className="avatar" src={avatar} alt=""/>
        <div className="username">
          <li>
            <span className="username">{username}</span>
            <span className="bio">{bio}</span>
          </li>
        </div>
      </div>
    )
  }
}
