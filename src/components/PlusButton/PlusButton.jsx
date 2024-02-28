import './PlusButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function PlusButton({className}) {
    return (
        <div className={`w-fit bg-primary-1 rounded-full p-[3px] shadow-md ${className}`}>  
            <button onClick={()=>{console.log("Add Button pressed")}} className="plus-button flex justify-center items-center bg-primary-1 border-[3px] h-[44px] w-[44px] border-solid border-white">
                <FontAwesomeIcon icon={faPlus}  className='text-white' />
            </button>
        </div>
    )
};