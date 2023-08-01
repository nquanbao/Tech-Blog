const createNewComment = async (event) => {
    event.preventDefault();
  
    const discription = document.querySelector('#comment').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const post_id = event.target.getAttribute('data-id');
    if (discription && post_id) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({discription,post_id}),
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
  .querySelector('#submitBtn')
  .addEventListener('click', createNewComment);