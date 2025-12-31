import Image from 'next/image'
import Link from 'next/link'

type Creator = {
  url: string
  name: string
  img: string
}

const creators: Creator[] = [
  {
    url: 'https://github.com/yeytaken',
    name: 'Israel R. Jatobá',
    img: '/images/R.png',
  },
]

export function CreatedBy() {
  return (
    <div>
      <b className="mt-2 block text-xs">Criado por:</b>

      <div className="mt-2 flex gap-2">
        {creators.map(creator => (
          <Link
            key={creator.url}
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={creator.img}
              alt={creator.name}
              title={creator.name}
              width={32}
              height={32}
              className="nextra-border rounded-sm border"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
