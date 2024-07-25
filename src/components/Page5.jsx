import ButtonsBox from "./page-buttons/ButtonsBox";

const Page5 = () => {
  return (
    <section className="w-full h-screen bg-[#A94438] px-5 py-10">
      <div className="relative w-full h-[450px] bg-[#1F2544] rounded-sm shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            მაგ ღამეს ჩვენი პირველი კოცნაც იყო :))))
          </p>
        </div>
        <ButtonsBox prev="/page4" next="/page6" />
      </div>
    </section>
  );
};

export default Page5;
