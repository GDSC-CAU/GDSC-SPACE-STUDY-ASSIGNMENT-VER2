import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDiaryValue, useDiaryUpdate } from '../../../provider/Diary'
import { EmojiBox } from '../../../components/EmotionCard'
import { Diary } from '../../../interface/diary'
import { EMOTION_DATA } from '../../../constants'
import { formatDate } from '../../../utils/formatDate'

type EmotionPageParams = {
    emotion: Diary['emotion']
}

export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const diaries = useDiaryValue()
    const updateDiaries = useDiaryUpdate()
    const filteredDiaries = diaries.filter((diary) => diary.emotion === emotion)
    const [selectedDiaries, setSelectedDiaries] = useState<Diary[]>([])

    const handleCheckbox = (diary: Diary) => {
        setSelectedDiaries((prev) => (prev.includes(diary) ? prev.filter((d) => d !== diary) : [...prev, diary]))
    }

    const handleDelete = () => {
        if (selectedDiaries.length === 0) return

        updateDiaries((prev: Diary[]) => {
            const newDiaries = prev.filter((diary) => !selectedDiaries.includes(diary))
            localStorage.setItem('diaries', JSON.stringify(newDiaries))
            return newDiaries
        })
        setSelectedDiaries([])
    }

    return (
        <div className="flex flex-col w-2/3 items-start gap-10">
            <div className="flex flex-row items-center justify-center gap-5">
                <EmojiBox emotion={emotion!} />
                <h1 className="text-2xl font-medium">{EMOTION_DATA[emotion!].description}</h1>
            </div>
            {filteredDiaries.length > 0 ? (
                <div className="flex flex-col justify-center w-full gap-5">
                    {filteredDiaries.map((diary) => (
                        <div
                            key={diary.id}
                            className="flex flex-row border justify-between items-center border-gray-200 rounded-lg w-full p-2 gap-4"
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 cursor-pointer"
                                checked={selectedDiaries.includes(diary)}
                                onChange={() => handleCheckbox(diary)}
                            />
                            <Link
                                to={`/detail/${diary.id}`}
                                className="flex flex-row justify-between w-full hover:bg-gray-100 px-2 rounded-lg"
                            >
                                <div className="flex">{diary.title}</div>
                                <div className="flex flex-row gap-2">
                                    <div className="text-gray-400">{formatDate(new Date(diary.date), 'short')}</div>
                                    <div className="text-gray-400">{`조회수: ${diary.views}`}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <button
                        className={`flex w-full items-center justify-center p-2 mt-5 transition-all duration-300 ${selectedDiaries.length > 0 ? 'red-btn' : 'gray-btn'}`}
                        onClick={handleDelete}
                        disabled={selectedDiaries.length === 0}
                    >
                        {selectedDiaries.length > 0
                            ? `선택한 ${selectedDiaries.length}개의 일기를 삭제합니다`
                            : '선택된 일기가 없습니다'}
                    </button>
                </div>
            ) : (
                <div className="flex text-gray-400">아직 적지 않았어요</div>
            )}
        </div>
    )
}
