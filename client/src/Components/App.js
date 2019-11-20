import { Task } from './Task.js'
import { AddTask } from './AddTask.js'

const { styled } = window.styled
const React = window.React

const App = () => {
  return (
    <>
      <AddTask />
      <Task />
    </>
  )
}

export { App }
