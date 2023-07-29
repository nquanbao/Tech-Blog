const createNewPost = async (event) => {
    event.preventDefault();
  
    
    const title = document.querySelector('#title-post').value.trim();
    const content = document.querySelector('#content-post').value.trim();
  
    if (title && content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
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
  };

  document
  .querySelector('#submitBtn')
  .addEventListener('click', createNewPost);