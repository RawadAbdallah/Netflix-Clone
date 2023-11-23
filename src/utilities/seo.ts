type SEOType = {
  title: string
  description: string
}

/**
 * `SEO` add metatags to the page
 * 
 * @param title 
 * @param description
 * 
 * ```tsx
 * 
 * import { SEO } from '@/utilities'
 * 
 *   SEO({
    title: 'Netflix',
    description:
      'Sacha Baron Cohen stars as a misogynistic tyrant who ends up ...'
  })
 * ``` 
 */
export default function SEO({ title, description }: SEOType) {
  document.title = title

  const des = document.querySelector('meta[name="description"]')
  if (des) {
    des.setAttribute('content', description)
  }
}
