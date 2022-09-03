import { Link, Outlet } from "react-router-dom";

export function Tour() {
  return (
    <>
      <h1 className="text-center">高雄旅遊網</h1>
      <ul className="d-flex justify-content-center h4 list-unstyled gap-4">
        <li><Link to="/tour">所有列表</Link></li>
        <li><Link to="/tour/tourpage1">分頁一</Link></li>
        <li><Link to="/tour/tourpage2">分頁二</Link></li>
        <li><Link to="/">回首頁</Link></li>
      </ul>
      <Outlet />
    </>
  );
}
