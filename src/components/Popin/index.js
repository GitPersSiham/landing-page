import React ,{useState} from 'react';
import Modal from "react-responsive-modal";
import './Popin.css';


const Popin = () => {
  
  const [state, setState] = useState({
     open:false,
    
});
  
  
    const onOpenModal = () => {
        setState({ open: true });
      };
    
    const onCloseModal = () => {
        setState({ open: false });
      };
      
        const { open } = state;
       return ( 
          <div className="popin">
            <h4><i className="fa fa-angle-down" style={{fontSize:'50px'}} id="fleche" />  Inscrivez vous maintenant</h4>
            <button  className="btn btn-primary" onClick={onOpenModal}>Cliquez-ici</button>
           
            <Modal className="modal-responsive" open={open} onClose={onCloseModal}>
              
              <h2> Simple centered modal </h2>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </p>

            </Modal>
           
          </div>
        );
      
        }
      

export default Popin;