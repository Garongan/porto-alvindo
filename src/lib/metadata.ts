import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Alvindo Jatmiko', // TODO: Add a custom title
  description = "I’m programmer with strong will to create clean code and implement the clean architecture, Work as team, fast response, and hardworker.", // TODO: Add a custom description
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/avatar.jpg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL('https://porto-alvindo.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
