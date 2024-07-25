import { Link } from "react-router-dom";

import { IoMdArrowDroprightCircle } from "react-icons/io";

const Page1 = () => {
  return (
    <section className="w-full h-screen bg-[#405D72] px-5 py-10">
      <div className="relative w-full h-[450px] bg-[#5F264A] shadow-lg shadow-black text-white text-xl p-5 flex flex-col items-center">
        <p className="py-5 font-semibold text-center w-full">
          კი ჩემო მარწყვუნა, სხვა სახელი არც იმუშავებდა
        </p>
        <p className="py-5 font-semibold text-center w-full">
          🍓🍓🍓🍓🍓🍓🍓🍓🍓
        </p>
        <p className="py-5 font-semibold text-center w-full">
          წამო, რაღაცები გავიხსენოთ:)
        </p>
        <Link to="/Page2">
          <div className="p-1 rounded-full overflow-hidden border-4 border-white mt-12">
            <IoMdArrowDroprightCircle className="text-6xl" />
          </div>
        </Link>

        {/* <div className="w-full h-[80px] bg-green-400 absolute bottom-0 flex items-center">
          <button className="w-1/2 h-full bg-slate-500 text-white text-lg font-semibold">
            უკან
          </button>
          <button className="w-1/2 h-full bg-green-500 text-white text-5xl font-semibold">
            <FaRegArrowAltCircleRight />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Page1;
