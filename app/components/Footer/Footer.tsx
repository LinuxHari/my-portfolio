'use client'

import dynamic from 'next/dynamic';
import { FC } from "react";
import Logo from "../../components/Logo/Logo";
const SocialLinks = dynamic(() => import('./SocialLinks'), { ssr: false });

const Footer: FC = () => {
  return (
    <footer
      data-testid="footer"
      data-cy="footer"
      className="flex flex-col justify-end gap-2 px-small pb-small md:mt-section md:min-h-[80vh]"
    >
      <SocialLinks />
      <div className="flex flex-wrap justify-between gap-x-3">
        <span className="text-nowrap">©2024 Linux Hari</span>
        <span className="text-nowrap">Rocking Since 2023</span>
      </div>
      <Logo />
    </footer>
  );
};

export default Footer;
