type DateFormat = 'long' | 'short'

export const formatDate = (date: Date, format: DateFormat = 'short') => {
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: format === 'long' ? 'long' : 'numeric',
        day: 'numeric',
        weekday: format === 'long' ? 'long' : undefined,
    })
}
