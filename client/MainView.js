import m from 'mithril';

export function MainView({ attrs }) {
    
  const view = function() {
    const divList = []
    for (let i = 0; i < 10000; i++) {
      divList.push(m("div", "div numero: " + i))
    }
    return m("div", divList)
  }
  
  return { view }; // Return the view function as a property of an object
}