import TaskCard from '../../moleculas/TaskDetail/TaskDetail'

export default function TaskCards({tasks}) {
    return (
        <div className="space-y-[13px] p-[13px]">
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
    );
}  
