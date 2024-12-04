import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default function ProductPage() {

  return (
    <>
    <footer class="mt-auto">
    <div class="w-full  mx-auto p-3 bg-slate-50">
        <div class="sm:flex sm:items-center sm:justify-between">
          <nav class="w-full">
            <ul class="flex inline-block justify-center">
              <li class="m-4 text-blue-400">
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              </li>
              <li class="m-4 text-blue-400">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
              </li>
              <li class="m-4 text-blue-400">
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://google.com/" class="hover:underline">FakeStore</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  );
}
