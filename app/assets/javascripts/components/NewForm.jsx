class NewForm extends React.Component {
  render() {
    const { handleSubmit, handleChange, newTweet } = this.props
    return(
      <form onSubmit={handleSubmit} id="photo-form">
        <textarea onChange={handleChange} id="new-photo" name="photo" value={newPhoto}></textarea>
        <input type="submit" value="Photo"/>
      </form>
    );
  }
}