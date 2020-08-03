const state = () => ({
    modalData: {},
    modalStatus: false

})
  
const mutations = {
    // toggle modal open and close
    toggleModlal(state) {
        state.modalStatus = !state.modalStatus;
    },
    passData(state, data) {
        state.modalData = data
    }

}



export default {
    state, 
    mutations
}