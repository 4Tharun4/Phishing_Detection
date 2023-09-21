
function getvalue(){
    const url = document.getElementById("websiteLink").value;
    
    if (isLoading) {
        return;
    }
    const loader = document.getElementById('loader');
    legitimacyResult.style.display = 'none';
    
    // Disable the Check button during the loading
    
    
    // Set isLoading to true to prevent multiple clicks during loading
    isLoading = true;
    // Delay for 5 seconds (5000 milliseconds) before executing the legitimacy check
    setTimeout(function () {
        // Replace this logic with your actual legitimacy checking logic
        // For this example, we'll assume it always returns 'legitimate' or 'phishing
        // Hide the loading animation
        loader.style.display = 'none';
    
        // Re-enable the Check button
        
    
        // Update the result message and classes based on the legitimacy result
    
        // Show the result area
        legitimacyResult.style.display = 'block';
    
        // Set isLoading back to false
    
    fetch ('http://127.0.0.1:5000/post', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          
        },
        
        body: `url=${url}`
      })
      
      .then(response => response.text())
      .then(data => {
          // alert(url)
          // alert(data)
        console.log('Server response:', data);
       
        if (data === "1") {
          
             
            Swal.fire({
                icon: 'error',
                title: 'This is  phishing  ',
                text: 'please don ot use ',
                
              })
        }
        else if (data === "-1") {
            
            Swal.fire({
                icon: 'warning',
                title: 'This is  phishing website ',
                text: 'This is not safe to open',
                
              })
    
        }else if (data === "0") {
            
             Swal.fire({
                icon: 'success',
                title: 'This is not phishing...',
                text: 'This   safe to open',
                
              })
            }
      });
      
      isLoading = false;
    }, 5000); // 5 seconds delay
    
    // Show the loading animation after a brief delay (e.g., 100 milliseconds)
    setTimeout(function () {
        loader.style.display = 'block';
    }, 100);
    
    
    }
    let isLoading = false; // Flag to track whether the loading animation is active// Flag to track whether the loading animation is active
    
        // If loading animation is already active, return early
       