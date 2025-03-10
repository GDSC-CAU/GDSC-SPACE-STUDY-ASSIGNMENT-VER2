import { Link, useParams, useNavigate, NavigateFunction } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { formatDate } from '../../../utils/formatDate'
import { useDiaryValue } from '../../../provider/Diary'
import useDiaryManager from '../../../hooks/useDiaryManager'
import { useEffect } from 'react'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const navigate: NavigateFunction = useNavigate()
    const { id } = useParams<DiaryDetailPageParams>()
    const { updateDiary, removeDiary } = useDiaryManager()

    const diary: Diary | undefined = useDiaryValue().find((d) => d.id === id)
    if (diary === undefined) {
        throw Error(`There's no diary id: ${id}`)
    }

    // 조회수 증가
    useEffect(() => {
        updateDiary(diary.id, { ...diary, views: diary.views + 1 })
    }, [])

    // 일기 삭제 핸들러
    const onRemoveDiaryClick = () => {
        if (id) {
            removeDiary(id)
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
            <div className="w-1/2 h-full py-20">
                <div className="flex flex-col gap-4 my-9">
                    <h1 className="text-4xl font-medium">{diary.title}</h1>
                    <div className="flex flex-row gap-2">
                        <div className="btn btn-gray w-full px-1.5 py-0.5 text-sm">
                            {formatDate(diary.date, 'verbose')}
                        </div>
                        <div className="btn btn-gray w-full px-1.5 py-0.5 text-sm">{diary.weather}</div>
                        <Link to={`/emotions/${diary.emotion}`} className="btn btn-gray w-full px-1.5 py-0.5 text-sm">
                            {diary.emotion}
                        </Link>
                    </div>
                </div>
                <div className="text-base text-gray-800 h-2/3">{diary.content}</div>
                <div className="flex flex-row gap-2">
                    <Link to={'/'} className="btn btn-green w-full">
                        새로운 일기 작성하기
                    </Link>
                    <button className="btn btn-red w-full" onClick={onRemoveDiaryClick}>
                        현재 일기 삭제하기
                    </button>
                </div>
            </div>
        </div>
    )
}
