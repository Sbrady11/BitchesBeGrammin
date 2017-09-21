class App extends React.Component {
  constructor(){
    super()
    this.state = {
      viewPage: "home"
    }
    changePage = (event) =>{
      this.setState ({viewPage: event})
    }
  }
  render () {
    const person = {
      avatar: "https://media.giphy.com/media/KI01DytlVPEw8/giphy-facebook_s.jpg",
      username: "bobo1: ",
      bio: "HEY NOW"
    }
    return (
      <div>
        <Top/>
        <Header data={person}/>
        <Footer/>
      </div>
    )
  }
}
