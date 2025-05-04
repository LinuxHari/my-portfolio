'use client'

import { SocialLink, socialLinks } from './FooterData'
import Social from './Social'

const SocialLinks = () => {
  return (
    <div className="mb-small flex flex-wrap gap-small gap-y-5 md:gap-y-10">
        {socialLinks.slice(0, -1).map(({ label, link }: SocialLink) => (
          <Social key={label} label={label} link={link} />
        ))}
        <Social
          key={socialLinks[socialLinks.length - 1].label}
          label={typeof window !== "undefined" && window.innerWidth < 500? "Email Me": socialLinks[socialLinks.length - 1].label}
          link={socialLinks[socialLinks.length - 1].link}
        />
      </div>
  )
}

export default SocialLinks