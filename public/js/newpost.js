const createNewPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title-post').value;
    const content = document.querySelector('#content-post').value;
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/users');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#submitBtn')
  .addEventListener('click', createNewPost);