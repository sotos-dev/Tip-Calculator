import Image from "next/image"

interface ITitleProps {
  titleLogo: string
}

const Title = ({ titleLogo }: ITitleProps) => {
  return (
    <>
      <div className="self-center">
        <Image src={titleLogo} alt="title" />
      </div>
    </>
  )
}

export default Title
