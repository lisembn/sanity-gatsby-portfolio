export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623b09564110055f3461b6ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-etty7b7c',
                  apiId: '9f969e94-4036-410d-8f6d-8a5c3afab090'
                },
                {
                  buildHookId: '623b09570c1e3e61ee7cec4f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tukh1yxq',
                  apiId: '896cb17e-92f5-4c15-8358-805aa93c2657'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lisembn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tukh1yxq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
