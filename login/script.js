
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Get the input values
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Perform authentication (this is a simple hardcoded example)
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // You can redirect the user to another page or perform other actions here
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
