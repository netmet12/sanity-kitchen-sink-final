export default {
  widgets: [
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
                  buildHookId: '5ec68c97d184e3a3a5e650ab',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-final-studio',
                  apiId: '3dee17f1-2ffb-4558-b504-b943239e7a81'
                },
                {
                  buildHookId: '5ec68c97fd1cc6f8e9c61d9a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-final',
                  apiId: '182c2257-a796-4c9c-bd38-cc6d92394cf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netmet12/sanity-kitchen-sink-final',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-final.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
