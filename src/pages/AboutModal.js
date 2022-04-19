import { useEffect } from "react"



const AboutModal = ({ setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 4000)
  })

  return (
    <div className="about-modal page">
         <h1>You'll see Modal very soon!</h1>
    </div>
  )
}

export default AboutModal