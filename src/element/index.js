// 导入自己需要的组件
import { Select, Option, OptionGroup, Input,Button, Tree, Dialog, Row, Col ,Tooltip,Pagination,Backtop,Dropdown, DropdownMenu,DropdownItem,Tag} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Button)
    Vue.use(Col)
    Vue.use(Tooltip)
    Vue.use(Pagination)
    Vue.use(Backtop)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Tag)
  }
}
export default element