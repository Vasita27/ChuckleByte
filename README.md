Product Launch Website Documentation
Project Overview
This project is a product launch page for the iPhone 11, featuring various UI elements and interactive components, such as image galleries, color selectors, a 360-degree view, customer reviews, and a contact form. The page is designed with animations to enhance the user experience.
Technologies Used
React: For building the user interface components.
CSS: For styling the components and adding animations.
FontAwesome: For incorporating icons in the UI.
Email Functionality: For handling user inquiries through email.
File Structure
.
├── node_modules/            # Contains all the Node.js packages and dependencies
│
├── public/
│   ├── phone/               # Contains all the images for the product
│   │   ├── image1.png
│   │   ├── image10.png
│   │   ├── image20.png
│   │   ├── image30.png
│   │   └── ...              # Additional images as needed
│   ├── favicon.ico          # Favicon for the website
│   ├── index.html           # The main HTML file served by React
│   ├── logo192.png          # App logo in 192x192 resolution
│   ├── logo512.png          # App logo in 512x512 resolution
│   ├── manifest.json        # Web app manifest for Progressive Web App (PWA) support
│   └── robots.txt           # Instructions for web crawlers
│
├── src/
│   ├── App.css              # Styles for the main App component
│   ├── App.js               # Main React component where other components are rendered
│   ├── App.test.js          # Test file for the App component
│   ├── index.css            # Global styles for the application
│   ├── index.js             # Entry point for the React application
│   ├── logo.svg             # Logo image (SVG format)
│   ├── Product360View.css   # Styles for the Product360View component
│   ├── Product360View.js    # Component for the 360-degree view modal
│   ├── ProductLaunch.css    # CSS file for styling the product launch page
│   ├── ProductLaunch.js     # Main component for the product launch page
│   ├── reportWebVitals.js   # Utility for measuring performance in your app
│   └── setupTests.js        # Configuration for running tests
│
├── .gitignore               # Specifies files and directories to be ignored by Git
├── package-lock.json        # Automatically generated file for locking the dependency versions
├── package.json             # Contains metadata about the project and dependencies
└── README.md                # Project documentation file



Key Components
1. ProductPage Component
Description: This is the main component of the product launch page, containing all the UI elements, including images, pricing, color options, 360-degree view, and customer reviews.
Location: src/pages/ProductPage.js
Imports
React: Core library for building the UI.
FontAwesomeIcon: For displaying icons.
Product360View: Component for the 360-degree view modal.
CSS: ProductLaunch.css for styling the page.
State Variables
selectedImage: Tracks the currently displayed image.
isModalOpen: Controls the visibility of the 360-degree view modal.
selectedColor: Tracks the selected color of the product.
reviewName, reviewText, reviews, rating: Manage customer review input and display.


Key Features
Image Gallery: A series of thumbnail images that users can click to change the main display image.
Color Selector: Allows users to select different colors for the product, updating the displayed image accordingly.
360-Degree View: A modal that displays a 360-degree view of the product,opened by clicking the "View 360" button.
Customer Reviews: Users can submit reviews, including a name, review text, and star rating.
Email Inquiry Form: A form that allows users to send an inquiry email directly from the website.
2. Product360View Component
Description: Displays a 360-degree view of the product within a modal.
Location: src/components/Product360View.js
3. ProductLaunch.css
Description: Contains all the styles and animations used on the product launch page.
Location: src/styles/ProductLaunch.css
Key Styles
Image Sliding Animation:
.large-image img {
  animation: slideDown 1s ease-in-out forwards;
  transform: translateY(-100%);
  opacity: 0;
}

@keyframes slideDown {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}


Pricing Info Box Sliding Animation:
.info-box {
  animation: slideUp 1s ease-in-out forwards;
  transform: translateY(100%);
  opacity: 0;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

Button Hover Effects:
.preorder-button:hover,
.enquiry-button:hover {
  background-color: #004080;
  transition: background-color 0.3s ease;
}

"View 360" Button Animation:
.open-modal-button {
  animation: slideInLeft 1s ease-in-out forwards;
  transform: translateX(-100%);
  opacity: 0;
}

@keyframes slideInLeft {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

Box Zoom on Hover:
.technical-specifications:hover,
.product-features:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

Usage Instructions
Image Selection: Click on any thumbnail image to update the main product image.
Color Selection: Click on any color box to change the product color and update the main image accordingly.
360-Degree View: Click the "View 360" button to open the modal and view the product in 360 degrees.
Submit a Review: Fill out the review form with your name, review text, and rating, then click "Add Review" to submit.
Email Inquiry: Click the "Inquiry" button to send an email inquiry directly from the website.
Preorder: Click the "Preorder" button to reserve the product.
Icons
FontAwesome Eye Icon: Included in the "View 360" button for visual enhancement.
Import Statement:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
Usage:

<button className="open-modal-button" onClick={openModal}>
  <FontAwesomeIcon icon={faEye} /> View 360
</button>
Enhancements
Responsive Design: The layout is responsive and work well on different screen sizes.

