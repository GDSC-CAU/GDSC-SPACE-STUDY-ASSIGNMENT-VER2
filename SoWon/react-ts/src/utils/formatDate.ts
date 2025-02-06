type option = 'default' | 'verbose'

export const formatDate = (date: Date | string, format: option = 'default') => {
    if (typeof date === 'string') {
        date = new Date(date)
    }

    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString()
    const day = date.getDate().toString()

    // option이 verbose
    if (format === 'verbose') {
        return `${year}년 ${month}월 ${day}일`
    }

    // option이 default
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(date)
}
