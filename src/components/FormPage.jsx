import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    if (firstName.toLowerCase() === "მარწყვუნა") {
      navigate("/page1");
    } else {
      setErrorMessage(firstName);
    }
  };

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <section className="w-full h-screen bg-[#A94438] flex justify-center px-10 py-20">
      <form
        onSubmit={formHandler}
        className="w-[300px] h-[400px] p-5 bg-[#1F2544] border-2 border-white rounded-lg flex flex-col items-center text-white shadow-lg shadow-black"
      >
        <h1 className="text-lg font-semibold mb-16 mt-10 text-center">
          წერილის სანახავად ჩაწერე შენი სახელი.
        </h1>
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First Name"
          className="w-full text-lg p-3 mb-4 text-black"
          onChange={(e) => handleNameChange(e)}
        />
        <p
          className={`text-lg font-semibold mb-5 ${
            errorMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          არასწორი სახელია🙃
        </p>
        <button
          type="submit"
          className="w-40 h-16 bg-[#9A3B3B] text-white font-semibold text-lg rounded-lg"
        >
          გაგრძელება
        </button>
      </form>
    </section>
  );
};

export default FormPage;
