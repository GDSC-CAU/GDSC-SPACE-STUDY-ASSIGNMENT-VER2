import { useParams, useNavigate } from 'react-router-dom'
import { useDiaryValue, useDiaryUpdate } from '../../../provider/Diary'
import { Diary } from '../../../interface/diary'
import { formatDate } from '../../../utils/formatDate'

type DiaryDetailPageParams = {
    id: string
}

export default function DiaryDetailPage() {
    const { id } = useParams<DiaryDetailPageParams>()
    const navigate = useNavigate()
    const diaries = useDiaryValue()
    const diary = diaries.find((diary) => diary.id === id)
    const updateDiaries = useDiaryUpdate()
    const formattedDate = formatDate(new Date(diary!.date), 'long')

    const handleDelete = () => {
        if (!diary || !id) return

        try {
            updateDiaries((prev: Diary[]) => {
                const newDiaries = prev.filter((diary) => diary.id !== id)
                localStorage.setItem('diaries', JSON.stringify(newDiaries))
                return newDiaries
            })

            alert('일기가 삭제되었습니다.')
            navigate('/')
        } catch (error) {
            console.error('일기 삭제 실패:', error)
            alert('일기 삭제에 실패하였습니다.')
        }
    }

    return (
        <div className="flex flex-col h-full w-1/2 justify-center gap-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">{diary!.title}</h1>
                <div className="flex flex-row gap-2">
                    <button className="gray-btn flex-1">{formattedDate}</button>
                    <button className="gray-btn flex-1">{diary!.weather}</button>
                    <button className="gray-btn flex-1">{diary!.emotion}</button>
                </div>
            </div>

            <div className="flex h-1/2 text-xl">{diary!.content}</div>
            <div className="flex flex-row gap-2">
                <button className="green-btn flex-1 p-2" onClick={() => navigate('/')}>
                    새로운 일기 작성하기
                </button>
                <button className="red-btn flex-1 p-2" onClick={handleDelete}>
                    현재 일기 삭제하기
                </button>
            </div>
        </div>
    )
}
