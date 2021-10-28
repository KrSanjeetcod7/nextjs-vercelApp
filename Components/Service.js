import React, {useState} from 'react';
import serviceApi from '../pages/api/serviceApi';
import Link from 'next/link';

const Service = () => {
    const [serviceData, setServiceData] = useState(serviceApi);
    return (
        <>
           <section className="service-main-container">
               <div className="container service-container">
                   <h1 className="main-heading text-center fw-bold">How To Send Money</h1>
                  <div className="row">
                      {
                          serviceData.map((curElem) =>{
                              const {id, logo, title, info, btn} = curElem;
                              return(
                                  <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container_subdiv mb-4 ml-3" key={id}>
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className="sub-heading">{title}</h2>
                                    <p className="main-hero-para">{info}</p>
                                    <Link href='/'>
                                    <button className={btn}>Start Now &rarr;</button>
                                    </Link>
                                </div>
                                  </>
                              )
                          })
                      }
                     
                  </div>
               </div>
               </section> 
        </>
    )
}

export default Service;
