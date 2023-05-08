import m from 'mithril'
import './style.css'

export const MainView = {
  view: function () {
    const divList = []
    for (let i = 1; i <= 10000; i++) {
      divList.push(m("div", { "class": "item" }, "div numero: " + i))
    }
    return m("div.container", divList)
  }
}