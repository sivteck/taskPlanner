const { createElement, useState } = window.React
const styled = window.styled

const Task = () => {
  const [task, setTask] = useState({})
  return (
    <h1> This is a Task </h1>
  )
}

export { Task }
