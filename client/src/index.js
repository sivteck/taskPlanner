import { App } from './Components/App.js'

const { createElement } = window.React
const { render } = window.ReactDOM

render(createElement(App), document.getElementById('root'))
