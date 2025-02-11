import { Link, useParams } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { findDiary, loadDiary } from '../../../util/diaryUtil'
import { useEffect, useState } from 'react'
import { formatDate } from '../../../util/dateUtil'
import { Emotion } from '../../../constants/Emotion'

type EmotionPageParams = {
    emotion: string
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const resultData = findDiary(emotion ?? '')
    const [selectedIDs, setSelectedIDs] = useState<string[]>([])
    const [isValid, setValid] = useState(false)
    const isResultDataExists = resultData.length > 0

    function deleteDiaries() {}

    useEffect(() => {
        setValid(selectedIDs.length > 0)
    }, [selectedIDs])

    const emotionObject = Emotion.find((e) => e.key === emotion)

    return (
        <div className="flex flex-col gap-10 w-full md:w-2/3 items-start">
            <div className="flex flex-row gap-5 items-center justify-center">
                <div className="flex flex-row gap-5 items-center justify-center">
                    <div className={`text-6xl py-5 p-2 rounded-2xl border ${emotionObject?.style}`}>
                        {emotionObject?.emoji}
                    </div>
                    <h1 className="text-3xl font-medium">{emotionObject?.description}</h1>
                </div>
            </div>

            {resultData.map((diary, index) => (
                <div className="flex flex-row items-center justify-between gap-4 w-full border border-gray-100 rounded-lg p-2">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-gray-50"
                        onChange={({ target: { checked } }) => {
                            if (checked) {
                                setSelectedIDs((prevSelectedIDs) => [...prevSelectedIDs, diary.id])
                            } else {
                                setSelectedIDs((prevSelectedIDs) => prevSelectedIDs.filter((id) => id !== diary.id))
                            }
                        }}
                    />
                    <Link
                        to={`/detail/${diary.id}`}
                        key={diary.id}
                        className="flex flex-row items-center justify-between gap-4 w-full rounded-lg hover:bg-gray-100"
                    >
                        <div>{diary.title}</div>
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <span className="text-gray-400 text-sm">{formatDate(diary.date)}</span>
                            <span className="text-gray-400 text-sm">조회수: {diary.views}</span>
                        </div>
                    </Link>
                </div>
            ))}
            {isResultDataExists ? (
                <button
                    className={`${isValid ? 'p-3 red-btn w-full' : 'p-3 default-btn w-full'}`}
                    onClick={deleteDiaries}
                    disabled={!isValid}
                >
                    {isValid ? `선택된 ${selectedIDs.length}개의 일기를 삭제합니다` : '선택된 일기가 없습니다'}
                </button>
            ) : (
                <div className="text-gray-400">아직 적지 않았어요 :(</div>
            )}
        </div>
    )
}
