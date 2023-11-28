import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
function Contacts() {
    const { currentLanguage } = useLanguage();

  return (
      <div className="container my-4 py-5 h-100" id="contacts">
    <div className='row'>
      <h2 className='text-center'>{currentLanguage === 'EN' ? 'Our Contacts' : 'Наши Контакты'}</h2>
        <div className='w-100 d-flex justify-content-center mb-4'>
          <hr className='d-flex w-25'/>
        </div>      
        <div className="col-sm-3 col-12 mb-sm-0 mb-5 d-flex align-items-center justify-content-start flex-column">
          <h4><i className="bi bi-whatsapp"></i> WhatsApp</h4>
          <span><a href="https://wa.me/905333324640">+905333324640</a></span>
        </div>
        <div className="col-sm-3 col-12 mb-sm-0 mb-5 d-flex align-items-center justify-content-start flex-column">
          <h4><i className="bi bi-telephone"></i> UK Phone</h4>
          <span><a href="tel:07908921218">07908921218</a></span>
        </div>
        <div className="col-sm-3 col-12 mb-sm-0 mb-5 d-flex align-items-center justify-content-start flex-column">
          <h4><i className="bi bi-facebook"></i> Facebook</h4>
          <span><a href="mailto:dentaldoorturkey@gmail.com">?</a></span>
        </div>
        <div className="col-sm-3 col-12 mb-sm-0 mb-5 d-flex align-items-center justify-content-start flex-column">
          <h4><i className="bi bi-envelope"></i> Email</h4>
          <span><a href="mailto:dentaldoorturkey@gmail.com">dentaldoorturkey@gmail.com</a></span>
        </div>
      </div>
    </div>
  )
}

export default Contacts
