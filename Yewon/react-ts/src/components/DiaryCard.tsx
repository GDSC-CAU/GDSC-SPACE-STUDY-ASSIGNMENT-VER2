import { Diary } from '../interface/diary'
import { Link } from 'react-router-dom'
import { Emotion } from '../constants/Emotion'
import { Weather } from '../constants/Weather'
import { formatDate } from '../util/dateUtil'

interface DiaryProps {
    diary: Diary
}

export const DiaryCard: React.FC<DiaryProps> = ({ diary }) => {
    const emotion = Emotion.find((e) => e.key === diary.emotion)
    const weather = Weather.find((e) => e.key === diary.weather)

    return (
        <Link to={`detail/${diary.id}`} key={diary.id}>
            <button className="w-full flex flex-col items-start justify-center gap-1.5 p-3 hover:bg-gray-50 border border-gray-100 rounded-lg">
                <h1>{diary.title}</h1>
                <div className="flex flex-row items-center justify-between gap-1 w-full">
                    <span className="text-gray-400 text-sm">{formatDate(diary.date)}</span>
                    <div className="flex flex-row gap-1s">
                        <span>{emotion?.emoji}</span>
                        <span>{weather?.emoji}</span>
                    </div>
                </div>
            </button>
        </Link>
    )
}
