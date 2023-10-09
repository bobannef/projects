import React from 'react'
import { BikeCardCont } from './BikeCardCont'


interface Props {
  onGenderFilter: (gender:string) => void
  onBrandFilter: (brand:string) => void
  onShowAll:() => void
}

export const Filters = ({onGenderFilter, onBrandFilter, onShowAll}:Props) => {

  return (

    <div className='pt-5'>
          <div className='filter-titles'>
                <div className='row'>
                   <div className='col-12'>
                     <h1 className='pl-3'>Bikes</h1>
                   </div>
              </div>
               <div className='row'>
                  <div className='col-12'>
                    <h4 className='pl-3'>Filter by:</h4>
                  </div>
               </div>
              <div className='row'>
                 <div className='col d-flex justify-content-between'>
                    <button className='text-warning btn btn-outline-light' onClick={() => onShowAll()}>Show All</button>
                     <span className="badge badge-pill badge-warning text-light">63</span>
                 </div>
             </div>
             <hr/>
          </div>
          <div className='filter-titles'>
                <div className='row'>
                   <div className='col-12'>
                     <h5 className='pl-3'>Gender</h5>
                   </div>
              </div>
               <div className='row'>
                  <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onGenderFilter('MALE')}>Male</button>
                    <span className="badge badge-pill badge-secondary text-light">43</span>
                  </div>
               </div>
              <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onGenderFilter('FEMALE')}>Female</button>
                     <span className="badge badge-pill badge-secondary text-light">20</span>
                 </div>
             </div>
             <hr/>
          </div>

          <div className='filter-brand'>
                <div className='row'>
                   <div className='col-12'>
                     <h5 className='pl-3'>Brand</h5>
                   </div>
              </div>
               <div className='row'>
                  <div className='col d-flex justify-content-between'>
                    <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('LE GRAND BIKES')}>LE GRAND BIKES</button>
                    <span className="badge badge-pill badge-secondary text-light">7</span>
                  </div>
               </div>
              <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('KROSS')}>KROSS</button>
                     <span className="badge badge-pill badge-secondary text-light">14</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                      <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('EXPLORER')}>EXPLORER</button>
                     <span className="badge badge-pill badge-secondary text-light">8</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('VISITOR')}>VISITOR</button>
                     <span className="badge badge-pill badge-secondary text-light">8</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('PONY')}>PONY</button>
                     <span className="badge badge-pill badge-secondary text-light">2</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('FORCE')}>FORCE</button>
                     <span className="badge badge-pill badge-secondary text-light">2</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('E-BIKES')}>E-BIKES</button>
                     <span className="badge badge-pill badge-secondary text-light">7</span>
                 </div>
             </div>
             <div className='row'>
                 <div className='col d-flex justify-content-between'>
                     <button className='text-dark btn btn-outline-light' onClick={() => onBrandFilter('IDEAL')}>IDEAL</button>
                     <span className="badge badge-pill badge-secondary text-light">15</span>
                 </div>
             </div>
          
          </div>  
    
  </div>
  )
}
