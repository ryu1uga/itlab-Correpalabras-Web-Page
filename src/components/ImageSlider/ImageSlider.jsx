import { useState, useEffect } from "react";
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const changeSlide = (newIndex) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 100);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    changeSlide(newIndex);
  };

  const goToSlide = (slideIndex) => {
    changeSlide(slideIndex);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div 
      className="slider-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.length > 1 && (
        <>
          <button 
            onClick={goToPrevious} 
            className="slider-arrow slider-arrow-left"
            aria-label="Anterior imagen"
          >
            ❰
          </button>
          <button 
            onClick={goToNext} 
            className="slider-arrow slider-arrow-right"
            aria-label="Siguiente imagen"
          >
            ❱
          </button>
        </>
      )}
      
      <div 
        className={`slider-slide ${isChanging ? 'slider-slide-changing' : ''}`}
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      />

      {slides.length > 1 && (
        <div className="slider-dots">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`slider-dot ${slideIndex === currentIndex ? 'active' : ''}`}
              aria-label={`Ir a imagen ${slideIndex + 1}`}
            >
              ●
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;