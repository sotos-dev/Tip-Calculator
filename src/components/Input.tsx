import Image from "next/image"

interface IInputIconProps {
  currencyIcon?: string
  personIcon?: string
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

const Input = ({ currencyIcon, personIcon, setStates, states }: IInputIconProps) => {
  const handleBill = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (value.match(/^\d*\.?\d*$/)) {
      setStates({ ...states, bill: value, billError: false, billErrorMessage: "" })
    } else if (value !== "") {
      setStates({
        ...states,
        bill: value,
        billError: true,
        billErrorMessage: "The bill amount should be a number"
      })
    } else {
      setStates({
        ...states,
        billError: false,
        billErrorMessage: ""
      })
    }
  }

  const handleNumOfPeople = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (value.match(/^\d+$/)) {
      if (+value > 0) {
        setStates({ ...states, numOfPeople: value, numOfPeopleError: false, numOfPeopleErrorMessage: "" })
      } else if (value !== "") {
        setStates({
          ...states,
          // numOfPeople: "",
          numOfPeopleError: false,
          numOfPeopleErrorMessage: ""
        })
      } else {
        setStates({
          ...states,
          numOfPeopleError: true,
          numOfPeopleErrorMessage: "Can't be zero"
        })
      }
    } else if (value !== "") {
      setStates({
        ...states,
        numOfPeople: value,
        numOfPeopleError: true,
        numOfPeopleErrorMessage: "Please use an integer number"
      })
    } else {
      setStates({
        ...states,
        numOfPeople: value,
        numOfPeopleError: false,
        numOfPeopleErrorMessage: ""
      })
    }
  }

  return (
    <>
      <div className="relative">
        {currencyIcon && (
          <>
            <div className="absolute left-3 top-4">
              <Image src={currencyIcon} alt="dollar icon" />
            </div>
            <input
              value={states.bill}
              onChange={handleBill}
              type="text"
              className={`${
                states.billError
                  ? "border-red-600 focus:border-red-600 focus:ring-0"
                  : "	focus:border-0 focus:ring-0   border-transparent"
              } bg-brandColors-veryLight h-14 w-full text-right text-lg`}
            />
            {states.billError && <p className="text-red-600 mt-2">{states.billErrorMessage}</p>}
          </>
        )}

        {personIcon && (
          <>
            <div className="absolute left-3 top-4">
              <Image src={personIcon} alt="person icon" />
            </div>
            <input
              value={states.numOfPeople}
              onChange={handleNumOfPeople}
              type="text"
              className={`${
                states.numOfPeopleError
                  ? "border-red-600 focus:border-red-600 focus:ring-0"
                  : "	focus:border-0 focus:ring-0   border-transparent"
              } bg-brandColors-veryLight h-14 w-full text-right text-lg`}
            />
            {states.numOfPeopleError && <p className="text-red-600 mt-2">{states.numOfPeopleErrorMessage}</p>}
          </>
        )}
      </div>
    </>
  )
}

export default Input
