import { Link } from 'react-router-dom'
import { Emotion } from '../../constants/Emotion'

interface EmojiBtnProps {
    emotion: any
}

const EmojiLinkButton: React.FC<EmojiBtnProps> = ({ emotion }) => {
    const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

    return (
        <Link to={`/emotions/${emotion.key}`}>
            <button className="group p-4 flex rounded-2xl border border-gray-50 hover:scale-110 hover:shadow-2xl transition-transform ease-in-out duration-400">
                <div className={`text-6xl py-5 p-2 rounded-2xl border ${emotion.style} group-hover:shadow-inner`}>
                    {emotion.emoji}
                </div>
                <div className="flex flex-col items-start justify-center w-full m-4">
                    <h1 className="text-2xl">{capitalizeFirstLetter(emotion.key)}</h1>
                    <span className="text-ml text-gray-400">{emotion.description}</span>
                </div>
            </button>
        </Link>
    )
}

export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col items-start justify-center gap-3">
                <h1 className="text-3xl text-gray-800 font-semibold">감정 상자</h1>
                <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-5 items-start justify-center">
                {Emotion.slice()
                    .reverse()
                    .map((emotion, index) => (
                        <EmojiLinkButton key={index} emotion={emotion} />
                    ))}
            </div>
        </div>
    )
}
