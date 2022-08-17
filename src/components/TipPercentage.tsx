import React from "react"

interface ITipPercentageProps {
	percentage: number
}

const TipPercentage = ({ percentage }: ITipPercentageProps) => {
	return <>{percentage}%</>
}

export default TipPercentage
