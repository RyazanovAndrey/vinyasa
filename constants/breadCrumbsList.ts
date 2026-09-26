export function breadCrumbsList(value: string) {
    const list: Record<string, string> = {
        'about': 'О нас',
        'instructors' : 'Iнструктори',
        'ava-miler' : 'Ава Мілер',
        'ivan-smile': 'Иван Смайл',
        'sofia-mitchel': 'София Митчел',
        'maxim-smith': 'Максим Смит',
        'tatyana-yuhno': 'Тетяна Юхно',
        'classes': 'Класи',
        'ashtanga-yoga': 'Аштанга йога',
        'bikram-yoga': 'Бікрам йога',
        'kundalIni-yoga': 'Кундаліні йога',
        'hatha-yoga': 'Хатха йога'
    }

    return list[value]
}