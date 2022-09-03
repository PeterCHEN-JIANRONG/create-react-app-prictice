import { Link, useNavigate  } from "react-router-dom";

function FAQ() {
  let navigate = useNavigate();
  return (
    <div className="text-center">
      <main>
        <h2>FAQ</h2>
      </main>
      <nav className="d-flex gap-5 justify-content-center">
        <Link to="/" className="h3">Home</Link>
        <input type="button" className="btn btn-primary" value="回首頁" onClick={(e)=>{
          navigate('/');
        }}/>
      </nav>
    </div>
  );
}

export default FAQ;