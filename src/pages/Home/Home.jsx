import { useState } from 'react';
import './Home.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';
import imagen1 from './imagen1.jpg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import portada_video from './portada-video.jpg';

function Home() {
  const ventajasVideoId = "11czuuoMXGJ_XAWU6TPx1vCndsfLjQX4j";
  const [videoLoaded, setVideoLoaded] = useState(false);

  const slides = [
    { url: imagen1, title: "imagen1" },
    { url: imagen2, title: "imagen2" },
    { url: imagen3, title: "imagen3" },
  ];

  return (
    <div className="home-page">
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
      
      <div className="main-video-section">
        <h3>Mira cómo funciona y descubre sus ventajas pedagógicas</h3>
        <div className="centered-video-wrapper">
          <div className="video-container">
            {!videoLoaded && (
              <div 
                className="video-thumbnail"
                onClick={() => setVideoLoaded(true)}
              >
                <img
                  src={portada_video}
                  alt="Miniatura del video"
                />
                <div className="play-button">
                  <span>▶</span>
                </div>
              </div>
            )}
            {videoLoaded && (
              <iframe
                title="Video Correpalabras"
                src={`https://drive.google.com/file/d/${ventajasVideoId}/preview`}
                allow="autoplay"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
      
      <TestimonialSlider />
    </div>
  );
}

export default Home;