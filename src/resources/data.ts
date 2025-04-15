import { IconType } from "react-icons";
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';

export interface SocialMediaLink {
  icon: IconType;
  label: string;
  href: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/+5561998896788'
  },
  {
    icon: HiOutlineMail,
    label: 'Email',
    href: 'mailto:matheus.rodrigues.esoft@gmail.com'
  },
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/matheus-rodrigues-in/'
  },
  {
    icon: AiOutlineGithub,
    label: 'GitHub',
    href: 'https://github.com/MatheusRodriguesEsoft'
  }
];
