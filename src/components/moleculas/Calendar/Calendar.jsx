import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Calendar.css';
export default function Calendar () {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const days = [...Array(35).keys()].map((i) => i);
  const daysName = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
  const [month, setMonth] = useState(0);
  
  function handleAddMonth(){
    if(month < 11)
      setMonth(month + 1);
  }

  function handleSubtractMonth(){
    if(month > 0)
      setMonth(month - 1);
  }

  return ( 
    
    
    <div className="bg-white py-[8px] px-[13px] rounded-[8px] mx-auto flex flex-col space-y-[13px] border-2 border-none w-fit">
      <div className="flex items-center justify-between w-[280px]">
        <button className="month-button shadow-custom" onClick={handleSubtractMonth}>
            <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <span className="etiqueta text-black">{months[month]} 2024</span>
        <button className="month-button shadow-custom" onClick={handleAddMonth}>
            <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>

      <div className='w-full h-[1px]  bg-primary-1'></div>
      
      <div className="grid grid-cols-7 w-fit">
        {daysName.map((day) => (
          <div key={day} className="calendar-item normal-regular text-grey-2">
            {day}
          </div>
        ))}
        {days.map((day) => (
            <div key={day} onClick={() => handleDayPressed(day)} className={`calendar-item normal-regular ${day > 0 && day<=30 ? 'text-black' : 'text-grey-2' } ${day ==1 && 'bg-primary-60'}`}> 
              {day > 0 && day <= 30 ? day : day > 30 ? day - 30 : day<=0 ? day + 30 : ''}
            </div>
        ))
        }
      </div>
    </div>
  
  );
};
