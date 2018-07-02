let code = {}

code.webpack = `import React from 'react'
import Render from 'react-dom'
import { Button } from 'kui-react'
import 'kui-react/dist/k-ui.css'

Render.render(<Button type="primary"></Button>,document.getElementById('app'))`

code.demo = `
`

export default code