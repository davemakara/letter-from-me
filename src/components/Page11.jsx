import ButtonsBox from "./page-buttons/ButtonsBox";

const Page11 = () => {
  return (
    <section className="w-full h-screen bg-red-900 px-5 py-10">
      <div className="relative w-full h-[450px] bg-slate-800 shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            და ძალიან მომენატრე.. მაგრამ მაგას კიდევ არაუშავდა, თურმე :)
          </p>
        </div>
        <ButtonsBox prev="/page10" next="/page12" />
      </div>
    </section>
  );
};

export default Page11;
