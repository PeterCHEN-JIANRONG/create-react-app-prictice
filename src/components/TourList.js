import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const tourUrl = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c';

export function TourList() {
  const [tours, setTours] = useState([]);

  useEffect(()=>{
    axios.get(tourUrl).then(res=>{
      const data = res.data.data.XML_Head.Infos.Info.splice(0,20); // 取10筆
      console.log(data);
      setTours(data);
    }).catch(err=>{
      console.log(err.message);
    })
    
  },[]);

  

  return (
    <>
      <h2>旅遊列表</h2>
      <ul>
        {
          tours.length? tours.map((item,i) => {
            return <li key={i} className="h4 mb-2"><Link to={`/tour/${item.Id}`}>{item.Name}</Link></li>
          }):(
          <li className="h4 d-flex align-items-center gap-2">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="m-0">載入中...</p>
          </li>)
        }
      </ul>
    </>
  );
}
