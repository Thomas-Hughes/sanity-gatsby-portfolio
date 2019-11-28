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
                  buildHookId: '5ddf893c63eafdacc0c632cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rw4hpv3x',
                  apiId: '192e114c-db2e-4e1a-ab14-1fd6b832e2e8'
                },
                {
                  buildHookId: '5ddf893cf878183680610ab8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-v69a35iv',
                  apiId: 'a38b3467-a641-477d-83a0-5388d1f277d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Thomas-Hughes/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-v69a35iv.netlify.com',
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
