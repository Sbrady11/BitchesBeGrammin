class App extends React.Component {
  render () {
    const person = {
      avatar: "https://media.giphy.com/media/KI01DytlVPEw8/giphy-facebook_s.jpg",
      username: "bobo1: ",
      bio: "HEY NOW"
    }
    return (
      <Header data={person}/>
    )
  }
}
