document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = this.elements.email.value.trim();
    var password = this.elements.password.value.trim();
  
    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }
  
    var formData = {
      email: email,
      password: password
    };
  
    console.log(formData);
  
    this.reset();
  });
  