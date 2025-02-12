import EmotionCard from '../../components/EmotionCard'
import { EMOTION_DATA } from '../../constants'
import { Diary } from '../../interface/diary'

export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className="text-3xl font-semibold">감정 상자</h1>
                <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
            </div>
            <div className="grid grid-cols-2 gap-5 justify-center items-center">
                {Object.keys(EMOTION_DATA).map((emotion) => (
                    <EmotionCard key={emotion} emotion={emotion as Diary['emotion']} />
                ))}
            </div>
        </div>
    )
}
