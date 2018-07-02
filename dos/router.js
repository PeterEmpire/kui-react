import asyncComponent from './page/AsyncComponent'

const about = asyncComponent(() => import(/*webpackChunkName:'about'*/'./page/about'))
const affix = asyncComponent(() => import(/*webpackChunkName:'affix'*/'./page/affix'))
const alert = asyncComponent(() => import(/*webpackChunkName:'alert'*/'./page/alert'))
const button = asyncComponent(() => import(/*webpackChunkName:'button'*/'./page/button'))
const badge = asyncComponent(() => import(/*webpackChunkName:'badge'*/'./page/badge'))
const backtop = asyncComponent(() => import(/*webpackChunkName:'backtop'*/'./page/backtop'))
const breadcrumb = asyncComponent(() => import(/*webpackChunkName:'breadcrumb'*/'./page/breadcrumb'))
const collapse = asyncComponent(() => import(/*webpackChunkName:'collapse'*/'./page/collapse'))
const colorpicker = asyncComponent(() => import(/*webpackChunkName:'colorpicker'*/'./page/colorpicker'))
const checkbox = asyncComponent(() => import(/*webpackChunkName:'checkbox'*/'./page/checkbox'))
const card = asyncComponent(() => import(/*webpackChunkName:'card'*/'./page/card'))
const carousel = asyncComponent(() => import(/*webpackChunkName:'carousel'*/'./page/carousel'))
const datepicker = asyncComponent(() => import(/*webpackChunkName:'datepicker'*/'./page/datepicker'))
const form = asyncComponent(() => import(/*webpackChunkName:'form'*/'./page/form'))
const kuiangular = asyncComponent(() => import(/*webpackChunkName:'kuiangular'*/'./page/angular-kui'))
const icon = asyncComponent(() => import(/*webpackChunkName:'icon'*/'./page/icon'))
const input = asyncComponent(() => import(/*webpackChunkName:'input'*/'./page/input'))
const layout = asyncComponent(() => import(/*webpackChunkName:'layout'*/'./page/layout'))
const loading = asyncComponent(() => import(/*webpackChunkName:'loading'*/'./page/loading'))
const log = asyncComponent(() => import(/*webpackChunkName:'log'*/'./page/log'))
const message = asyncComponent(() => import(/*webpackChunkName:'message'*/'./page/message'))
const menu = asyncComponent(() => import(/*webpackChunkName:'menu'*/'./page/menu'))
const modal = asyncComponent(() => import(/*webpackChunkName:'modal'*/'./page/modal'))
const notice = asyncComponent(() => import(/*webpackChunkName:'notice'*/'./page/notice'))
const poptip = asyncComponent(() => import(/*webpackChunkName:'poptip'*/'./page/poptip'))
const page = asyncComponent(() => import(/*webpackChunkName:'page'*/'./page/page'))
const radio = asyncComponent(() => import(/*webpackChunkName:'radio'*/'./page/radio'))
const sponsor = asyncComponent(() => import(/*webpackChunkName:'sponsor'*/'./page/sponsor'))
const select = asyncComponent(() => import(/*webpackChunkName:'select'*/'./page/select'))
const start = asyncComponent(() => import(/*webpackChunkName:'start'*/'./page/start'))
const steps = asyncComponent(() => import(/*webpackChunkName:'steps'*/'./page/steps'))
const Switch = asyncComponent(() => import(/*webpackChunkName:'Switch'*/'./page/switch'))
const tag = asyncComponent(() => import(/*webpackChunkName:'tag '*/'./page/tag'))
const table = asyncComponent(() => import(/*webpackChunkName:'table'*/'./page/table'))
const tree = asyncComponent(() => import(/*webpackChunkName:'tree'*/'./page/tree'))
const treeselect = asyncComponent(() => import(/*webpackChunkName:'treeselect'*/'./page/treeselect'))
const tooltip = asyncComponent(() => import(/*webpackChunkName:'tooltip'*/'./page/tooltip'))
const theme = asyncComponent(() => import(/*webpackChunkName:'theme'*/'./page/theme'))
const test = asyncComponent(() => import(/*webpackChunkName:'test'*/'./page/test'))
const tabs = asyncComponent(() => import(/*webpackChunkName:'tabs'*/'./page/tabs'))
const timeline = asyncComponent(() => import(/*webpackChunkName:'timeline  '*/'./page/timeline'))
const upload = asyncComponent(() => import(/*webpackChunkName:'upload'*/'./page/upload'))

let R = {
  about, alert, affix,
  badge, button, breadcrumb, backtop,
  collapse, card, checkbox, colorpicker, carousel,
  datepicker,
  'angular-kui':kuiangular,
  input, icon,
  log, layout, loading,
  modal, message, menu,
  notice,
  form,
  upload,

  poptip, page,
  radio,
  sponsor, select, Switch, start, tooltip, steps,
  tag, test, timeline, tabs, table, theme, tree, treeselect
}

export default R