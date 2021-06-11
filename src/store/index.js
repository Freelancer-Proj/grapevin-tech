export const state = () => ({
  navbarIsLock: false,
  shortcutNavbarIsShow: false,
  navIsOpen: null,
  homeSectionPosition: {
    height: 1,
    id: `01`,
    top: 0
  }
})

export const mutations = {
  toggleLockNavbar (state, status) {
    state.navbarIsLock = status
  },
  setSectionPos (state, status) {
    state.homeSectionPosition = status
  },
  setShortcutNavbar (state, status) {
    state.shortcutNavbarIsShow = status
  },
  openNav(state, status) {
    state.navIsOpen = status
  }
}
// modules: {
  //   todos: {
  //     namespaced: true,
  //     state: () => ({
  //       list: []
  //     }),
  //     mutations: {
  //       add (state, { text }) {
  //         state.list.push({
  //           text,
  //           done: false
  //         })
  //       },
  //       remove (state, { todo }) {
  //         state.list.splice(state.list.indexOf(todo), 1)
  //       },
  //       toggle (state, { todo }) {
  //         todo.done = !todo.done
  //       }
  //     }
  //   }
  // }
