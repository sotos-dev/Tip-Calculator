import Input from "./Input"
import currencyIcon from "../assets/images/icon-dollar.svg"
import personIcon from "../assets/images/icon-person.svg"
import TipPercentage from "./TipPercentage"
import { percentages } from "../lib/data"
import React from "react"

export interface IDataInputProps {
  setStates: React.Dispatch<
    React.SetStateAction<{
      bill: string
      tipPercentage: string
      numOfPeople: string
      activeButton: string
      billError: boolean
      billErrorMessage: string
      numOfPeopleError: boolean
      numOfPeopleErrorMessage: string
      tipsError: boolean
      tipsErrorMessage: string
      customTipPercentage: string
    }>
  >
  states: {
    bill: string
    tipPercentage: string
    numOfPeople: string
    activeButton: string
    billError: boolean
    billErrorMessage: string
    numOfPeopleError: boolean
    numOfPeopleErrorMessage: string
    tipsError: boolean
    tipsErrorMessage: string
    customTipPercentage: string
  }
}

const DataInput = ({ setStates, states }: IDataInputProps) => {
  const handleActiveButton = (e: React.FormEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.innerText.slice(0, -1)
    if (value.match(/^\d*\.?\d*$/)) {
      setStates({
        ...states,
        activeButton: value,
        tipPercentage: value,
        customTipPercentage: "custom",
        tipsError: false
      })
    }
  }

  const handleTipInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (value.match(/^\d*\.?\d*$/)) {
      setStates({
        ...states,
        activeButton: "",
        tipPercentage: "",
        customTipPercentage: value,
        tipsError: false,
        tipsErrorMessage: ""
      })
    } else {
      setStates({
        ...states,
        activeButton: "",
        tipPercentage: "",
        customTipPercentage: value,
        tipsError: true,
        tipsErrorMessage: "the tip percentage should be a number"
      })
    }
  }

  const emptyTipValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === "custom") {
      setStates({ ...states, tipPercentage: "", customTipPercentage: "", activeButton: "" })
    } else {
      return
    }
  }

  const fillTipValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === "") {
      setStates({ ...states, customTipPercentage: "custom" })
    } else {
      return
    }
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="mb-2 text-lg">Bill</h2>
          <Input currencyIcon={currencyIcon} setStates={setStates} states={states} />
        </div>
        <div>
          <h2 className="mb-2 text-lg">Select Tip %</h2>
          <div className="grid grid-cols-2 gap-3">
            {percentages.map((percentage) => {
              return (
                <React.Fragment key={percentage}>
                  <button
                    onClick={handleActiveButton}
                    className={`${
                      states.activeButton === percentage.toString()
                        ? "bg-brandColors-strongCyan"
                        : "bg-brandColors-veryDarkCyan"
                    } h-12 rounded-md text-white text-lg`}>
                    <TipPercentage percentage={percentage} />
                  </button>
                </React.Fragment>
              )
            })}
            <input
              value={states.customTipPercentage}
              onFocus={emptyTipValue}
              onBlur={fillTipValue}
              onChange={handleTipInput}
              type="text"
              className={`${
                states.tipsError
                  ? "border-red-600 focus:border-red-600 focus:ring-0"
                  : "	focus:border-0 focus:ring-0   border-transparent"
              } bg-slate-100 h-12 w-full text-center rounded-md text-lg`}
            />
          </div>
          {states.tipsError && <p className="text-red-600 mt-2 text-right">{states.tipsErrorMessage}</p>}
        </div>
        <div>
          <h2 className="mb-2 text-lg">Number of People</h2>
          <Input personIcon={personIcon} setStates={setStates} states={states} />
        </div>
      </div>
    </>
  )
}

export default DataInput
