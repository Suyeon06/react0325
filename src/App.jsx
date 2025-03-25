import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-col lg:flex-row space-x-4 p-4">
      {/* 왼쪽 섹션 */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        {/* 왼쪽 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold text-yellow-500">BS</div>
          <div className="text-gray-700">BE STRICT!</div>
        </div>
        {/* 레슨 카드들 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      </div>

      {/* 오른쪽 섹션 */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <button className="w-full bg-yellow-500 text-white py-2 rounded-lg mb-4">Introduce</button> {/* Introduce 버튼 */}
        {/* 체크박스 리스트 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Introduce</span>
            <input type="checkbox" checked className="text-blue-500" />
          </div>
        </div>
        {/* Watch Next Lessons 버튼 */}
        <button className="w-full bg-yellow-500 text-white py-2 rounded-lg mt-4">Watch next lessons</button>
      </div>
    </div>
  )
}

export default App
