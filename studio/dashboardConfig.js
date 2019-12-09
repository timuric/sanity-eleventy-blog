export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5dee7303f340f24e9e512482',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ukpyyni8',
                  apiId: '36392586-0464-47fd-9146-7a438d545442'
                },
                {
                  buildHookId: '5dee7304f340f24e9e512483',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ff8cexb3',
                  apiId: '4571c28c-ce46-4f39-99c4-7378c3b2b163'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timuric/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ff8cexb3.netlify.com', category: 'apps'}
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
