import ButtonsBox from "./page-buttons/ButtonsBox";

const Page2 = () => {
  return (
    <section className="w-full h-screen bg-[#A94438] px-5 py-10">
      <div className="relative w-full h-[450px] bg-[#1F2544] shadow-lg shadow-black text-white text-lg flex flex-col items-center rounded-sm">
        <div className="w-full h-[340px] flex items-center p-5">
          <p className="text-center italic font-semibold text-xl w-full">
            პირველად იყო გუდვილი❤ პირველივე გამოხედვაზე რომ დამშოკე და ის ჩანთა
            კიდევ უფრო დამიმძიმე:)) ალბათ როგორ ვინანებდი რომ არ დაგლაპარაკებოდი
            მანდ..
          </p>
        </div>
        <ButtonsBox prev="/page1" next="/page3" />
      </div>
    </section>
  );
};

export default Page2;
