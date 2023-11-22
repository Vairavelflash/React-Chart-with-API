import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center ">
      <p className="text-white text-8xl">404 Page Not Found</p>
      <div className="mt-5 gap-5">
        <button onClick={() => navigate('/home')}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Home
        </button>
        <button onClick={() => navigate('/')}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Error;
