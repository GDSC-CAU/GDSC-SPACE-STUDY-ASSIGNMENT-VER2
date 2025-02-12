interface EmojiStyle {
    bg: string
    border: string
}

export const emojiConfig: Record<string, EmojiStyle> = {
    red: {
        bg: 'bg-red-50 group-hover:bg-red-100',
        border: 'border-red-100 group-hover:border-red-200',
    },
    yellow: {
        bg: 'bg-yellow-50 group-hover:bg-yellow-100',
        border: 'border-yellow-100 group-hover:border-yellow-200',
    },
    green: {
        bg: 'bg-green-50 group-hover:bg-green-100',
        border: 'border-green-100 group-hover:border-green-200',
    },
    blue: {
        bg: 'bg-blue-50 group-hover:bg-blue-100',
        border: 'border-blue-100 group-hover:border-blue-200',
    },
    purple: {
        bg: 'bg-purple-50 group-hover:bg-purple-100',
        border: 'border-purple-100 group-hover:border-purple-200',
    },
}
