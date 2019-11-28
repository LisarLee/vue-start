import Vue from 'vue';
import Vuex from 'vuex';

const getModules = (controllers,moduleNameSuffix = '')=>{
    const modules = {}
    if(controllers){
        controllers.keys()
    }
    return modules
}

export default controller =>{
    Vue.use(Vuex)
    const modules = getModules
}