import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext';

function Veneers() {
  const { currentLanguage } = useLanguage();
  return (
    <>
    <div className='row mt-5'>
          <div className="col-12">
            <h3>{currentLanguage === 'EN' ? 'Veneers and Crowns' : 'Виниры и Коронки'}</h3>
          </div>
        </div>
        <div className='row'>
          <div className="col-6">MeralFsed Porcelain Crowns</div>
          <div className="col-6">£100</div>
        </div>
        <div className='row'>
          <div className="col-6">Zirconium Crowns</div>
          <div className="col-6">£160</div>
        </div>
        <div className='row'>
          <div className="col-6">F_may Fil Veneers</div>
          <div className="col-6">£210</div>
        </div>
        <div className='row'>
          <div className="col-6">E-max Veneers</div>
          <div className="col-6">£230</div>
        </div>
        </>
  )
}

export default Veneers
