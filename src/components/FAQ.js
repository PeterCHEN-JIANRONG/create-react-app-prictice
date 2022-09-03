import { Link, useNavigate  } from "react-router-dom";

function FAQ() {
  let navigate = useNavigate();
  return (
    <>
      <main>
        <h2>FAQ</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <input type="button" value="回首頁" onClick={(e)=>{
          navigate('/');
        }}/>
      </nav>
    </>
  );
}

export default FAQ;