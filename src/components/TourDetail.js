import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

import axios from "axios";
const tourUrl = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c';

export function TourDetail(){

  const {Id} = useParams();
  const [tour, setTours] = useState(null);

  useEffect(()=>{
    console.log('打旅遊景點API');
    console.log(Id);
    axios.get(tourUrl).then(res=>{
      const data = res.data.data.XML_Head.Infos.Info.splice(0,20); // 取10筆
      setTours(...data.filter(item=>item.Id === Id));
    }).catch(err=>{
      console.log(err.message);
    })
    
  },[Id]);

  return (

        tour? <div>
                <h2 className="text-center py-4">旅遊詳細頁 - 動態路由</h2>
                <h3>{tour.Name}</h3>
                <p>{tour.Description}</p>
                <img src={tour.Picture1} alt="" />
              </div>
      :
          <div className="h4 d-flex align-items-center gap-2">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="m-0">載入中...</p>
          </div>

  ); 
}

