export interface WorkEntry {
  slug: string;
  title: string;
  description: string;
  metadata: string;
  eyebrow: string;
  index: string;
  featured: boolean;
  reverse: boolean;
  capabilities: string[];
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
    role: 'primary' | 'editor' | 'overview';
  }[];
  context: string;
  documentation: string;
}
export const work: WorkEntry[] = [
  {
    slug: 'santoso-logistic',
    title: 'Santoso Logistic website experience',
    description:
      'A company website and CMS experience that organizes complex logistics content into a clearer, responsive, SEO-conscious, and maintainable public interface.',
    metadata: 'Website Design · CMS Experience',
    eyebrow: 'Primary featured case study',
    index: '01 / 02',
    featured: true,
    reverse: false,
    capabilities: [
      'Content Structure',
      'Responsive UI',
      'CMS Experience',
      'Maintainability',
    ],
    images: [
      {
        src: '/assets/sanlog-logistic.png',
        width: 300,
        height: 450,
        alt: 'Santoso Logistic website and content management interface composition',
        role: 'primary',
      },
    ],
    context:
      'Organizing logistics content across a public company website and a content management experience.',
    documentation: '/work/santoso-logistic/',
  },
  {
    slug: 'content-operations',
    title: 'Broadcast-like Content Management Platform',
    description:
      'A content management platform with broadcast-like workflows for calendar-based scheduling, live events, playlists, now playing, device synchronization, monitoring, app editing, and playback control.',
    metadata: 'Product Design · UI/UX',
    eyebrow: 'Selected work',
    index: '02 / 02',
    featured: false,
    reverse: true,
    capabilities: [
      'Scheduling',
      'Live Events',
      'Playlists',
      'Now Playing',
      'Device Sync',
      'Monitoring',
      'App Editor',
    ],
    images: [
      {
        src: '/assets/content-operations-editor.png',
        width: 663,
        height: 418,
        alt: 'Content operations editor with media library, composition canvas, timeline, and playback controls',
        role: 'editor',
      },
      {
        src: '/assets/item-dummy-1.png',
        width: 300,
        height: 450,
        alt: 'Monitoring, scheduling, and multi-device management interface overview',
        role: 'overview',
      },
    ],
    context:
      'Coordinating content scheduling, playback, and monitoring across connected devices.',
    documentation: '/work/content-operations/',
  },
];
