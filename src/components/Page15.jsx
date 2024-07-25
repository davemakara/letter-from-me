import ButtonsBox from "./page-buttons/ButtonsBox";

const Page15 = () => {
  return (
    <section className="w-full h-screen bg-[#A94438] px-5 py-10">
      <div className="relative w-full h-[450px] bg-[#1F2544] rounded-sm shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            ამიტომ ვიფიქრე, ვიფიქრე და ეს წერილი მოვიფიქრე, რომელიც შემდეგნაირად
            მთავრდება:
          </p>
        </div>
        <ButtonsBox prev="/page14" next="/page16" />
      </div>
    </section>
  );
};

export default Page15;
