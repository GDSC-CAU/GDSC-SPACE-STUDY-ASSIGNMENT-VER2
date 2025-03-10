import { Link, useParams } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { useEffect, useRef, useState } from 'react'
import { formatDate } from '../../../util/dateUtil'
import { deleteDiary, loadDiary, updateDiaryViews } from '../../../util/diaryUtil'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const [diary, setDiary] = useState<Diary | undefined>()
    const hasUpdated = useRef(false)

    useEffect(() => {
        if (!id) return
        const storedDiaries = loadDiary()
        const foundDiary = storedDiaries.find((d) => d.id === id) || null

        if (foundDiary) {
            if (!hasUpdated.current) {
                updateDiaryViews(id)
                hasUpdated.current = true
            }
            setDiary({ ...foundDiary, views: (foundDiary.views ?? 0) + 1 })
        }
    }, [id])

    return (
        <div className="w-2/4 h-full py-20">
            <div className="flex flex-col gap-4 my-9">
                <h1 className="text-4xl font-medium">{diary?.title}</h1>
                <div className="flex flex-row gap-2">
                    <button className="grow default-btn">
                        {diary?.date ? formatDate(diary.date) : '날짜를 불러올 수 없습니다.'}
                    </button>
                    <button className="grow default-btn">{diary?.weather}</button>
                    <button className="grow default-btn">{diary?.emotion}</button>
                </div>
            </div>

            <div className="text-base text-gray-800 h-2/3">{diary?.content}</div>

            <div className="w-full flex flex-row gap-2">
                <Link to="/" className="w-full">
                    <button className="green-btn w-full p-2">새로운 일기 작성하기</button>
                </Link>
                <Link to="/" className="w-full">
                    <button className="red-btn w-full p-2" onClick={() => deleteDiary(id ?? '')}>
                        현재 일기 삭제하기
                    </button>
                </Link>
            </div>
        </div>
    )
}
