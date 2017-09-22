class Footer extends React.Component {
  constructor(){
    super()
    this.changePage = this.changePage.bind(this)
  }
  updatePage(){
    this.props.changePage("post")
  }
  render () {
    return (
      <div className="footer">
        <div className="tab">
          <button className="tablinks" >Home</button>
          <button className="tablinks" onClick={this.updatePage}>Post</button>
          <button className="tablinks" >Profile</button>
        </div>
      </div>
    )
  }
}
