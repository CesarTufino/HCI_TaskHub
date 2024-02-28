import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TaskCard from './components/TaskDetail/TaskDetail'
import PlusButton from './components/PlusButton/PlusButton'
import Calendar from './components/Calendar/Calendar'
import TasksFilter from './components/TasksFilter/TasksFilter'

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
        <div className="space-y-[13px] p-[13px]">
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
        <PlusButton className='fixed bottom-[85px] right-[10px]' />
      </main>
      <Footer />
    </>
  )
}

export default App
