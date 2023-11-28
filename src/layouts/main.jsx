import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from "../components/";
function main() {
  return (
      <div className="d-flex flex-column flex-grow-1 main-block">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default main
