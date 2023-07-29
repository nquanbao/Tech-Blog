const createNewComment = async (event) => {
    event.preventDefault();
  
    const discription = document.querySelector('#comment').value.trim();
    const id = event.target.getAttribute('data-id');

    if (discription) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({discription}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#submitBtn')
  .addEventListener('click', createNewComment);