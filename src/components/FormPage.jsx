import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    if (firstName.toLowerCase() === "mariam") {
      navigate("/page1");
    }
  };

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <section className="w-full h-screen bg-slate-600 flex justify-center px-10 py-20">
      <form
        onSubmit={formHandler}
        className="w-[300px] h-[400px] p-5 bg-slate-200 border-4 border-yellow-300 rounded-lg flex flex-col items-center"
      >
        <h1 className="text-lg font-semibold mb-16 mt-10 text-center">
          წერილის სანახავად ჩაწერე შენი სახელი (ინგლისურად).
        </h1>
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First Name"
          className="w-full text-lg p-3 mb-5"
          onChange={(e) => handleNameChange(e)}
        />
        <button
          type="submit"
          className="w-40 h-16 bg-red-700 text-white font-semibold text-lg rounded-lg"
        >
          გაგრძელება
        </button>
      </form>
    </section>
  );
};

export default FormPage;
