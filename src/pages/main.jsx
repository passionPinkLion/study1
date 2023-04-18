import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <Link to="/a">
        <button>A</button>
      </Link>
      <Link to="/b">
        <button>B</button>
      </Link>
      <Link to="/c">
        <button>C</button>
      </Link>
      <Link to="/d">
        <button>D</button>
      </Link>
      <Link to="/sukhun">
        <button>석훈</button>
      </Link>
    </div>
  );
}
export default Main;
