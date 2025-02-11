import { Diary } from "../interface/diary"

export const DIARYKEY = 'diary-storage'

export const loadDiary = (): Diary[] => {
  const storedData: Diary[] = JSON.parse(localStorage.getItem(DIARYKEY)!) || []
  return storedData
}

export const updateDiary = (newDiaryObj: any) => {
  const storedData = loadDiary()
  localStorage.setItem(DIARYKEY, JSON.stringify([...storedData, newDiaryObj]))
}

export const deleteDiary = (id: string) => {
  const storedData = loadDiary()
  localStorage.setItem(DIARYKEY, JSON.stringify(storedData.filter((user) => user.id !== id)))
}