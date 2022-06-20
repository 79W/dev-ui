import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Aunt Design',
  favicon:
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/f45ff1f1-36e8-4dbe-a439-a1a09f9184c1.svg',
  logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/f45ff1f1-36e8-4dbe-a439-a1a09f9184c1.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  hash: true,
  styles: [
    `
    html {
      touch-action: manipulation;
    }
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    html {
      min-height: 100vh;
    }
    `,
  ],
  metas: [
    {
      name: 'keywords',
      content: 'rant,react,移动端,组件库,ui',
    },
    {
      name: 'description',
      content: '基于React的移动web端组件库。',
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/en': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide/introduce',
      },
      {
        title: '快速开始',
        path: '/guide/quick-start',
      },
    ],
    '/en/guide': [
      {
        title: 'Introduce',
        path: '/en/guide/introduce',
      },
      {
        title: 'Quick Start',
        path: '/en/guide/quick-start',
      },
    ],
    '/components': [
      // {
      //   title: '布局组件',
      //   children: [],
      // },
      {
        title: '基础组件',
        children: ['components/button','components/icon'],
      },
      // {
      //   title: '表单组件',
      //   children: [],
      // },
      {
        title: '反馈组件',
        children: ['components/loading'],
      },
      // {
      //   title: '展示组件',
      //   children: [],
      // },
      // {
      //   title: '导航组件',
      //   children: [],
      // },
      // {
      //   title: '其他组件',
      //   children: [],
      // },
      // {
      //   title: '业务组件',
      //   children: [],
      // },
    ],
    '/en/components': [
      {
        title: 'Basic Components',
        children: ['components/button'],
      },
    ],
  },
  themeConfig: {
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
    carrier: 'Aunt',
    time: '10:12'
  },
  navs: {
    zh: [
      {
        title: '指南',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: 'Github',
        path: 'https://github.com/79E/Rant',
      },
    ],
    en: [
      {
        title: 'Guide',
        path: '/en/guide',
      },
      {
        title: 'Components',
        path: '/en/components',
      },
      {
        title: 'Github',
        path: 'https://github.com/79E/Rant',
      },
    ],
  },
})
