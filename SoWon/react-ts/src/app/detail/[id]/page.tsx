import { Link, useParams } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { formatDate } from '../../../utils/formatDate'

type DiaryDetailPageParams = {
    id: string
}

// 일기 더미 데이터 (삭제 예정)
const dummyDiary: Diary = {
    id: '1',
    date: new Date(),
    title: '나의 일기',
    content: '오늘따라 거리에 사람이 없습니다.',
    emotion: 'soso',
    weather: 'cloud',
    views: 10,
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()

    return (
        <div className="min-h-screen max-h-screen h-screen w-full bg-white flex items-center justify-center">
            <div className="w-1/2 h-full py-20">
                <div className="flex flex-col gap-4 my-9">
                    <h1 className="text-4xl font-medium">{dummyDiary.title}</h1>
                    <div className="flex flex-row gap-2">
                        <div className="btn btn-gray w-full px-1.5 py-0.5 text-sm">
                            {formatDate(dummyDiary.date, 'verbose')}
                        </div>
                        <div className="btn btn-gray w-full px-1.5 py-0.5 text-sm">{dummyDiary.weather}</div>
                        <div className="btn btn-gray w-full px-1.5 py-0.5 text-sm">{dummyDiary.emotion}</div>
                    </div>
                </div>
                <div className="text-base text-gray-800 h-2/3">{dummyDiary.content}</div>
                <div className="flex flex-row gap-2">
                    <Link to={'/'} className="btn btn-green w-full">
                        새로운 일기 작성하기
                    </Link>
                    <button className="btn btn-red w-full">현재 일기 삭제하기</button>
                </div>
            </div>
        </div>
    )
}
