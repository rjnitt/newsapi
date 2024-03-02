import React, { useState } from "react";
import "./../App.css"; // Import your CSS file for styling

const SwipeUpPage = () => {
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleTouchStart = (event) => {
    const touchStartY = event.touches[0].clientY;
    setSwipeDirection(null);

    const handleTouchMove = (moveEvent) => {
      const touchEndY = moveEvent.touches[0].clientY;
      const distance = touchStartY - touchEndY;
      console.log("touchEndY" + touchEndY);
      console.log("touchStartY" + touchStartY);
      console.log("distance" + distance);
      if (distance > 100) {
        setSwipeDirection("up");
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
  };

  const handleTouchEnd = () => {
    if (swipeDirection === "up") {
      // Handle swipe up action here, such as showing content
      console.log("Swiped up!");
    }
  };

  return (
    <div
      className="swipe-up-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="content">
        <h1>Swipe Up Page</h1>
        <p>Swipe up to reveal more content...</p>
      </div>
    </div>
  );
};

export default SwipeUpPage;
