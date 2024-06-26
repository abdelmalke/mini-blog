let var1 = document.getElementById("blogPostForm")
var1.addEventListener("submit", function (event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("image").files[0];

    var reader = new FileReader();
    reader.onload = function (event) {
      var imageData = event.target.result;

      var blogPost = {
        title: title,
        description: description,
        image: imageData,
      };

      var existingBlogPosts = localStorage.getItem("blogPosts");

      if (existingBlogPosts) {
        existingBlogPosts = JSON.parse(existingBlogPosts);
      } else {
        existingBlogPosts = [];
      }

      existingBlogPosts.push(blogPost);

      localStorage.setItem("blogPosts", JSON.stringify(existingBlogPosts));

      document.getElementById("blogPostForm").reset();

      alert("Blog post submitted successfully!");

      displayBlogPosts(existingBlogPosts);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  });