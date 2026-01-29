// Select all buttons
const buttons = document.querySelectorAll(".cta-button");

// Loop through each button
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Popup alert before redirect
    alert("Redirecting you to your free tool!");

    // Track clicks using localStorage
    let clickCount = localStorage.getItem("clickCount") || 0;
    clickCount++;
    localStorage.setItem("clickCount", clickCount);
    console.log(`Total clicks on all tools: ${clickCount}`);
  });
});
