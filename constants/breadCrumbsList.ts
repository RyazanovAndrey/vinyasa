export function breadCrumbsList(value: string) {
    const list: Record<string, string> = {
        'about': 'О нас',
        'instructors' : 'Iнструктори',
        'ava-miler' : 'Ава Мілер',
        'ivan-smile': 'Иван Смайл',
        'sofia-mitchel': 'София Митчел',
        'maxim-smith': 'Максим Смит',
    }

    return list[value]
}