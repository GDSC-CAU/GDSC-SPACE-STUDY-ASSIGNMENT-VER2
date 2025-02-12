import { Diary } from '../interface/diary'

export const DIARY_STORAGE_KEY = 'diary_data'

export const emotionEmoji: Record<Diary['emotion'], string> = {
    bad: '🤬',
    soso: '😗',
    good: '😙',
    great: '😃',
    awesome: '😎',
}

export const weatherEmoji: Record<Diary['weather'], string> = {
    cloud: '☁️',
    rain: '🌧',
    snow: '❄️',
    sunny: '☀️',
}

export const EMOTION: { key: string; emoji: string; description: string; color: string }[] = [
    { key: 'awesome', emoji: '😎', description: '최고의 하루였어요', color: 'yellow' },
    { key: 'great', emoji: '😃', description: '멋진 하루였어요', color: 'blue' },
    { key: 'good', emoji: '😙', description: '좋은 하루였어요', color: 'green' },
    { key: 'soso', emoji: '😗', description: '괜찮은 하루였어요', color: 'purple' },
    { key: 'bad', emoji: '🤬', description: '최악의 하루였어요!', color: 'red' },
]
