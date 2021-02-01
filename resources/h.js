const {
    uiDesign,
    readingAndWriting,
    programming,
    assets,
    infrastructure,
    jobs,
    toolsAndUtilities,
} = require('../constants/categories')
const { website } = require('../constants/links')

module.exports = [
    {
        name: 'Hack Design',
        categories: [uiDesign.learn],
        description:
            'An easy to follow design course for people who do amazing things. Receive a design lesson in your inbox each week, hand crafted by a design pro. Learn at your own pace, and apply it to your real life work – no fake projects here.',
        links: {
            [website]: 'https://hackdesign.org/',
        },
        icon: 'https://hackdesign.org/favicon.ico',
    },
    {
        name: 'Hacker News',
        categories: [readingAndWriting.platforms],
        links: {
            [website]: 'https://news.ycombinator.com/',
        },
        icon: 'https://news.ycombinator.com/favicon.ico',
    },
    {
        name: 'Hacker Noon',
        categories: [readingAndWriting.platforms],
        description: 'How hackers start their afternoons.',
        keywords: ['blockchain', 'bitcoin', 'tech', 'crypto', 'software-development', 'react', 'vue'],
        links: {
            [website]: 'https://hackernoon.com/',
        },
        icon: 'https://hackernoon.com/favicon-32x32.png',
    },
    {
        name: 'HackerRank',
        categories: [programming.codeChallenges],
        description:
            'HackerRank is the market-leading technical assessment and remote interview solution for hiring developers. Learn how to hire technical talent from anywhere!',
        links: {
            [website]: 'https://www.hackerrank.com/',
        },
        icon: 'https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png',
    },
    {
        name: 'Hackr.io',
        categories: [programming.learn],
        description:
            'Google search shows you hundreds of Programming courses/tutorials, but Hackr.io tells you which is the best one. Find the best online courses &amp; tutorials recommended by the Programming community. Pick the most upvoted tutorials as per your learning style: video-based, book, free, paid, for beginners, advanced, etc.',
        links: {
            [website]: 'https://hackr.io/',
        },
        icon: 'https://hackr.io/assets/images/programming-images/programming-favicon-32x32.png',
    },
    {
        name: 'Happy Hues',
        categories: [uiDesign.colorPalettes],
        description:
            'See color palette inspiration on a real example website. As you click on different palettes every color on this site updates to give you context of how that color could be used for your design or illustration projects.',
        links: {
            [website]: 'https://www.happyhues.co/',
        },
        icon:
            'https://assets.website-files.com/5dd40aa8049df8748c72d0ee/5dd9b92056a2d6ed5e537c61_happy-hues-apple-icon.png',
    },
    {
        name: 'Hashnode',
        categories: [readingAndWriting.platforms],
        description:
            'Hashnode is a free content creation platform and community that allows you to publish articles on your own domain and helps you stay connected with a growing developer community.',
        links: {
            [website]: 'https://hashnode.com/',
        },
        icon: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1592400819640/7VL8RW7wc.png',
    },
    {
        name: 'Hatchful',
        categories: [assets.logos],
        description: 'Create stunning logos in seconds - no design skills required!',
        links: {
            [website]: 'https://hatchful.shopify.com/',
        },
    },
    {
        name: 'Hemingway App',
        categories: [readingAndWriting.utilities],
        links: {
            [website]: 'https://hemingwayapp.com/',
        },
        icon: 'https://hemingwayapp.com/img/favicon/favicon-96x96.png',
    },
    {
        name: 'Hero Patterns',
        categories: [assets.images],
        description: 'Zondicons.',
        links: {
            [website]: 'http://www.heropatterns.com/',
        },
        icon: 'http://www.heropatterns.com/favicon.ico',
    },
    {
        name: 'Heroicons',
        categories: [assets.icons],
        description: 'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
        links: {
            [website]: 'https://heroicons.com/',
        },
        icon: 'https://heroicons.com/_next/static/media/favicon-32x32.eee32601ba9d4702f841835990ed3801.png',
    },
    {
        name: 'Heroku',
        categories: [infrastructure.hosting],
        description:
            'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
        links: {
            [website]: 'https://www.heroku.com/',
        },
        icon: 'https://www.herokucdn.com/favicon.ico',
    },
    {
        name: 'High Compress',
        categories: [assets.images],
        links: {
            [website]: 'https://www.highcompress.com/online-compress',
        },
        icon: 'https://www.highcompress.com/apple-touch-icon.html',
    },
    {
        name: 'Highcharts',
        categories: [programming.charts],
        description: 'Highcharts - Interactive JavaScript charts for your web pages.',
        keywords: [
            'highcharts',
            'charts',
            'javascript charts',
            'ajax charts',
            'plots',
            'line charts',
            'bar charts',
            'pie charts',
            'javascript plots',
            'ajax plots',
        ],
        links: {
            [website]: 'https://www.highcharts.com/',
        },
        icon: 'https://www.highcharts.com/images/ico/favicon-96x96.png',
    },
    {
        name: 'hire.AR',
        categories: [jobs.boards],
        description:
            'Search augmented reality jobs, AR Jobs, Virtual Reality Jobs, VR Jobs. Jobs in AR. The best AR jobs for engineers, developers, designers, artists, & more.',
        links: {
            [website]: 'https://hire.ar/',
        },
        icon: 'https://uploads-ssl.webflow.com/5fb34e1a86110331f179e419/5fba8ba82dc21a86d020bff8_hire%20.AR%20(1).png',
    },
    {
        name: 'Hired',
        categories: [jobs.boards],
        description:
            'With Hired your job search has never been easier! Simply create a profile & vetted companies compete for you, reaching out with salary & equity upfront.',
        links: {
            [website]: 'https://hired.com/',
        },
        icon: 'https://hired.com/assets/favicon-f8bba6617971bf8553966d715a950b9b12988ec72984a3c3453c404cda6f2377.ico',
    },
    {
        name: 'Hloom',
        categories: [jobs.resumeBuilders],
        description:
            'We have the largest library of free Microsoft Office and Google Doc resume templates, paired with a professional resume builder and additional writing features.',
        links: {
            [website]: 'https://www.hloom.com/',
        },
        icon: 'https://www.hloom.com/favicon.ico',
    },
    {
        name: 'Hoppscotch',
        categories: [programming.apiBuilding],
        description: 'Helps you create requests faster, saving precious time on development.',
        keywords: [
            'hoppscotch',
            'hopp scotch',
            'hoppscotch online',
            'hoppscotch app',
            'postwoman',
            'postwoman chrome',
            'postwoman online',
            'postwoman for mac',
            'postwoman app',
            'postwoman for windows',
            'postwoman google chrome',
            'postwoman chrome app',
            'get postwoman',
            'postwoman web',
            'postwoman android',
            'postwoman app for chrome',
            'postwoman mobile app',
            'postwoman web app',
            'api',
            'request',
            'testing',
            'tool',
            'rest',
            'websocket',
            'sse',
            'graphql',
            'socketio',
        ],
        links: {
            [website]: 'https://hoppscotch.io/',
        },
        icon: 'https://hoppscotch.io/_nuxt/icons/icon_512x512.9834b3.png',
    },
    {
        name: 'Hostman',
        categories: [infrastructure.hosting],
        description: 'Cloud hosting for startups and developers.',
        links: {
            [website]: 'https://hostman.com/',
        },
        icon: 'https://hostman.com/favicon.ico',
    },
    {
        name: 'HTML5 Accessibility',
        categories: [toolsAndUtilities.accessibility],
        links: {
            [website]: 'https://www.html5accessibility.com/',
        },
        icon: 'https://www.html5accessibility.com/favicon.ico',
    },
    {
        name: 'HTML5 UP',
        categories: [programming.templates],
        description:
            'Responsive HTML5 and CSS3 site templates designed by @ajlkn and released under the Creative Commons license.',
        keywords: ['html5', 'css3', 'responsive', 'site template', 'website template'],
        links: {
            [website]: 'https://html5up.net/',
        },
        icon: 'https://html5up.net/assets/icons/apple-touch-icon-precomposed.png',
    },
    {
        name: 'humaaans',
        categories: [assets.illustrations],
        description: 'Mix-&-match illustrations of people with a design library for InVIsion Studio and Sketch.',
        links: {
            [website]: 'https://www.humaaans.com/',
        },
        icon: 'https://assets.website-files.com/5bff8886c3964a992e90d465/5c00a0ce59aa851331d34687_favicon-256.png',
    },
]
