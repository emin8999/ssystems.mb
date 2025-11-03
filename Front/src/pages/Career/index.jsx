import Header from "../../components/Career/Header/Header.jsx"
import AboutWork from "../../components/Career/AboutWork/AboutWork.jsx"
import OpenPositions from "../../components/Career/OpenPositions/OpenPositions.jsx"
import ApplicationForm from "../../components/Career/ApplicationForm/ApplicationForm.jsx"
import ClosingMessage from "../../components/Career/ClosingMessage/ClosingMessage.jsx"

const index = () => {
  return (
    <>
        <Header />
        <AboutWork />
        <OpenPositions />
        <ApplicationForm />
        <ClosingMessage />
    </>
  )
}

export default index