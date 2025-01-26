document.querySelectorAll(".questions").forEach((question) => {
  question.addEventListener("click", function () {
    const showContent = this.nextElementSibling;
    const icon = this.querySelector("i");

    showContent.classList.toggle("active");

    icon.classList.toggle("rotate");
  });
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    console.log("Toggle is ON");
  } else {
    console.log("Toggle is OFF");
  }
});

document.getElementById("toggle").addEventListener("change", function () {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  togglePriceAndText(box1, 24, 17, "Billed yearly");
  togglePriceAndText(box2, 39, 32, "Billed yearly");
  togglePriceAndText(box3, 79, 52, "Billed yearly");
});

function togglePriceAndText(box, originalPrice, newPrice, additionalText) {
  const priceElement = box.querySelector(".price .num");
  const textElement = box.querySelector(" .price .additional-text");

  if (document.getElementById("toggle").checked) {
    priceElement.innerText = newPrice; // Change to new price when checkbox is checked
    textElement.innerText = additionalText; // Add custom text
  } else {
    priceElement.innerText = originalPrice; // Reset to original price when unchecked
    textElement.innerText = ""; // Remove the custom text
  }
}
document.querySelectorAll(".dropdown-section-one li").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    // Hide all content
    document.querySelectorAll(".template-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Ensure we are getting the correct <li> element
    const liElement = event.currentTarget; // Use currentTarget to ensure we select the <li>
    const contentId = liElement.getAttribute("data-content");

    // Show the corresponding content
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
      contentToShow.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon"); // Select hamburger icon
  const navLinks = document.querySelector(".header-nav"); // Select the nav menu
  const buttonsContainer = document.querySelector(".buttons"); // Original button container
  const buttons = buttonsContainer.querySelectorAll("button"); // Select all buttons inside the container

  // Add a click event listener to the hamburger menu
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle the nav menu visibility

    // Move buttons dynamically based on menu state
    if (navLinks.classList.contains("active")) {
      buttons.forEach((button) => {
        if (!navLinks.contains(button)) navLinks.appendChild(button); // Append buttons to nav menu
      });
    } else {
      buttons.forEach((button) => {
        if (!buttonsContainer.contains(button))
          buttonsContainer.appendChild(button); // Move back
      });
    }
  });

  // Optional: Handle screen resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Always move buttons back to the original container for larger screens
      buttons.forEach((button) => {
        if (!buttonsContainer.contains(button))
          buttonsContainer.appendChild(button);
      });
      navLinks.classList.remove("active"); // Hide the nav menu
    }
  });
});

// document.querySelector(".menu-icon").addEventListener("click", () => {
//   const navLinks = document.querySelector(".header-nav");
//   navLinks.classList.toggle("show");
// });

// // Select the hamburger menu and nav links
// const menuIcon = document.querySelector(".menu-icon");
// const navLinks = document.querySelector(".header-nav");

// // Add a click event listener to toggle the menu
// menuIcon.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const navLinks = document.querySelector(".header-nav");
//   const buttonsContainer = document.querySelector(".buttons"); // Select the existing buttons container
//   const buttons = buttonsContainer.querySelectorAll("button"); // Get both buttons

//   menuIcon.addEventListener("click", () => {
//     // Toggle the nav menu
//     navLinks.classList.toggle("active");

//     // Check if the buttons are already inside the menu
//     if (navLinks.classList.contains("active")) {
//       buttons.forEach((button) => {
//         navLinks.appendChild(button); // Move buttons into the dropdown
//       });
//     } else {
//       buttons.forEach((button) => {
//         buttonsContainer.appendChild(button); // Move buttons back to original position
//       });
//     }
//   });

//   // Optional: Handle resizing to move buttons back if needed
//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 768) {
//       buttons.forEach((button) => {
//         buttonsContainer.appendChild(button); // Move buttons back for larger screens
//       });
//     }
//   });
// });
