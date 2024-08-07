import BilibiliIcon from '@/components/icons/platform/bilibili-icon';
import NeteaseCloudMusicIcon from '@/components/icons/platform/neteaseCloudMusic-icon';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { siteConfig } from '@/config/site';
import type { ReactNode } from 'react';
interface SocialIconsProps {}
interface Icon {
  name: string;
  icon: ReactNode;
  link: string;
  bgColor: string;
}
const iconSet: Icon[] = [
  {
    name: 'bilibili',
    icon: <BilibiliIcon className='w-6 h-6' />,
    link: siteConfig.links.bilibili,
    bgColor: '#4b86d2',
  },
  {
    name: 'neteaseCloudMusic',
    icon: <NeteaseCloudMusicIcon className='w-6 h-6' />,
    link: siteConfig.links.neteaseCloudMusic,
    bgColor: '#d93a3a',
  },
  {
    name: 'qq',
    icon: <i className='icon-[mingcute--qq-fill] w-6 h-6' />,
    link: siteConfig.links.qq,
    bgColor: '#1e6fff',
  },
  {
    name: 'wechat',
    icon: <i className='icon-[mingcute--wechat-fill] w-6 h-6' />,
    link: siteConfig.links.wechat,
    bgColor: '#2DC100',
  },
  {
    name: 'github',
    icon: <i className='icon-[mingcute--github-line] w-6 h-6' />,
    link: siteConfig.links.github,
    bgColor: '#181717',
  },
];

export const SocialIcons = ({}: SocialIconsProps) => {
  return (
    <div className='flex items-center justify-center space-x-4'>
      {iconSet.map(({ name, icon, link, bgColor }) => (
        <Card
          key={name}
          className='w-10 h-10 flex items-center justify-center aspect-square rounded-full'
          style={{ backgroundColor: bgColor }}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={link}
                  className='flex items-center justify-center w-full h-full text-white'>
                  {icon}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Card>
      ))}
    </div>
  );
};
