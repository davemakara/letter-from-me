import ButtonsBox from "./page-buttons/ButtonsBox";

const Page6 = () => {
  return (
    <section className="w-full h-screen bg-red-900 px-5 py-10">
      <div className="relative w-full h-[450px] bg-slate-800 shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            გადავირიეთ და შემდეგ ღამესვე იყო შემდეგი ღამე :) და ეგ ღამე იყო, რაც
            იყო :)
          </p>
        </div>
        <ButtonsBox prev="/page5" next="/page7" />
      </div>
    </section>
  );
};

export default Page6;
