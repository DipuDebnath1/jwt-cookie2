import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center my-5">
        <div className="text-5xl font-semibold capitalize">
            <h2>logo</h2>
        </div>
        <ul className="flex gap-5">
            <li className="font-semibold text-xl">
                <Link to='/login'>Login</Link>
            </li>
            <li className="font-semibold text-xl">                
                <Link to='/signup'>Signup</Link>
            </li>
            {/* <li>Logout</li> */}
        </ul>
    </div>
  );
}

export default Navbar