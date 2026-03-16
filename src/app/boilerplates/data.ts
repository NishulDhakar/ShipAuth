import { Boilerplate } from '@/components/boilerplates/boilerplateCard';

export const boilerplatesData: Boilerplate[] = [
    {
        id: 'shipauth-react',
        title: 'React + Supabase Auth',
        description: 'A complete authentication boilerplate using React (Vite) and Supabase.',
        command: 'npx degit NishulDhakar/shipauth-react my-app',
        tags: ['React', 'Supabase', 'Vite', 'Auth'],
        githubUrl: 'https://github.com/NishulDhakar/shipauth-react',
    },
    {
        id: 'shipauth-next',
        title: 'Next.js + Supabase Auth',
        description: 'Authentication and role-based access control template using Next.js App Router and Supabase.',
        command: 'npx degit NishulDhakar/shipauth-next my-app',
        tags: ['Next.js', 'Supabase', 'Auth', 'RBAC'],
        githubUrl: 'https://github.com/NishulDhakar/shipauth-next',
    },
    {
        id: 'shipauth-pern',
        title: 'PERN Stack Auth',
        description: 'Full-stack authentication boilerplate using PostgreSQL, Express, React, and Node.js.',
        command: 'npx degit NishulDhakar/Shipauth-pern my-app',
        tags: ['PostgreSQL', 'Express', 'React', 'Node.js'],
        githubUrl: 'https://github.com/NishulDhakar/Shipauth-pern',
    },
    {
        id: 'shipauth-laravel',
        title: 'Laravel Auth',
        description: 'Robust authentication starter kit built with Laravel.',
        command: 'npx degit NishulDhakar/shipauth-laravel my-app',
        tags: ['Laravel', 'PHP', 'Auth'],
        githubUrl: 'https://github.com/NishulDhakar/shipauth-laravel',
    },
    {
        id: 'shipauth-next-laravel',
        title: 'Next.js + Laravel API',
        description: 'A decoupled Next.js frontend communicating with a Laravel backend API for authentication.',
        command: 'npx degit NishulDhakar/shipauth-next-laravel my-app',
        tags: ['Next.js', 'Laravel', 'API', 'Decoupled'],
        githubUrl: 'https://github.com/NishulDhakar/shipauth-next-laravel',
    },
    {
        id: 'shipauth-next-mongo',
        title: 'Next.js + MongoDB Auth',
        description: 'Authentication boilerplate using Next.js and MongoDB with Mongoose.',
        command: 'npx degit NishulDhakar/shipauth-next-mongo my-app',
        tags: ['Next.js', 'MongoDB', 'Mongoose', 'Auth'],
        githubUrl: 'https://github.com/NishulDhakar/shipauth-next-mongo',
    }
];
