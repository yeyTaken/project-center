import { settings } from '@/lib'
import type { MetaRecord } from 'nextra'
import { FaBook, FaProjectDiagram } from 'react-icons/fa'

const docs = (
  <span className="font-semibold" style={{ display: 'flex', alignItems: 'center' }}>
    <FaBook style={{ marginRight: '0.5em' }} />
    Documentação
  </span>
);

const project = (
  <span className="font-semibold" style={{ display: 'flex', alignItems: 'center' }}>
    <FaProjectDiagram style={{ marginRight: '0.5em' }} />
    Projeto
  </span>
)


export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      copyPage: false,
      layout: 'full',
      toc: false,
    },
  },
  // about: {
  //   type: 'page',
  //   display: 'hidden',
  //   theme: {
  //     layout: "full",
  //     breadcrumb: false, // trilha de navegação: home > docs > updates
  //     sidebar: false,
  //     pagination: false,
  //     toc: false,
  //   }
  // },
  docs: {
    type: 'page',
    title: docs,
    theme: {
      // footer: false,
    }
  },
  project: {
    type: "menu",
    title: project,
    items: {
      "project-docs-install-guide": {
        title: 'Guia de instalação',
        href: '/docs/docs-clone-guide'
      },
      github: {
        title: 'Arquivo oficial',
        href: `${settings.links.github}/tree/main/template-docs`
      }
    }
  }
} satisfies MetaRecord