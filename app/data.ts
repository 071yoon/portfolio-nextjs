type Project = {
  name: string
  description: string
  link?: string
  detail: string[]
  stack: string[]
  id: string
}

type WorkExperience = {
  company: string
  image: string
  title: string
  start: string
  end: string
  description: string
  project: Project[]
  stack: string[]
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const ABOUT_ME: {
  name: string
  description: string
  image: string
} = {
  name: 'YeongGi Yoon',
  description: 'Software Engineer',
  image: 'yeonggi.gif',
}

export const PROJECTS: Project[] = [
  {
    name: 'Modoco',
    description: '온라인상에서 모여 함께 학습할 수 있는 서비스 개발',
    link: 'https://github.com/SWM-FIRE/modoco-frontend',
    detail: [
      'Project Manager로서 Project Lead',
      '함수형 컴포넌트 및 React Hook을 활용하여 재사용 가능한 컴포넌트들을 활용한 개발 진행',
      'ES6 의 최신문법을 적극 활용하여 개발',
      '서버의 데이터 패칭 및 상태 업데이트를 용이하게 사용하기 위한 React-Query 사용',
      'WebRTC를 활용한 p2p 방식의 실시간 미디어 를 구현하기 위한 시그널링 서버 및 클라이언트 개발',
      'AWS Amplify를 활용한 Front-End CD 적용',
      'React Testing Library 와 Jest를 활용한 Unit test 작성',
      'Cypress를 활용한 e2e 테스트 코드 작성',
      'Github Action을 활용한 테스트코드 CI 적용',
      'OAuth 및 유저의 인증을 JWT를 활용하여 로그인 서비스 구현',
      '반응형 및 SkeletonUI를 활용하여 CLS 0.002 까지 최적화',
      'APM인 new-relic을 활용하여 오류 로그를 보고 FE 오류 해결',
      'AWS lambda 함수를 활용하여 serverless한 초대링크 알고리즘 개발',
    ],
    stack: ['React', 'Typescript', 'WebRTC', 'SocketIO'],
    id: 'modoco',
  },
  {
    name: 'Decrypto',
    description: 'Web에서 즐길 수 있는 Board Game 제작',
    link: 'https://github.com/AndroidNetrunner/decrypto/',
    detail: [
      'React.js, TypeScript를 활용한 FE 개발',
      '함수형 컴포넌트 및 리액트 훅을 활용하여 재사용 가능한 컴포넌트들을 활용한 개발',
      '이벤트 기반 양방향 통신 및 namespace 관리를 활용하기 위해 SocketIO를 활용한 클라이언트 및 서버 개발',
    ],
    stack: ['React', 'Typescript', 'SocketIO'],
    id: 'decrypto',
  },
  {
    name: 'Animation Playground',
    description: '다양한 애니메이션 효과를 체험할 수 있는 서비스 개발',
    link: 'https://github.com/hetae/animation-playground',
    detail: [
      'React.js, TypeScript를 활용한 FE 개발',
      '함수형 컴포넌트 및 리액트 훅을 활용하여 재사용 가능한 컴포넌트들을 활용한 개발',
      'GSAP을 활용한 다양한 애니메이션 효과 구현',
    ],
    stack: ['React', 'Typescript', 'GSAP'],
    id: 'animation-playground',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hyundai AutoEver',
    title: 'Software Engineer',
    image: 'autoever.png',
    start: '2024.01',
    end: 'Present',
    description: '현대오토에버에서 소프트웨어 엔지니어로 재직 중',
    project: [
      {
        name: 'Hyundai Glovis Vehicle Location Management System',
        description: '글로비스 차량 위치 관리 시스템(VLMS) 개발',
        detail: [
          'Web FrontEnd 개발',
          'Web BackEnd 개발',
          '외부 시스템과의 Restful API Interface 서버 개발',
          'MQTT 통신을 위한 Publish/Subscribe 서버 개발',
          'DB 설계 및 운영',
          '시스템 내 물리 태그들과의 최적화 통신을 위한 분산 처리 시스템 개발',
        ],
        stack: ['Vue', 'Typescript', 'Spring Boot', 'MariaDB', 'MQTT'],
        id: 'vlms',
      },
      {
        name: 'Hyundai Motor Group Smart Device Operating Platform 개발',
        description:
          '현대자동차그룹 스마트 디바이스 운영 플랫폼(SDOP) 개발 및 내제화',
        detail: [
          '스마트태그로부터 수집된 데이터 처리 및 품질 서비스로 제공하는 백엔드 시스템 개발',
          '시스템 장애 대응을 위한 모니터링 시스템 개발',
          'SDOP Web FrontEnd 개발',
        ],
        stack: ['Vue', 'Typescript', 'Spring Boot', 'MariaDB'],
        id: 'sdos',
      },
    ],
    stack: ['Vue', 'Typescript', 'Spring Boot', 'MariaDB'],
    id: 'hyundai-autoever',
  },
  {
    company: 'Toss',
    title: 'FrontEnd Engineer',
    image: 'toss.png',
    start: '2023.01',
    end: '2023.06',
    description: '토스에서 UX Engineer Assistant 로 재직',
    project: [
      {
        name: 'Rally',
        description: 'Toss 사내 애니메이션 라이브러리 개발 및 유지보수',
        link: 'https://toss.im/slash-23/session-detail/B2-2',
        detail: [
          'Rally 라이브러리의 새로운 애니메이션 효과 추가 및 기존 효과 개선',
          'Rally 라이브러리의 성능 최적화 및 버그 수정',
        ],
        stack: ['React', 'Typescript', 'GSAP'],
        id: 'rally',
      },
      {
        name: 'TDS (Toss Design System)',
        description: '토스 사내 디자인 시스템 개발 및 유지보수',
        link: 'https://toss.im/slash-22/sessions/1-3',
        detail: [
          'TDS 컴포넌트의 새로운 기능 추가 및 기존 기능 개선',
          'TDS 컴포넌트의 접근성 향상 및 버그 수정',
        ],
        stack: ['React', 'Typescript', 'Framer'],
        id: 'tds',
      },
    ],
    stack: ['React', 'Typescript', 'GSAP'],
    id: 'toss',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
