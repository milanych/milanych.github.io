import React from 'react'
import { Routes, Route } from 'react-router-dom';
import '../src/assets/css/App.css'
import * as Pages from "./pages";
import * as Layouts from "./layouts";
import { LanguageProvider } from './contexts/LanguageContext';

function App() {

  return (
  <LanguageProvider>
    <Routes>
      <Route path="/" element={<Layouts.main />}>
        <Route index element={<Pages.MainPage />} />
        <Route path='price' element={<Pages.PriceList />} />
        <Route path='contacts' element={<Pages.ContactsPage />} />
        <Route path='gallery' element={<Pages.GalleryPage />} />
        <Route path='about' element={<Pages.AboutPage />} />
      </Route>
    </Routes>
  </LanguageProvider>  

  )
}

export default App
