export const navLinks = [
    { id: 1, href: '/about', title: 'Про нас' },
    {
        id: 2, href: '/instructors', title: 'Інструктори', drop: [
            { href: '/instructors/ava-miler', title: 'Ава Милер' },
            { href: '/instructors/ivan-smile', title: 'Іван Смайл' },
            { href: '/instructors/sofia-mitchel', title: 'Софія Мітчел' },
            { href: '/instructors/maxim-smith', title: 'Максим Сміт' },
            { href: '/instructors/tatyana-yuhno', title: 'Тетяна Юхно' },
        ]
    },
    {
        id: 3, href: '/classes', title: 'Класи', drop: [
            { href: '/classes/ashtanga-yoga', title: 'Аштанга йога' },
            { href: '/classes/bikram-yoga', title: 'Бікрам йога' },
            { href: '/classes/kundalIni-yoga', title: 'Кундаліні йога' },
            { href: '/classes/hatha-yoga', title: 'Хатха йога' },
        ]
    },
    { id: 4, href: '/gallery', title: 'Галерея' },
    { id: 5, href: '/blog', title: 'Блог' },
    { id: 6, href: '/contacts', title: 'Контакти' },
]

export const classesData = [
    { href: '/classes/ashtanga-yoga', title: 'Аштанга йога', image: '/classes-1.jpg' },
    { href: '/classes/bikram-yoga', title: 'Бікрам йога', image: '/classes-2.jpg' },
    { href: '/classes/kundalIni-yoga', title: 'Кундаліні йога', image: '/classes-3.jpg' },
    { href: '/classes/hatha-yoga', title: 'Хатха йога', image: '/classes-4.jpg' },
    { href: '/classes/bikram-yoga', title: 'Бікрам йога', image: '/classes-2.jpg' },
]

// Картинка формируется /instructors/[slug].jpg
// Например /instructors/ava-miler.jpg

export const instructorsData = [
    {
        name: 'Ава Милер', direction: 'Хатха йога', slug: 'ava-miler', contacts: {
            tel: '+38 066 196-56-44', email: 'avamiler@gmail.com', socials: ['tel', 'inst', 'twit']
        }
    },
    {
        name: 'Иван Смайл', direction: 'Аштанга йога', slug: 'ivan-smile', contacts: {
            tel: '+38 066 196-56-44', email: 'avamiler@gmail.com', socials: ['tel', 'inst', 'twit']
        }
    },
    {
        name: 'София Митчел', direction: 'Кундалини йога', slug: 'sofia-mitchel', contacts: {
            tel: '+38 066 196-56-44', email: 'avamiler@gmail.com', socials: ['tel', 'inst', 'twit']
        } },
    {
        name: 'Максим Смит', direction: 'Бикрам йога', slug: 'maxim-smith', contacts: {
            tel: '+38 066 196-56-44', email: 'avamiler@gmail.com', socials: ['tel', 'inst', 'twit']
        } },
    {
        name: 'Тетяна Юхно', direction: 'Бикрам йога', slug: 'tatyana-yuhno', contacts: {
            tel: '+38 066 196-56-44', email: 'avamiler@gmail.com', socials: ['tel', 'inst', 'twit']
        } },
]

export const faqList = [
    { id: 1, title: 'Чи можу я прийти на заняття увечері?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },
    { id: 2, title: 'Як вибрати відповідний клас для свого рівня підготовки?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },
    { id: 3, title: 'Що потрібно одягнути на заняття йогою?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },
    { id: 4, title: 'Як довго видно результати від практики йоги?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },
    { id: 5, title: 'Чи можу я займатися йогою, якщо у мене є травми чи обмеження?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },
    { id: 6, title: 'Які переваги приносить медитація у рамках занять йогою?', desc: 'Так, ви можете прийти на заняття увечері. Вечорами ми пропонуємо заняття хатха-йогою, аштанга-йогою та медитацією. Приходьте, ми будемо раді бачити вас.' },

]

export const reviewsData = [
    { image: '/review-1.jpg', name: 'Олексій Іванов', desc: 'Я вперше спробував йогу в студії Віньяса і був вражений теплим прийомом і турботою. Заняття не тільки ефективні, а й приносять задоволення. Рекомендую всім, хто шукає гармонію та силу.' },
    { image: '/review-2.jpg', name: 'Еліза Коллінз', desc: 'Зачарована професіоналізмом інструкторів та гарним дизайном студії. Я знайшла тут не тільки чудові уроки, а й підтримку свого особистого шляху йоги. Дякую, Віньяса' },
    { image: '/review-3.jpg', name: 'Ганна Миронова', desc: 'Дуже вдячна студії "Віньяса" за надихаючі заняття та турботу про кожного учня. Тут я навчилася чути своє тіло і знайшла шлях до внутрішньої рівноваги. Рекомендую всім, хто шукає реальну трансформацію.' },
    { image: '/review-4.jpg', name: 'Ліам Івановський', desc: 'Практика йоги в студії Віньяса стала для мене справжнім відкриттям. Кожне заняття – це можливість відключитися від повсякденної метушні та набути гармонії.' },
]