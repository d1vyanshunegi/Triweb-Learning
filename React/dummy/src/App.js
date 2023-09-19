import FirstComponent from "./components/FirstComponent";
import Backdrop from "./components/Backdrop";
import {useState} from "react";

function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const modalCloseHandler = () => {
    setModalOpen(false);
  }

  return (
    <div className='modal'>
      <h1>Heading</h1>
      {modalOpen?<FirstComponent owner="Divyanshu" reason="For demo" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<Backdrop />:null}
    </div>
  );
}

export default App;
