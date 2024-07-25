import ButtonsBox from "./page-buttons/ButtonsBox";

const Page4 = () => {
  return (
    <section className="w-full h-screen bg-[#A94438] px-5 py-10">
      <div className="relative w-full h-[450px] bg-[#1F2544] rounded-sm shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            შემდეგ ფილმი :) მანამდე კი ვარდი თავისი სადარბაზოს პერფორმანსით და
            შენი კოცნა ლოყაზე :)
          </p>
        </div>
        <ButtonsBox prev="/page3" next="/page5" />
      </div>
    </section>
  );
};

export default Page4;
