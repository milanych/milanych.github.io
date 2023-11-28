import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext';


function Implants() {
  const { currentLanguage } = useLanguage();
  return (
    <>
    <div className='row mt-5'>
          <div className="col-12">
            <h3>{currentLanguage === 'EN' ? 'Implants' : 'Импланты'}</h3>
          </div>
        </div>
        <div className='row'>
          <div className="col-6">Turkish</div>
          <div className="col-6">£250</div>
        </div>
        <div className='row'>
          <div className="col-6">Korean, Osstem</div>
          <div className="col-6">£350</div>
        </div>
        <div className='row'>
          <div className="col-6">Korean, Megagen</div>
          <div className="col-6">£410</div>
        </div>
        <div className='row'>
          <div className="col-6">Switzerland, Swiss</div>
          <div className="col-6">£400</div>
        </div>
        <div className='row'>
          <div className="col-6">Switzerland, Nobel-Astra</div>
          <div className="col-6">£630</div>
        </div>
        <div className='row'>
          <div className="col-6">Switzerland, Straumann</div>
          <div className="col-6">£950</div>
        </div>
        
        </>
  )
}

export default Implants
