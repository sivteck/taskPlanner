const { createElement, useState } = window.React
const { render } = window.ReactDOM

const Task = () => {
  const [task, setTask] = useState({})
  return 'meme'
}

render(createElement(Task), document.getElementById('root'))


console.log(useState)
