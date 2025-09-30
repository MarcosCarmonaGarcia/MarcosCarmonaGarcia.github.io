export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://MarcosCarmonaGarcia.github.io',
    title: 'Marcos Carmona García',
    subtitle: 'Aprendiendo a programar, pentesting y hacking ético',
    description: 'Web developer and designer',
    image: {
        src: '/boca_cerrada.png',
        alt: 'Marcos Carmona García'

    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/MarcosCarmonaGarcia'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Terminos de Servicio',
            href: '/terms'
        },

    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/MarcosCarmonaGarcia'
        },
        {
            text: 'X',
            href: 'https://x.com/MarcosCarm88232'
        }

    ],
    hero: {
        title: 'Hola a todos, bienvenidos a mi sitio en la web!',
        text: "Me llamo Marcos Carmona García. Soy programador aficionado en constante aprendizaje: estudio lenguajes y herramientas para desarrollo y seguridad. Me interesa especialmente el pentesting y el hacking ético, y practico con ejercicios y proyectos para mejorar mis habilidades.",
        image: {
            src: '/yo.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contacto',
                href: '/contact'
            }
        ]
    },


    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
