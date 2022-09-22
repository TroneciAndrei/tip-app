import Display from "./components/Display";
import Form from "./components/Form";
import Logo from "./images/logo.svg";

import React, { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && tip > 0 && people > 0) {
      setTipPerPerson(bill * (tip / 100));
      setTotal(tipPerPerson + bill);
    }
  }, [bill, tip, people, tipPerPerson]);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
    setTipPerPerson(0);
    setTotal(0);
  };

  return (
    <div className="wrapper flex md:h-screen flex-col justify-center items-center max-w-[1000px] m-auto">
      <img src={Logo} alt="Splitter Logo" className="mb-10" />
      <div className="container bg-white rounded-md flex items-center gap-0 md:gap-10 flex-col lg:flex-row">
        <Form
          bill={bill}
          people={people}
          tip={tip}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
        />
        <Display
          tipPerPerson={tipPerPerson}
          total={total}
          handleResetBtn={handleResetBtn}
          people={people}
        />
      </div>
    </div>
  );
}

export default App;
