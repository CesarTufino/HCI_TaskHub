import { useState } from 'react'
import Header from './components/moleculas/Header/Header'
import Footer from './components/moleculas/Footer/Footer'
import TaskCards from './components/organismos/TasksDetail/TasksDetail'
import PlusButton from './components/atomos/PlusButton/PlusButton'
import Calendar from './components/moleculas/Calendar/Calendar'
import TasksFilter from './components/moleculas/TasksFilter/TasksFilter'

function App() {
  const usuarios = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
  const estados = ['Todos', 'Completado', 'Pendiente'];
  const [tasks, setTasks] = useState([
    {
      title: 'Elaborar informe de ventas',
      date: '01/01/2024',
      responsible: 'Carlos Cedeño',
      status: 'Pendiente'
    },
    {
      title: 'Realizar análisis de mercado',
      date: '08/01/2024',
      responsible: 'Carlos Cedeño',
      status: 'Completado'
    },
    {
      title: 'Gestionar procesos',
      date: '08/01/2024',
      responsible: 'Ana Rodríguez',
      status: 'Pendiente'
    },
    {
      title: 'Gestionar procesos',
      date: '08/01/2024',
      responsible: 'Ana Rodríguez',
      status: 'Pendiente'
    }
  ])
  return (
    <>
      <Header
        title={'Tareas'}
      />

      <main className='flex flex-col space-y-[21px] px-[13px] pt-[13px] mt-[82px] mb-[75px]'>
        <Calendar />
        <div className='flex justify-between'>
          <TasksFilter
            label="Asignado a:"
            options={usuarios}
            onSelect={(value) => console.log(value)}
          />

          <TasksFilter
            label="Estado:"
            options={estados}
            onSelect={(value) => console.log(value)}
          />
        </div>
        <div>
        <TaskCards tasks={tasks} />
        </div>
        <PlusButton className='fixed bottom-[85px] right-[10px]' />
      </main>
      <Footer />
    </>
  )
}

export default App
