import { useParams } from 'react-router-dom'
import { useDiaryValue } from '../../../provider/Diary'
import { EmojiBox } from '../../../components/EmotionCard'
import { Diary } from '../../../interface/diary'

type EmotionPageParams = {
    emotion: string
}
export default function EmotionPage() {
    const { emotion } = useParams<EmotionPageParams>()
    const diaries = useDiaryValue()
    return (
        <div className="flex flex-col">
            <EmojiBox emotion={emotion as Diary['emotion']} />
        </div>
    )
}
