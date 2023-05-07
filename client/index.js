import m, { mount } from "mithril"
import { TargetList } from "./TargetList"
import { TargetForm } from "./TargetForm"


const root = document.body

function MainComponent() {
  return {
    view: () => {
      return m("div", [
        m(TargetForm),
        m(TargetList)
      ])
    }
  }
}

mount(root, MainComponent)