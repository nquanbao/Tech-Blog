const UpdatePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-post').value.trim();
    const content = document.querySelector('#content-post').value.trim();
    if(event.target.hasAttribute('data-id')){
      if (title && content) {
        const id = event.target.getAttribute('data-id');
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
    }
  };

  document
  .querySelector('#updateBtn')
  .addEventListener('click', UpdatePost);