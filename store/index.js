export const state = () => ({
  a: 1,
})

export const getters = {
  b(state) {
    console.log('getting b')
    return state.a + 1
  },
}
