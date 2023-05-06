import m, { mount } from "mithril"
import { TargetList } from "./TargetList"


const root = document.body

function MainComponent() {
  return {
    view: () => {
      return m("div", { "class": ".container" }, [
        m(TargetList)
      ])
    }
  }
}

mount(root, MainComponent)