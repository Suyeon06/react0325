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

      {/* 중간 섹션 - 레슨 카드들 */}
      <div className=" bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-center font-semibold text-gray-800">Beginner</div>
            <div className="mt-2 text-center text-gray-600">3 lessons</div>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-center font-semibold text-gray-800">Beginner</div>
            <div className="mt-2 text-center text-gray-600">3 lessons</div>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <div className="text-center font-semibold text-gray-800">Beginner</div>
            <div className="mt-2 text-center text-gray-600">3 lessons</div>
          </div>
        </div>

        <div>
          <button className="w-full bg-yellow-100 text-black py-2 rounded-lg mt-4">Learn more...</button>
        </div>
      </div>

      {/* 오른쪽 섹션 - Introduce 버튼과 체크박스 */}
      <div className=" bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">

          <ThirdColumn />
          <ThirdColumn />
          <ThirdColumn />
          <ThirdColumn />
          <ThirdColumn />
          <ThirdColumn />
        </div>




        <button className="w-full bg-gray-200 text-black py-2 rounded-lg mt-4">Watch next lessons</button>

      </div>
    </div>
  )
}

export default App
