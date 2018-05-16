module.exports = {
  title: 'Tilson Software Development',
  description: 'A space to record past projects and to present the skill-sets of the Software Development Team at Tilson Technology',
  head: [
    ['link', { rel: 'icon', href: '/img/tsquaresmall.jpg' }]
  ],
  configurewebpack: {
    resolve: {
      alias: {
        '@assets': '/assets/img'
      }
    }
  },
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Team',
        link: '/team/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
    ],
    sidebar: {
      '/team/': [
        'members',
        'skillsets',
      ],
      '/projects/': [
        'broadwayhd',
        'seascribe',
        'kleinschmidt',
        'firstnetme'
      ]
    }
  }
};