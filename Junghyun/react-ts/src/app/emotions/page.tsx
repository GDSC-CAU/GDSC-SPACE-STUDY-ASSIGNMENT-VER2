import EmotionCard from '../../components/EmotionCard'

const EMOTIONS = [
    { emoji: '😆', title: 'Awesome', description: '최고의 하루였어요', bgColor: 'bg-yellow-50' },
    { emoji: '😊', title: 'Great', description: '멋진 하루였어요', bgColor: 'bg-blue-50' },
    { emoji: '😙', title: 'Good', description: '좋은 하루였어요', bgColor: 'bg-green-50' },
    { emoji: '🙂', title: 'Soso', description: '괜찮은 하루였어요', bgColor: 'bg-purple-50' },
    { emoji: '🤬', title: 'Bad', description: '최악의 하루였어요', bgColor: 'bg-red-50' },
]

export default function EmotionLinkPage() {
    return (
        <div className="flex flex-col items-start justify-center gap-10">
            <div className="flex flex-col justify-center items-start gap-4">
                <h1 className="text-3xl font-semibold">감정 상자</h1>
                <span className="text-gray-400">나만의 감정을 돌아보고 생각에 잠겨보아요 :)</span>
            </div>
            <div className="grid grid-cols-2 gap-5 justify-center items-center">
                {EMOTIONS.map((emotion) => (
                    <EmotionCard key={emotion.title} {...emotion} />
                ))}
            </div>
        </div>
    )
}
