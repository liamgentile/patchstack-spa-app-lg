import { createStore } from 'vuex'

// currentRisk state will allow us to populate EditRisk and ViewRisk page with the selected risk
export default createStore({
state: {
    currentRisk: null
  }
})