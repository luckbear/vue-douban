import request from 'superagent'
import jsonp from 'superagent-jsonp'



const state = {
    events: [],
    skip: 0,
    eventDetail: {}

}

const mutations = {

    //加载事件主题列表
    loadMore(state, para) {
        state.skip += 3;
        state.events = state.events.concat(para)
    },

    //加载事件详情
    getEventDetail(state, para) {
        state.eventDetail = para
    }
}

const actions = {
    //获取事件主题
    loadMore({
        commit,
        state
    }) {
        request.get('https://api.douban.com/v2/event/list?loc=108288&start=' + state.skip + '&count=3')
            .use(jsonp)
            .end((err, res) => {
                if (res) {
                    commit('loadMore', res.body.events)
                }
            })
    },
    //获取事件详情
    getEventDetail({
        commit
    }, id) {
        request.get('https://api.douban.com/v2/event/' + id)
            .use(jsonp)
            .end((err, res) => {
                if (res) {
                    commit('getEventDetail', res.body)
                }
            })
    }

}


export default {
    state,
    mutations,
    actions
}