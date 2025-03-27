import { useState } from 'react'

function ThirdColumn() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center justify-start">
        <input type="checkbox" checked className="text-blue-500" />
        <span className="text-gray-700 ml-2">Introduce</span>
      </div>

      <div className="flex items-center justify-end"></div>
      <span>•</span>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex space-x-4 p-4">

      {/* 왼쪽 섹션 - BS와 파일 이모지 */}
      <div className=" bg-white p-3 rounded-lg shadow-lg">

        <div className="flex-1 items-center space-x-2 mb-4">
          {/* BS 텍스트 */}
          <div className="text-xl font-semibold text-yellow-500">BS</div>

          {/* 파일 이모지 */}
          <div className="text-2xl">📁</div>
          <div className="text-2xl">📁</div>
          <div className="text-2xl">📁</div>
          <div className="text-2xl">📁</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray-100 p-6 min-h-screen">

{/* 상단 섹션 - 추가된 칼럼 */}
<div className="bg-gray-200 p-4 rounded-lg text-left font-semibold text-gray-800">
  BE STRICT!
</div>

{/* 중간 + 오른쪽 섹션을 감싸는 Flex 컨테이너 추가 */}
<div className="flex gap-4">

  {/* 중간 섹션 - 레슨 카드들 */}
  <div className="flex flex-col bg-gray p-6 rounded-lg shadow-lg gap-4 w-2/3">
    <div className="flex grid grid-cols-3 gap-4 h-40">

    <div className="flex flex-col bg-white p-4 rounded-lg gap-2">
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="text-center font-semibold text-gray-800">Beginner</div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="mt-1 text-xs text-center text-gray-600">3 lessons</div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 rounded-lg gap-2">
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="text-center font-semibold text-gray-800">Beginner</div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="mt-1 text-xs text-center text-gray-600">3 lessons</div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 rounded-lg gap-2">
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="text-center font-semibold text-gray-800">Beginner</div>
        </div>
        
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="mt-1 text-xs text-center text-gray-600">3 lessons</div>
        </div>
      </div>
    </div>

    <div className="flex-1">
      <button className="w-full h-full bg-yellow-100 text-black py-2 rounded-lg">Learn more...</button>
    </div>
  </div>

  {/* 오른쪽 섹션 - Introduce 버튼과 체크박스 */}
  <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
    <div className="space-y-4">
      <ThirdColumn />
      <ThirdColumn />
      <ThirdColumn />
      <ThirdColumn />
      <ThirdColumn />
      <ThirdColumn />
    </div>

    <button className="w-full bg-gray-200 text-black py-2 rounded-lg mt-4">
      Watch next lessons
    </button>
  </div>
</div>
</div>

</div>
  )
}

export default App
