import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutPage2 from '@/components/AboutPage2'
import SkillPage from '@/components/SkillPage'
import ProjectPage from '@/components/ProjectPage'
import FuturePage from '@/components/FuturePage'
import FooterPage from '@/components/FooterPage'
import GalleryPage from '@/components/GalleryPage'
import CodePage from "@/components/CodePage";
import DesignPage from "@/components/DesignPage";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: {
        container1: HomePage,
        container2: AboutPage2,
        container3: SkillPage,
        container4: ProjectPage,
        container5: FuturePage,
        container6: FooterPage
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/gallery',
      name: 'GalleryPage',
      components: {
        container1: GalleryPage
      }
    },
    {
      path: '/code',
      name: 'CodePage',
      components: {
        container1: CodePage
      }
    },
    {
      path: '/design',
      name: 'DesignPage',
      components: {
        container1: DesignPage
      }
    }
  ]
})
