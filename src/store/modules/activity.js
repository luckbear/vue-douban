import request from 'superagent'
import jsonp from 'superagent-jsonp'



const state = {
    events: [],
    skip: 0
}

const mutations = {
    loadMore(state, para) {
        state.skip += 3;
        state.events = para.events.concat(para)
    }
}

const actions = {
    loadMore({commit,state}){
        request.get('https://api.douban.com/v2/event/list?loc=108288&start='+state.skip+'&count=3')
        .use(jsonp)
        .end((err,res)=>{
            commit('loadMore',res.body.events)
        }).catch(error=>{
            console.log(error);
        })
    }
}


export default {
    state,
    mutations,
    actions
}