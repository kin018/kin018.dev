import React from 'react';
import { Bio } from '../data/PortfolioData';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaXTwitter } from 'react-icons/fa6';
import { SocialMediaIconLink } from '../styledComponents/StyledComponents';

function SocialMedia() {
  return (
    <>
      <SocialMediaIconLink
        href={Bio.socialMedia.github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub"
      >
        <GitHubIcon aria-label="GitHub" alt="GitHub" />
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={Bio.socialMedia.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <LinkedInIcon aria-label="LinkedIn" alt="LinkedIn" />
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={Bio.socialMedia.twitter}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FaXTwitter aria-label="X/Twitter" alt="X/Twitter" />
        {/* <TwitterIcon aria-label="Twitter" alt="Twitter" /> */}
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={Bio.socialMedia.instagram}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram"
      >
        <InstagramIcon aria-label="Instagram" alt="Instagram" />
      </SocialMediaIconLink>
    </>
  );
}

export default SocialMedia;
