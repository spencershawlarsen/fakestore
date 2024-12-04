import '../App.css';
import fakestore from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <>
    <div class="block w-full h-20">
        <Link to="/">
             <img src={fakestore} alt="FakeStore" class="w-48 m-4"/>
        </Link>
    </div>
    </>
  );
}
