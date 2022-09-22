import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Form = ({ setBill, setTip, setPeople }) => {
  return (
    <div className="w-full relative lg:w-[50%]">
      <form className="flex flex-col p-5">
        <label htmlFor="Bill" className="font-bold text-2xl text-[#00494d]">
          Bill
        </label>
        <input
          type="text"
          name="Bill"
          className="bg-[#f4fafa] p-3 text-right"
          onInput={(e) => {
            setBill(+e.target.value);
          }}
        />
        <img
          src={dollar}
          alt=""
          className="w-[15px] absolute top-[16%] left-[7%]"
        />
        <div className="tips-selection mt-5">
          <p className="font-bold text-2xl text-[#00494d] mb-5">
            Selected Tip %
          </p>
          <div className="grid gap-[10px] grid-cols-2 lg:grid-cols-3">
            <button
              type="button"
              value="5"
              onClick={(e) => {
                setTip(+e.target.value);
              }}
              className="bg-[#00494d] py-2 px-10 text-center text-white font-bold rounded-md focus:bg-[#33c2ae]"
            >
              5%
            </button>

            <button
              type="button"
              value="10"
              onClick={(e) => {
                setTip(+e.target.value);
              }}
              className="bg-[#00494d] py-2 px-10 text-center text-white font-bold rounded-md focus:bg-[#33c2ae]"
            >
              10%
            </button>

            <button
              type="button"
              value="15"
              onClick={(e) => {
                setTip(+e.target.value);
              }}
              className="bg-[#00494d] py-2 px-10 text-center text-white font-bold rounded-md focus:bg-[#33c2ae]"
            >
              15%
            </button>

            <button
              type="button"
              value="25"
              onClick={(e) => {
                setTip(+e.target.value);
              }}
              className="bg-[#00494d] py-2 px-10 text-center text-white font-bold rounded-md focus:bg-[#33c2ae]"
            >
              25%
            </button>

            <button
              type="button"
              value="50"
              onClick={(e) => {
                setTip(+e.target.value);
              }}
              className="bg-[#00494d] py-2 px-10 text-center text-white font-bold rounded-md focus:bg-[#33c2ae]"
            >
              50%
            </button>

            <input
              type="text"
              placeholder="Custom"
              className=" bg-[#ddd] text-center  font-bold rounded-md"
              onInput={(e) => {
                setTip(+e.target.value);
              }}
            />
          </div>
        </div>

        <div className="number-people flex flex-col mt-5 relative">
          <label
            htmlFor="people"
            className="mb-5 font-bold text-2xl text-[#00494d]"
          >
            Number of People
          </label>
          <input
            type="text"
            name="Bill"
            className="bg-[#f4fafa] p-3 text-right"
            onInput={(e) => {
              setPeople(e.target.value);
            }}
          />

          <img
            src={person}
            alt=""
            className="w-[15px] absolute top-[67%] left-[3%]"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
