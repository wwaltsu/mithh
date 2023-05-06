import m, { request } from "mithril"

const url =  "https://jsonplaceholder.typicode.com/posts"
const Target = {
  list: [],
  loadList: async () => {
     const result = await request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }) 
    console.log(result)
    Target.list = result
  },
}


const TargetList = {
  oninit: Target.loadList,
  view: () => {
    return m("ul", Target.list.map((e) => {
      return m("p", [
        m("h2",  `Title: ${e.title}`),
        m("div", `User id: ${e.id}`)
      ])
    }))
  },
}

export { Target, TargetList }