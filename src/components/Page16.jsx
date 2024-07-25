import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page16 = () => {
  return (
    <section className="w-full h-screen bg-red-900 px-5 py-10">
      <div className="relative w-full h-[450px] bg-slate-800 shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            მე შენ გაგიჟებამდე მიყვარხარ.
          </p>
        </div>
        <div className="w-full h-[110px] absolute bottom-0 flex items-center justify-around">
          <Link to="/page15">
            <button className="w-[110px] h-[60px] bg-slate-500 text-white text-2xl font-semibold flex items-center justify-center rounded-xl shadow-md shadow-black">
              <IoMdArrowRoundBack className="text-3xl" /> Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page16;
