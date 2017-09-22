class NewForm extends React.Component {
  render() {
    const { handleSubmit, handleChange, newPhoto } = this.props
    return(
      <form onSubmit={handleSubmit} id="photo-form">
        <div id="new-post-header"> New Post </div>
        <textarea onChange={handleChange} id="new-photo" name="photo" value={newPhoto}></textarea>
        <input type="submit" value="Post"/>
      </form>
    );
  }
}