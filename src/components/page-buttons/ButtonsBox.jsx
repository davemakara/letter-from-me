import { Link } from "react-router-dom";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const ButtonsBox = ({ prev, next }) => {
  return (
    <div className="w-full h-[110px] absolute bottom-0 flex items-center justify-around">
      <Link to={prev}>
        <button className="w-[110px] h-[60px] bg-slate-500 text-white text-2xl font-semibold flex items-center justify-center rounded-xl shadow-md shadow-black">
          <IoMdArrowRoundBack className="text-3xl" /> Back
        </button>
      </Link>
      <Link to={next}>
        <button className="w-[110px] h-[60px] bg-green-500 text-white text-2xl font-semibold flex items-center justify-center rounded-xl shadow-md shadow-black">
          Next <IoMdArrowRoundForward className="text-3xl" />
        </button>
      </Link>
    </div>
  );
};

export default ButtonsBox;
