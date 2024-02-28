import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserGroup, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
export default function Footer() {
    return (
        <footer className="bg-primary-1 h-[75px] flex justify-evenly w-[100%] items-center font-bold mb-auto fixed left-0 bottom-0">
            <div className="footer_element">
                <FontAwesomeIcon icon={faHouse} size='xl' /> 
                <p className='normal-regular'>Inicio</p>
            </div>
            <div className="footer_element">
                <FontAwesomeIcon icon={faUserGroup} size='xl' /> 
                <p className='normal-regular'>Equipos</p>
            </div>
            <div className="footer_element">
                <FontAwesomeIcon icon={faListCheck} size='xl' />
                <p className='normal-regular'>Tareas</p>
            </div>
            <div className="footer_element">
                <FontAwesomeIcon icon={faUser} size='xl' /> 
                <p className='normal-regular'>Perfil</p>
            </div>
        </footer>
    );
}