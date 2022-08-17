interface IDataOutputProps {
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
}

const DataOutput = ({ states, setStates }: IDataOutputProps) => {
  const people: string = states.numOfPeople
  const total: string = states.bill
  const tipPercent: string = states.tipPercentage
  const customTipPercent: string = states.customTipPercentage
  const customTipsExtra: number = +total * (+customTipPercent / 100)
  const customTotalWithTips: number = +total + customTipsExtra
  const tipsExtra: number = +total * (+tipPercent / 100)
  const totalWithTips: number = +total + tipsExtra

  const resetCalculator = (e: React.FormEvent<HTMLButtonElement>) => {
    setStates({
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
  }

  if (tipPercent === "") {
    const tipPerPerson: number = customTipsExtra / +people
    const totalPerPerson: number = customTotalWithTips / +people
    return (
      <>
        <div className="bg-brandColors-veryDarkCyan p-5  rounded-xl flex flex-col justify-between gap-7 md:p-10 shrink-0 md:w-1/2">
          <div className="flex flex-col justify-between gap-7 md:gap-10">
            {/* Tip Amount Per Person */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl md:text-2xl">Tip Ammount</h3>
                <span className="text-brandColors-strongCyan text-lg md:text-xl">/person</span>
              </div>
              <div>
                {tipPerPerson && people && total && customTipPercent ? (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">${tipPerPerson.toFixed(2)}</span>
                ) : (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">$0</span>
                )}
              </div>
            </div>
            {/* Total Per Person */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl md:text-2xl">Total</h3>
                <span className="text-brandColors-strongCyan text-lg md:text-xl">/ person</span>
              </div>
              <div>
                {people && total && customTipPercent && totalPerPerson ? (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">${totalPerPerson.toFixed(2)}</span>
                ) : (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">$0</span>
                )}
              </div>
            </div>
          </div>
          {/* Reset */}
          <button onClick={resetCalculator} className="bg-brandColors-strongCyan py-3 rounded-md text-white">
            RESET
          </button>
        </div>
      </>
    )
  } else {
    const tipPerPerson: number = tipsExtra / +people
    const totalPerPerson: number = totalWithTips / +people

    return (
      <>
        <div className="bg-brandColors-veryDarkCyan p-5  rounded-xl flex flex-col justify-between gap-7 md:p-10 shrink-0 md:w-1/2">
          <div className="flex flex-col justify-between gap-7 md:gap-10">
            {/* Tip Amount Per Person */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl md:text-2xl">Tip Ammount</h3>
                <span className="text-brandColors-strongCyan text-lg md:text-xl">/person</span>
              </div>
              <div>
                {tipPerPerson && people && total && tipPercent ? (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">${tipPerPerson.toFixed(2)}</span>
                ) : (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">$0</span>
                )}
              </div>
            </div>
            {/* Total Per Person */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white text-xl md:text-2xl">Total</h3>
                <span className="text-brandColors-strongCyan text-lg md:text-xl">/ person</span>
              </div>
              <div>
                {people && total && tipPercent && totalPerPerson ? (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">${totalPerPerson.toFixed(2)}</span>
                ) : (
                  <span className="text-brandColors-strongCyan text-xl md:text-2xl">$0</span>
                )}
              </div>
            </div>
          </div>
          {/* Reset */}
          <button onClick={resetCalculator} className="bg-brandColors-strongCyan py-3 rounded-md text-white">
            RESET
          </button>
        </div>
      </>
    )
  }
}

export default DataOutput
