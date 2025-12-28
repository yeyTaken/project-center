import type { MetaRecord } from 'nextra'
import { FaBook } from 'react-icons/fa'

const docs = (
  <span className="font-semibold" style={{ display: 'flex', alignItems: 'center' }}>
    <FaBook style={{ marginRight: '0.5em' }} />
    Docs
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
    
  },
} satisfies MetaRecord