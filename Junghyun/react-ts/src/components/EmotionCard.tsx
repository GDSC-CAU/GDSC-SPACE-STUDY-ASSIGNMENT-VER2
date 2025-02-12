interface EmotionCardProps {
    emoji: string
    title: string
    description: string
    bgColor: string
}

export default function EmotionCard({ emoji, title, description, bgColor }: EmotionCardProps) {
    return (
        <div className="flex flex-row items-center justify-center gap-4 border border-gray-100 rounded-3xl p-5 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-transparent cursor-pointer">
            <div className={`flex w-24 h-24 text-6xl justify-center items-center ${bgColor} rounded-2xl`}>{emoji}</div>
            <div className="flex flex-col items-start justify-center gap-1">
                <div className="text-2xl">{title}</div>
                <div className="text-m text-gray-400">{description}</div>
            </div>
        </div>
    )
}
