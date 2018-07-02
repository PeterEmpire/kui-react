let code = {}

code.base = `
import { Page } from 'react-kui';
ReactDOM.render() {
  return <Page :total="100" :curent="1" :pagesize="10"/>
}
`
code.size = `import { Page } from 'react-kui';
ReactDOM.render() {
  return <Page :total="60" :curent="1" :pagesize="10" mini onChange={(page)=>{console.log(page)}} />
}`
code.sizer = `import { Page } from 'react-kui';
ReactDOM.render() {
  return <Page :total="60" :curent="1" :pagesize="10" sizer mini onChange={(page)=>{console.log(page)}} />
}`
export default code