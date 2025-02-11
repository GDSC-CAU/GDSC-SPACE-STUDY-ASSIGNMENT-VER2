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

export const deleteDiaries = (selectedIDs: string[]) => {
  const storedData = loadDiary()
  const updatedData = storedData.filter(diary => !selectedIDs.includes(diary.id));
  localStorage.setItem(DIARYKEY, JSON.stringify(updatedData));
}

export const findDiary = (emotion: string): Diary[] => {
  const storedData = loadDiary()
  const resultData: Diary[] = storedData.filter((user) => user.emotion === emotion)
  return resultData
}