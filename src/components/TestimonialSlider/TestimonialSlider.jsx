import { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      text: "Es muy útil porque mejora la fluidez y comprensión",
      author: "Gloria Arce",
      role: "Profesora"
    },
    {
      text: "Me ayudó a mejorar la rapidez y conocer palabras",
      author: "Isabella Aliaga",
      role: "Escolar"
    },
    {
      text: "Les recomiendo que lo descarguen para que lean mejor",
      author: "Samanta Mendoza",
      role: "Escolar"
    },
    // {
    //   text: "Una excelente herramienta para fomentar la lectura en casa",
    //   author: "Carlos Mendoza",
    //   role: "Padre de Familia"
    // },
    // {
    //   text: "Ha ayudado mucho a mejorar la comprensión lectora de mis alumnos",
    //   author: "María González",
    //   role: "Profesora"
    // },
    // {
    //   text: "Me encanta leer los cuentos en mi celular",
    //   author: "Diego Ramírez",
    //   role: "Escolar"
    // }
  ];

  const getTotalPages = () => {
    return Math.ceil(testimonials.length / visibleCount);
  };

  const getCurrentPage = () => {
    return Math.floor(currentIndex / visibleCount);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth > 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth > 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    
    setCurrentIndex(prev => {
      const maxIndex = Math.max(0, testimonials.length - visibleCount);
      return Math.min(prev, maxIndex);
    });

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, [visibleCount]);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + visibleCount;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev - visibleCount;
      return nextIndex < 0 ? Math.max(testimonials.length - visibleCount, 0) : nextIndex;
    });
  };

  const goToPage = (pageIndex) => {
    const newIndex = pageIndex * visibleCount;
    setCurrentIndex(Math.min(newIndex, testimonials.length - visibleCount));
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + visibleCount);
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        {window.innerWidth > 1024 ? ("") : (
          <button
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Testimonio anterior"
          >
            ‹
          </button>
        )}
        <div className="testimonials-carousel">
          <div 
            className="testimonials-wrapper"
            style={{
              gridTemplateColumns: `repeat(${visibleCount}, 1fr)`
            }}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    {testimonial.author}
                    <span className="testimonial-role">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {window.innerWidth > 1024 ? ("") : (
          <button
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Siguiente testimonio"
          >
            ›
          </button>
        )}
      </div>
      {window.innerWidth > 1024 ? ("") : (
        <div className="carousel-dots">
          {[...Array(getTotalPages())].map((_, index) => (
            <button
              key={index}
              className={`dot ${getCurrentPage() === index ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;