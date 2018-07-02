let code = {}

code.base = `import { Breadcrumb } from 'react-kui';
const Item = Breadcrumb.Item
ReactDOM.render() {
  return (
    <div>
     <Breadcrumb>
         <Item to="/">Home</Item>
         <Item to="/breadcrumb">breadcrumb</Item>
         <Item>other</Item>
     </Breadcrumb>   
    </div>
  )
}`

code.icon = `import { Breadcrumb } from 'react-kui';
const Item = Breadcrumb.Item
ReactDOM.render() {
  return (
    <div>
      <Breadcrumb>
          <Item to="/" icon="home">Home</Item>
          <Item to="/breadcrumb" icon="social-buffer">breadcrumb</Item>
          <Item icon="heart">other</Item>
      </Breadcrumb>  
    </div>
  )
}`

code.separator = `import { Breadcrumb } from 'react-kui';
const Item = Breadcrumb.Item
ReactDOM.render() {
  return (
    <div>
      <Breadcrumb>
          <Item to="/" icon="home" separator="~">Home</Item>
          <Item to="/breadcrumb" icon="social-buffer" separator="~">breadcrumb</Item>
          <Item icon="heart" separator="~">other</Item>
      </Breadcrumb>  
    </div>
  )
}`

export default code