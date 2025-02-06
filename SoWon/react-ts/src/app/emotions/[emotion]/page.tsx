import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Diary } from '../../../interface/diary'
import { EMOTION } from '../../../constants'
import { emojiConfig } from '../../../style/config'
import { useDiaryValue } from '../../../provider/Diary'
import { formatDate } from '../../../utils/formatDate'
import useDiaryManager from '../../../hooks/useDiaryManager'

type EmotionPageParams = {
    emotion: string
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()

    const title = EMOTION.find((e) => e.key === emotion)
    const diarys = useDiaryValue().filter((d) => d.emotion === emotion)

    return (
        <div className="flex flex-col w-full md:w-2/3 gap-10">
            <div className="flex flex-row items-center gap-5">
                <div
                    className={`flex items-center justify-center w-24 h-24 rounded-2xl text-6xl transition select-none ${title && emojiConfig[title.color].bg} border ${title && emojiConfig[title.color].border} group-hover:shadow-inner`}
                >
                    {title?.emoji}
                </div>
                <div className="text-3xl">{title?.description}</div>
            </div>
            {diarys.length > 0 ? (
                <EmotionDiaryList diarys={diarys} />
            ) : (
                <div className="text-gray-400">아직 적지 않았어요</div>
            )}
        </div>
    )
}

const EmotionDiaryList = ({ diarys }: { diarys: Diary[] }) => {
    const [selectedDiarys, setSelectedDiarys] = useState<string[]>([])
    const { removeDiary } = useDiaryManager()

    // 일기 선택 핸들러
    const handleSelectDiary = (id: string) => {
        setSelectedDiarys((prev) =>
            prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]
        )
    }

    // 일기 삭제 버튼 핸들러
    const onRemoveClick = () => {
        diarys.map((diary) => {
            selectedDiarys.map((selectedDiary) => selectedDiary === diary.id && removeDiary(selectedDiary))
        })
    }

    return (
        <div className="flex flex-col gap-10">
            {diarys.map((diary) => (
                <div key={diary.id} className="flex flex-row items-center p-2 gap-4 rounded-lg border border-gray-100">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-gray-50"
                        onChange={() => handleSelectDiary(diary.id)}
                    />
                    <Link
                        to={`/detail/${diary.id}`}
                        className="flex flex-row justify-between w-full px-2 rounded transition hover:bg-gray-100"
                    >
                        <div>{diary.title}</div>
                        <div className="flex flex-row gap-2 text-gray-400">
                            <div>{formatDate(diary.date)}</div>
                            <div>조회수: {diary.views}</div>
                        </div>
                    </Link>
                </div>
            ))}
            {selectedDiarys.length > 0 ? (
                <button className="btn btn-red" onClick={onRemoveClick}>
                    선택된 {selectedDiarys.length}개의 일기를 삭제합니다
                </button>
            ) : (
                <button className="btn btn-gray">선택된 일기가 없습니다.</button>
            )}
        </div>
    )
}
