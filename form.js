document.getElementById('formFeedback').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const category = document.getElementById('category').value.trim();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!category || !name || !message) {
      alert('Please complete all fields before submitting.');
      return;
    }
  
    alert('Thank you! Your feedback has been submitted.');
    this.reset();
  });
  