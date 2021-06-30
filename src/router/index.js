import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import TermsOfUse from '@/components/TermsOfUse';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/terms-of-use',
      name: 'TermsOfUse',
      component: TermsOfUse,
    },
  ],
});
