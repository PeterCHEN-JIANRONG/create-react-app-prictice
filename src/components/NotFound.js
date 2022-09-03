import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h2>你的網址出錯囉！</h2>
      <Link to="/">Home</Link>
    </>
  );
}
