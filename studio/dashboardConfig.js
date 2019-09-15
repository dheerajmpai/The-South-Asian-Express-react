export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d7e4e640da45295b1f76aed',
                  title: 'Sanity Studio',
                  name: 'The-South-Asian-Express-react-studio',
                  apiId: 'fe6f932e-dc11-4d98-8c91-35331640bc25'
                },
                {
                  buildHookId: '5d7e4e64866ff14c664856e2',
                  title: 'Blog Website',
                  name: 'The-South-Asian-Express-react',
                  apiId: '23d59ec2-0393-4b4b-811a-3b0016f36480'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dheerajmpai/The-South-Asian-Express-react',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://The-South-Asian-Express-react.netlify.com', category: 'apps'}
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
