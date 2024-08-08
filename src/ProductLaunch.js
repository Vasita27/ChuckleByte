// src/pages/ProductPage.js
import React, { useState } from 'react';
import './ProductLaunch.css'; // Adjust the path as needed
import Product360View from './Product360View';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
 // Adjust the path as needed

const images = [
  '/phone/first.png',
  '/phone/second.png',
  '/phone/third.png',
  '/phone/fourth.png',
];

const colors = [
  { name: 'Black', code: 'black' },
  { name: 'White', code: 'white' },
  { name: 'Turquoise', code: 'turquoise' },
  { name: 'Grey', code: 'grey' },
  // Add more colors as needed
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(`/phone/${color.code}.png`); // Ensure the path matches your image naming convention
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleClick = () => {
    const handleClick = () => {
        const subject = 'Inquiry from Your Website';
        const body = 'This is a pre-filled message from your website.';
        window.location.href = `mailto:chucklebytetechnologies@gmail.com?subject=${subject}&body=${body}`;
      };
  };
  function preorder(){
    alert("Your product has been reserved , checkout once it is avaialable.")
  }
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewName && reviewText) {
      setReviews([...reviews, { name: reviewName, text: reviewText, rating }]);
      setReviewName('');
      setReviewText('');
      setRating(0); 
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <div className="header">
      Discover the true nature of Innovation with iPhone11
      </div>
      <div className="page-container">
        <div className="content-box">
          <div className="product-page">
            <div className="image-list">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="large-image">
              <img src={selectedImage} alt="Selected" />
            </div>
            <div className="info-box">
              <p className='price'>Price: $799</p>
              <button className="preorder-button" onClick={preorder}>Preorder</button>
              <form action="mailto:chucklebytetechnologies@gmail.com" method="POST" enctype="text/plain" name="EmailForm">
              <input type='submit' className="enquiry-button" onClick={handleClick} value={"Inquiry"} /></form>
              <div className="color-selector">
                <p>Color: {selectedColor.name}</p>
                <div className="colors" >
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-box ${color.code === selectedColor.code ? 'selected' : ''}`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="product-details">
                <p>Brand: Apple</p>
                <p>Compatible Phone Models: iPhone 11</p>
                <p>Material: Titanium</p>
              </div>
            </div>
          </div>
          <button className="open-modal-button" onClick={openModal}>View 360 <FontAwesomeIcon icon={faEye} /></button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-button" onClick={closeModal} style={{backgroundColor:"#A79277"}}>Close</button>
            <Product360View />
          </div>
        </div>
      )}

      <div className="additional-info">
        <div className="technical-specifications">
          <h3>Technical Specifications</h3>
          <ul>
            <li>Display: 6.1-inch Liquid Retina HD</li>
            <li>Chip: A13 Bionic chip</li>
            <li>Camera: Dual 12MP Ultra Wide and Wide cameras</li>
            <li>Battery: Up to 17 hours of talk time</li>
            <li>Water Resistance: Rated IP68</li>
            <li>Operating System: iOS</li>
          </ul>
        </div>
        <div className="product-features">
          <h3>Product Features</h3>
          <ul>
            <li>Face ID for secure authentication</li>
            <li>Wireless charging</li>
            <li>Dual SIM (nano-SIM and eSIM)</li>
            <li>Available in various colors</li>
            <li>Support for MagSafe accessories</li>
            <li>Spatial audio with Dolby Atmos</li>
          </ul>
        </div>
      </div>

      <div className="reviews-section">
        <h3 style={{textAlign:"center", color:"#695234" , fontSize:"30px"}}>Customer Reviews</h3>
        <form className="review-form" onSubmit={handleReviewSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index)}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Add Review</button>
        </form>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-box">
              <div className="review">
                <h4>{review.name}</h4>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < review.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
