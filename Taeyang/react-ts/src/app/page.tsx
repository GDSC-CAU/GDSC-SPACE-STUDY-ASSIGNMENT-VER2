import { useState } from 'react';

export default function DiaryPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full w-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3 mx-auto">
      <form className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 w-full">
        <div className="flex flex-col gap-4 flex-grow">
          <input
            type="text"
            className="mt-2 mb-6 text-2xl"
            placeholder="제목을 적어보세요."
          />
          <div className="flex gap-3">
            {['bad', 'soso', 'good', 'great', 'awesome'].map((emotion) => (
              <button
                key={emotion}
                type="button"
                onClick={() => setSelectedEmotion(emotion)}
                className="text-xs"
              >
                {emotion}
              </button>
            ))}
          </div>
          <div className="flex gap-3 -mt-1 mb-6">
            {['cloud', 'rain', 'snow', 'sunny'].map((weather) => (
              <button
                key={weather}
                type="button"
                onClick={() => setSelectedWeather(weather)}
                className="text-xs"
              >
                {weather}
              </button>
            ))}
          </div>
          <textarea
            className="resize-none flex-grow"
            placeholder="오늘 당신의 하루는 어땠나요?"
          />
        </div>
        <button
          type="submit"
          className="w-full text-sm"
        >
          일기를 더 자세히 적어볼까요?
        </button>
      </form>

      <div className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem] w-full">
        <div>
          <h1 className="text-xl mt-2">기록된 일기</h1>
          <div className="flex flex-col overflow-y-auto gap-2 w-full h-96 max-h-96">
            <p className="text-sm mt-[250px]">일기를 적어보세요</p>
          </div>
        </div>
        <button type="button" className="w-full text-sm">
          감정 모아보기
        </button>
      </div>
    </div>
  );
}