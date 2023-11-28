import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const SliderDental = () => {
  const [images, setImages] = useState([]);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const importImages = async () => {
      const imageContext = import.meta.glob('../../assets/img/dental/*.jpg');
      const imagePaths = Object.values(imageContext);
      const imageImports = await Promise.all(imagePaths.map((path) => path()));

      setImages(imageImports);
    };

    importImages();
  }, []);

  return (
    <div className='d-flex justify-content-center flex-column align-items-center w-100 py-5 my-4'>
      <h2>{currentLanguage === 'EN' ? 'Our Hospital' : 'Наша Клиника'}</h2>
              <div className='w-100 d-flex justify-content-center mb-4'>
          <hr className='d-flex w-25'/>
        </div>     
        <div id="dentalExample" className="carousel slide text-center carousel-fade">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div className={`carousel-item ${index == 0 && 'active'}`} key={index}>
                <img className='w-50' key={index} src={image.default} alt={`Example ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#dentalExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#dentalExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

    </div>
  );
};

export default SliderDental;
