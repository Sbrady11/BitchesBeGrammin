class Footer extends React.Component {
  constructor() {
    super();
    this.changeToHome = this.changeToHome.bind(this)
    this.changeToPost = this.changeToPost.bind(this)
    this.changeToProfile = this.changeToProfile.bind(this)
  };
  changeToPost(event){
    this.props.changePage('post')
  };
  changeToHome(event){
    this.props.changePage('home')
  };
  changeToProfile(event){
    this.props.changePage('profile')
  }

  render () {
    return (
      <div className="footer">
        <div class="tab">
          <button class="tablinks" onClick={this.changeToHome}>Home</button>
          <button class="tablinks" onClick={this.changeToPost}>Post</button>
          <button class="tablinks" onClick={this.changeToProfile}>Profile</button>
        </div>
      </div>
    )
  }
}
