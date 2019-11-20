const { createElement, useState } = window.React
const styled = window.styled

const InputTask = styled.input`
  background: papayawhip;
  border: none;
`

const AddTask = () => {
  const [task, setTask] = useState({})
  const handleChange = (e) => setTask({ name: e.target.value })

  return (
    <InputTask type='text' placeholder='Enter Task' className='add-task' value={task.name} onChange={handleChange} />
  )
}

export { AddTask }
