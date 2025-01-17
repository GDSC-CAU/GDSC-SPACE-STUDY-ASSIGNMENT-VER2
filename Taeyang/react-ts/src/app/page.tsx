import { useState } from 'react';

export default function DiaryPage() {
  const emotions = ['bad', 'soso', 'good', 'great', 'awesome'];
  const weathers = ['cloud', 'rain', 'snow', 'sunny'];
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);

  const isFormValid = title && content && selectedEmotion && selectedWeather;

  return (
    <div className="flex flex-col items-center justify-center gap-10 h-full w-full md:grid md:grid-rows-1 md:grid-cols-[3fr,2fr] md:w-4/5 lg:w-2/3 mx-auto">
      <form className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 w-full">
        <div className="flex flex-col gap-4 flex-grow">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 mb-6 text-2xl border-0 focus:border focus:border-gray-100 focus:outline-none focus:ring-0"
            placeholder="제목을 적어보세요."
          />
          <div className="flex gap-[2px]">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                type="button"
                onClick={() => setSelectedEmotion(emotion)}
                className={`${
                  selectedEmotion === emotion 
                    ? 'bg-emerald-500 text-white border-emerald-500' 
                    : 'bg-gray-100 text-gray-400 border-gray-200'
                } px-1.5 py-[1px] rounded-md border transition-all duration-200 text-xs min-w-[38px]`}
              >
                {emotion}
              </button>
            ))}
          </div>
          <div className="flex gap-[2px] -mt-1 mb-6">
            {weathers.map((weather) => (
              <button
                key={weather}
                type="button"
                onClick={() => setSelectedWeather(weather)}
                className={`${
                  selectedWeather === weather 
                    ? 'bg-sky-500 text-white border-sky-500' 
                    : 'bg-gray-100 text-gray-400 border-gray-200'
                } px-1.5 py-[1px] rounded-md border transition-all duration-200 text-xs min-w-[38px]`}
              >
                {weather}
              </button>
            ))}
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="resize-none flex-grow whitespace-nowrap border-0 focus:border focus:border-gray-100 focus:outline-none focus:ring-0"
            placeholder="오늘 당신의 하루는 어땠나요?"
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded-lg text-sm ${
            isFormValid 
              ? 'bg-emerald-100 text-emerald-500' 
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          일기를 더 자세히 적어볼까요?
        </button>
      </form>

      <div className="flex flex-col justify-between gap-4 p-4 rounded-lg bg-white border border-gray-100 h-2/3 min-h-[20rem] w-full">
        <div>
          <h1 className="text-xl text-emerald-600 mt-2">기록된 일기</h1>
          <div className="flex flex-col overflow-y-auto gap-2 w-full h-96 max-h-96">
            <p className="text-gray-400 text-sm mt-[250px]">일기를 적어보세요</p>
          </div>
        </div>
        <button type="button" className="w-full p-2 bg-emerald-100 text-emerald-500 rounded-lg text-sm">
          감정 모아보기
        </button>
      </div>
    </div>
  );
}