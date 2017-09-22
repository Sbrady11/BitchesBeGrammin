class NewForm extends React.Component {
  constructor() {
    super();
    this.uploadPicture = this.uploadPicture.bind(this)
  };
  uploadPicture(e) {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = function(event){
        $.ajax({
            url:'http://localhost:3000/photos',
            post: 'POST',
            data: { photo: {
              photo: $('#photo').val(),
              caption: $('#caption').val()
            }}
          }).done(function(response){
            alert("I'm done")
            // $fileInput = $('#poster');
            // reader.readAsDataURL($fileInput[0].files[0]);
          })
        };
      };

  render() {
    const { handleSubmit, handleChange, newPhoto } = this.props
    return(
      <form onSubmit={this.uploadPicture} id="photo-form">
        <div id="new-post-header"> New Post </div>
        <input id="photo" type="file" ref='myImage'/>
        <input type="text" id='caption' ref='myCaption'/>
        <input type="submit" value="Post"/>
      </form>
    );



  }
}
