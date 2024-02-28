import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';

export default function TasksFilter({ label, options, onSelect }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (onSelect) {
      onSelect(e.target.value);
    }
  };

  return (
    <div className="">
      <label className="normal-regular text-black">{label}</label>
      <div className="">
        <div>
          <button type="button" className="flex w-[170px] justify-between items-center rounded-[8px] bg-primary-1  px-[13px] py-[8px] normal-regular text-white ">
            <p className='text-center flex-1'>{selected}</p>
            <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          </button>
        </div>
        {/* Aquí podrías agregar la lógica para mostrar u ocultar el menú desplegable con los elementos `options` */}
      </div>
    </div>
  );
};

