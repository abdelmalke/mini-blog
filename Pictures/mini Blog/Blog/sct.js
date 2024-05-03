

var searsha = document.getElementById("searsh");
var searshdiv = document.getElementById("result");

// Clear previous search results function
function clearSearchResults() {
  searshdiv.innerHTML = " ";
}

// Event listener for keyup on the search input field
searsha.addEventListener("change", function () {
  var searshValue = searsha.value.toLowerCase(); // Convert search input to lower case
  var postblog = localStorage.getItem("blogPosts");

  if (postblog) {
    var posts = JSON.parse(postblog); // Parse the JSON string into an array
    clearSearchResults(); // Clear previous search results
    posts.forEach(function (post) {
      // Iterate over each post
      if (post.title.toLowerCase().includes(searshValue)) {
        // Case-insensitive substring match
        var html = `<li>${post.title}</li>`;
        searshdiv.style.display = "block";
        console.log(html); 
        searshdiv.insertAdjacentHTML("beforeend", html); // Insert HTML into the search results div
      }
    });
  }
});
