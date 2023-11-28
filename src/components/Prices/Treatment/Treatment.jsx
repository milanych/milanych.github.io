import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext';

function Treatment() {
  const { currentLanguage } = useLanguage();
  return (
    <>
    <div className='row mt-5'>
          <div className="col-12">
            <h3>{currentLanguage === 'EN' ? 'Treatment' : 'Лечение'}</h3>
          </div>
        </div>
        <div className='row'>
          <div className="col-6">Filling</div>
          <div className="col-6">£65</div>
        </div>
        <div className='row'>
          <div className="col-6">Root canal treatment</div>
          <div className="col-6">£140</div>
        </div>
        <div className='row'>
          <div className="col-6">Tooth Extractions</div>
          <div className="col-6">£40</div>
        </div>
        <div className='row'>
          <div className="col-6">Surgical Extractions</div>
          <div className="col-6">£85</div>
        </div>
        <div className='row'>
          <div className="col-6">Bone Graft (quarter)</div>
          <div className="col-6">£190</div>
        </div>
        <div className='row'>
          <div className="col-6">Sinus Lift (quarter)</div>
          <div className="col-6">£190</div>
        </div>
        <div className='row'>
          <div className="col-6">Sedation</div>
          <div className="col-6">£200</div>
        </div>
        <div className='row'>
          <div className="col-6">Whitening Opalecence</div>
          <div className="col-6">£230</div>
        </div>
        <div className='row'>
          <div className="col-6">Cleaning</div>
          <div className="col-6">£60</div>
        </div>
        
        </>
  )
}

export default Treatment
