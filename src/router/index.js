import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';
import Board from '@/components/views/Board';

Vue.use(Router);

export default new Router({
  routes: [
    {
      component: Home,
      name: 'Home',
      path: '/'
    }, {
      component: Board,
      name: 'board',
      path: '/board/:id',
      props: true // pass parameters of the url to the component
    }
  ]
});
