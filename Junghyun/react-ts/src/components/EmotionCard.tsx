import { Link } from 'react-router-dom'
import { Diary } from '../interface/diary'
import { EMOTION_DATA } from '../constants'

type EmotionProps = {
    emotion: Diary['emotion']
}

export const EmojiBox = ({ emotion }: EmotionProps) => {
    const { emoji, color } = EMOTION_DATA[emotion]

    return (
        <div className={`flex w-24 h-24 text-6xl justify-center items-center bg-${color}-50 rounded-2xl`}>{emoji}</div>
    )
}

export default function EmotionCard({ emotion }: EmotionProps) {
    const { description } = EMOTION_DATA[emotion]

    return (
        <Link to={`/emotions/${emotion}`}>
            <div className="flex flex-row items-center justify-center gap-4 border border-gray-100 rounded-3xl p-5 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-transparent cursor-pointer">
                <EmojiBox emotion={emotion} />
                <div className="flex flex-col items-start justify-center gap-1">
                    <div className="text-2xl capitalize">{emotion}</div>
                    <div className="text-m text-gray-400">{description}</div>
                </div>
            </div>
        </Link>
    )
}
