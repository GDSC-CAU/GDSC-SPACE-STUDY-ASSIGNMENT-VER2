import { Link } from 'react-router-dom'
import { EMOTION } from '../../constants'

export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl text-gray-800 font-semibold">감정 상자</h1>
                <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
            </div>
            <div>
                {EMOTION.map((e) => (
                    <Link
                        to={`/emotions/${e.key}`}
                        key={e.key}
                        className="flex flex-row items-center w-full p-4 rounded-3xl border border-gray-50 hover: hover:shadow-xl"
                    >
                        <div className={`rounded-2xl text-6xl`}>{e.emoji}</div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl">{e.key}</h1>
                            <span className="text-gray-400">{e.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
