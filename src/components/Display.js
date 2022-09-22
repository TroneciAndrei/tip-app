const Display = ({ total, tipPerPerson, people, handleResetBtn }) => {
  const returnCurrency = (amt) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);
  };

  return (
    <div className="bg-[#00494d]  p-10 m-5 w-[90%] h-[75%] rounded-lg lg:w-[45%]">
      <div className="wrapper">
        <div className="tip-amount flex justify-between gap-5 text-white mb-10">
          <div className="person">
            <p className="font-bold text-xl">Tip Amount</p>
            <span className="font-bold text-sm text-[#5e7a7d]"> / person</span>
          </div>
          <span className="font-bold text-3xl text-[#33c2ae]">
            {returnCurrency(`${tipPerPerson ? tipPerPerson / people : "0"}`)}
          </span>
        </div>

        <div className="total flex justify-between gap-5 text-white mb-10">
          <div className="person">
            <p className="font-bold text-xl">Total</p>
            <span className="font-bold text-sm text-[#5e7a7d]"> / person</span>
          </div>
          <span className="font-bold text-3xl text-[#33c2ae]">
            {returnCurrency(`${total ? total / people : "0"}`)}
          </span>
        </div>

        <button
          type="button"
          title="Reset"
          className="bg-[#33c2ae] w-full py-2 font-bold text-lg text-[#00494d] rounded-lg"
          onClick={handleResetBtn}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Display;
