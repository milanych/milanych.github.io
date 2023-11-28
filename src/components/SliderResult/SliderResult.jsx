import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';


const SliderResult = () => {
  const { currentLanguage } = useLanguage();

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const importImages = async () => {
      const imageContext = import.meta.glob('../../assets/img/result/example-*.jpg');
      const imagePaths = Object.values(imageContext);
      const imageImports = await Promise.all(imagePaths.map((path) => path()));
      setImages(imageImports);
      setIsLoading(false)
    };
    importImages();
  }, []);

  return (
    <div className='d-flex justify-content-center flex-column align-items-center w-100 pb-5 my-4'>
      <h2>{currentLanguage === 'EN' ? 'Best Dentists Pictures' : 'О нас'}</h2>
        <div className='w-100 d-flex justify-content-center mb-4'>
          <hr className='d-flex w-25'/>
        </div>     
      <div className='col-sm-6 col-12'>
        <div id="resultExample" className="carousel slide text-center carousel-fade">
          <div className="carousel-inner">
            {isLoading ? 
            <div style={{'height':'500px'}}  className='d-flex flex-column justify-content-center align-items-center'>
        <div className="spinner-border mb-3" role="status">
  
  </div>
    <div className='d-flex justify-content-center align-items-center'>Loading...</div>
    </div>
            :
            images.map((image, index) => (
              <div className={`carousel-item ${index == 0 && 'active'}`} key={index}>
                <img className='w-50' key={index} src={image.default} alt={`Example ${index + 1}`} />
              </div>
            ))
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#resultExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#resultExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default SliderResult;
