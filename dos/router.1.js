const about       =()=>import(/*:webpackChunkName:about     */'./page/about')
const affix       =()=>import(/*:webpackChunkName:affix     */'./page/affix')
const alert       =()=>import(/*:webpackChunkName:alert     */'./page/alert')
const button      =()=>import(/*:webpackChunkName:button    */'./page/button')
const badge       =()=>import(/*:webpackChunkName:badge     */'./page/badge')
const backtop     =()=>import(/*:webpackChunkName:backtop   */'./page/backtop')
const breadcrumb  =()=>import(/*:webpackChunkName:breadcrumb*/'./page/breadcrumb')
const collapse    =()=>import(/*:webpackChunkName:collapse  */'./page/collapse')
const checkbox    =()=>import(/*:webpackChunkName:checkbox  */'./page/checkbox')
const card        =()=>import(/*:webpackChunkName:card      */'./page/card')
// const import      =()=>import(/*:webpackChunkName:import    */'./page/datepicker')
const layout      =()=>import(/*:webpackChunkName:layout    */'./page/layout')
const loading     =()=>import(/*:webpackChunkName:loading   */'./page/loading')
const log         =()=>import(/*:webpackChunkName:log       */'./page/log')
const icon        =()=>import(/*:webpackChunkName:icon      */'./page/icon')
const input       =()=>import(/*:webpackChunkName:input     */'./page/input')
const message     =()=>import(/*:webpackChunkName:message   */'./page/message')
const menu        =()=>import(/*:webpackChunkName:menu      */'./page/menu')
const modal       =()=>import(/*:webpackChunkName:modal     */'./page/modal')
const notice      =()=>import(/*:webpackChunkName:notice    */'./page/notice')
const poptip      =()=>import(/*:webpackChunkName:poptip    */'./page/poptip')
// const page      =()=>import(/*:webpackChunkName:page    */'./page/page')
const radio       =()=>import(/*:webpackChunkName:radio     */'./page/radio')
const sponsor     =()=>import(/*:webpackChunkName:sponsor   */'./page/sponsor')
const select      =()=>import(/*:webpackChunkName:select    */'./page/select')
const start       =()=>import(/*:webpackChunkName:start     */'./page/start')
const Switch      =()=>import(/*:webpackChunkName:Switch    */'./page/switch')
// const import      =()=>import(/*:webpackChunkName:import    */'./page/form')
// const import      =()=>import(/*:webpackChunkName:import    */'./page/colorpicker')
// const import      =()=>import(/*:webpackChunkName:import    */'./page/tabs')
const tag         =()=>import(/*:webpackChunkName:tag       */'./page/tag')
const table       =()=>import(/*:webpackChunkName:table     */'./page/table')
const tooltip     =()=>import(/*:webpackChunkName:tooltip   */'./page/tooltip')
const theme       =()=>import(/*:webpackChunkName:theme     */'./page/theme')
const test        =()=>import(/*:webpackChunkName:test      */'./page/test')
const tabs        =()=>import(/*:webpackChunkName:tabs      */'./page/tabs')
const timeline    =()=>import(/*:webpackChunkName:timeline  */'./page/timeline')
const upload      =()=>import(/*:webpackChunkName:upload    */'./page/upload')
/*:webpackChunkName:*/
let R = {
    about, alert, affix,
    badge, button, breadcrumb, backtop,
    collapse, card, checkbox,// colorpicker,
    // datepicker, 
     input, icon,
    log, layout, loading,
    modal, message, menu,
    notice,
    // form,
    upload,

    poptip,// page,
    radio,
    sponsor, select, Switch, start, tooltip,
    tag, test, timeline, tabs, table, theme,
}

export default R