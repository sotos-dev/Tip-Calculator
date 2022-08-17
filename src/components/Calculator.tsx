import { useState } from "react"
import DataInput from "./DataInput"
import DataOutput from "./DataOutput"

interface ICalculatorProps {}

const Calculator = ({}: ICalculatorProps) => {
  const [states, setStates] = useState({
    bill: "",
    tipPercentage: "",
    numOfPeople: "",
    activeButton: "",
    billError: false,
    billErrorMessage: "",
    numOfPeopleError: false,
    numOfPeopleErrorMessage: "",
    tipsError: false,
    tipsErrorMessage: "",
    customTipPercentage: "custom"
  })

  return (
    <>
      <div className="flex flex-col justify-center items-stretch gap-10 bg-white p-7 w-full rounded-2xl md:flex-row md:max-w-7xl ">
        <DataInput setStates={setStates} states={states} />
        <DataOutput states={states} setStates={setStates} />
      </div>
    </>
  )
}

export default Calculator
