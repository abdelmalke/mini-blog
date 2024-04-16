document.getElementById("blogPostForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("image").files[0]; 


    var reader = new FileReader();
    reader.onload = function(event) {
        var imageData = event.target.result; 
        
        var blogPost = {
            title: title,
            description: description,
            image: imageData 
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
function deleteBlogPost(index) {
    var blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
    blogPosts.splice(index, 1);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    displayBlogPosts(blogPosts);
}



