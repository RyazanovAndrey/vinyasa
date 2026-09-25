export function breadCrumbsList(value: string) {
    const list: Record<string, string> = {
        'about': 'О нас',
        'instructors' : 'Iнструктори',
        'ava-miler' : 'Ава Мілер',
    }

    return list[value]
}