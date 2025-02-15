import { Diary } from '../interface/diary'

export const EMOTION_DATA: Record<
    Diary['emotion'],
    {
        color: 'yellow' | 'blue' | 'green' | 'purple' | 'red'
        emoji: string
        description: string
    }
> = {
    awesome: {
        emoji: '😆',
        color: 'yellow',
        description: '최고의 하루였어요',
    },
    great: {
        emoji: '😊',
        color: 'blue',
        description: '멋진 하루였어요',
    },
    good: {
        emoji: '😙',
        color: 'green',
        description: '좋은 하루였어요',
    },
    soso: {
        emoji: '🙂',
        color: 'purple',
        description: '괜찮은 하루였어요',
    },
    bad: {
        emoji: '🤬',
        color: 'red',
        description: '최악의 하루였어요!',
    },
}
