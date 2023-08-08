const createNewComment = async (event) => {
    event.preventDefault();
  
    const discription = document.querySelector('#comment').value.trim();
    const commentName = event.target.getAttribute('name')
    if (event.target.hasAttribute('data-id')) {
      const post_id = event.target.getAttribute('data-id');
    if (discription && post_id && commentName) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({discription,post_id,commentName}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace(`/posts/${post_id}`);
      } else {
        alert(response.statusText);
      }
    }
  }
  };

  document
  .querySelector('#submitBtn')
  .addEventListener('click', createNewComment);