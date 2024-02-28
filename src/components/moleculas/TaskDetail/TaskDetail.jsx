import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function TaskCard({task}) {
    const statusColor = task.status === 'Pendiente' ? 'text-secondary-1' : 'text-primary-1'
    return (
        <div className="task_card border-[1px] border-black text-black rounded-md py-2 px-4 bg-white w-full h-[82px] flex flex-col justify-center">
            <div className="task_card__header flex justify-between items-center">
                <h3 className="task_card__title normal-bold max-w-[75%]">{task.title}</h3>
                <p className="task_card__date normal-regular">{task.date}</p>
            </div>
            <div className="task_card__body flex justify-between">
                <p className="task_card__description normal-regular">
                    <FontAwesomeIcon icon={faUser} className='text-primary-1 mr-[13px]' /> 
                    {task.responsible}
                </p>
                <p className="task_card__status normal-regular">
                    <FontAwesomeIcon icon={faCircle} size='2xs' className={`mr-1 ${statusColor}`}/>
                    {task.status}
                </p>
            </div>
        </div>
    );
}   