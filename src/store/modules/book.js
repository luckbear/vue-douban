import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  hotMovies: {title:"最受关注图书｜虚构类"},
  newMovies: {title:"最受关注图书｜非虚构类"},
  topMovies: {title:"旅行在路上"},
  movies:[],
  movieTags: [
    {
      title: '不可饶恕的女人们',
      href: 'https://m.douban.com/doulist/35573',
      color: '#42BD56'
    },
    {
      title: '爱欲书',
      href: 'https://m.douban.com/doulist/38088147',
      color: '#FF4055'
    },
    {
      title: '他们还写侦探小说',
      href: 'https://m.douban.com/doulist/645579',
      color: '#4F9DED'
    },
    {
      line: true
    },
    {
      title: '人生识字始忧患',
      href: 'https://m.douban.com/doulist/192653',
      color: '#CC3344'
    },
    {
      title: '詩歌書店',
      href: 'https://m.douban.com/doulist/89925',
      color: '#FFAC2D'
    },
    {
      title: '尝试理解人类变化无常不可测心理相关小荐',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#3BA94D'
    }
  ]
}

const mutations = {
  getBook (state, payload) {
    switch (payload.tag) {
      case 'hotMovies':
        state.hotMovies.movie = payload.res
        state.movies.push(state.hotMovies)
        break
      case 'newMovies':
        state.newMovies.movie = payload.res
        state.movies.push(state.newMovies)
        break
      case 'topMovies':
        state.topMovies.movie = payload.res
        state.movies.push(state.topMovies)
        break
      default:
        state.hotMovies.movie = payload.res
        // state.movies.push(state.hotMovies)
    }
  }
}

const actions = {
  /**
   * Getting movies
   * q: in_theaters, coming_soon, top250
   * count: 8
   */
  getBook ({ commit }) {
    request
      .get('https://api.douban.com/v2/book/search?q=虚构类&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {   
          commit({
            type: 'getBook',
            tag: 'hotMovies',
            res: res.body.books
          })
        }
      })
    request
      .get('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getBook',
            tag: 'newMovies',
            res: res.body.books
          })
        }
      })
    request
      .get('https://api.douban.com/v2/book/search?q=旅行&count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getBook',
            tag: 'topMovies',
            res: res.body.books
          })
        }
      })
  }
}

export default {
  state,
  mutations,
  actions
}
