import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default function ProductTile({product}) {

  return (
    <>
    <Link to={"/product/" + product.id}>
        <div class="inline-block w-40 m-4">
            <div class="flex justify-center items-center w-40 h-40 justify-center border-solid border-2 border-grey-600 rounded-md">
                <img src={product.image} class="h-5/6"/>
            </div>
        <p class="text-s truncate text-slate-600">{product.title}</p>
        <p class="text-xs truncate text-slate-600">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        </div>
    </Link>
    </>
  );
}
