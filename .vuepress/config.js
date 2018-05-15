module.exports = {
  title: 'Tilson Software Development',
  description: 'A space to record past projects and to present the skill-sets of the Software Development Team at Tilson Technology',
  configurewebpack: {
    resolve: {
      alias: {
        '@media': 'img'
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
        link: 'team'
      },
      {
        text: 'Projects',
        link: '/projects'
      },
    ]
  }
};