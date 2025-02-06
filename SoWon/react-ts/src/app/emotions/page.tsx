import { Link } from 'react-router-dom'
import { EMOTION } from '../../constants'

interface EmojiStyle {
    bg: string
    border: string
}

const emojiConfig: Record<string, EmojiStyle> = {
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

export default function EmotionLinkPage() {
    const capitalizeText = (text: string) => {
        return text.replace(text[0], text[0].toUpperCase())
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl text-gray-800 font-semibold">감정 상자</h1>
                <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {EMOTION.map((e) => (
                    <Link
                        to={`/emotions/${e.key}`}
                        key={e.key}
                        className="flex flex-row items-center w-full gap-4 p-4 rounded-3xl border border-gray-50 transition hover:shadow-xl hover:scale-105 group"
                    >
                        <div
                            className={`flex items-center justify-center w-24 h-24 rounded-2xl text-6xl transition select-none ${emojiConfig[e.color].bg} border ${emojiConfig[e.color].border} group-hover:shadow-inner`}
                        >
                            {e.emoji}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl">{capitalizeText(e.key)}</h1>
                            <span className="text-gray-400">{e.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
