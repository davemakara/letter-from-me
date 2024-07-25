import ButtonsBox from "./page-buttons/ButtonsBox";

const Page14 = () => {
  return (
    <section className="w-full h-screen bg-red-900 px-5 py-10">
      <div className="relative w-full h-[450px] bg-slate-800 shadow-lg shadow-black text-white text-lg flex flex-col items-center">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            მაგრამ იმასაც კარგად ვხვდები, რომ 3 თვე ძალიან დიდი დროა. მაინც ვერ
            გავძლებ და მაინც მომიწევს ჩემი სურვილის საწინააღმდეგოდ წასვლა
            (შეგხვდე და პირადად გითხრა).
          </p>
        </div>
        <ButtonsBox prev="/page13" next="/page15" />
      </div>
    </section>
  );
};

export default Page14;
