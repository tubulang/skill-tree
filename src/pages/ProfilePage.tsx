import { User, Trophy, Calendar, Target, BarChart3, Clock, Zap, TrendingUp } from 'lucide-react'

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">张小明</h1>
              <p className="text-gray-600 mb-4">前端开发工程师 · 终身学习者</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Lv.5</div>
                  <div className="text-sm text-gray-600">等级</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2,450</div>
                  <div className="text-sm text-gray-600">总经验</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">掌握技能</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">7</div>
                  <div className="text-sm text-gray-600">连续天数</div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  编辑资料
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  设置
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Progress */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                学习进展
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">React.js</span>
                    <span className="text-sm text-gray-600">熟悉 · 85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">TypeScript</span>
                    <span className="text-sm text-gray-600">会用 · 60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Node.js</span>
                    <span className="text-sm text-gray-600">了解 · 35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                最近活动
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900">完成了 "React Hooks 练习" 任务</p>
                    <p className="text-sm text-gray-600">2小时前</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900">解锁了 "TypeScript 基础" 技能</p>
                    <p className="text-sm text-gray-600">1天前</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900">加入了 "前端开发学习圈" 圈子</p>
                    <p className="text-sm text-gray-600">2天前</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900">发布了学习笔记</p>
                    <p className="text-sm text-gray-600">3天前</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                本周统计
              </h2>
              
              <div className="grid grid-cols-7 gap-2">
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-xs text-gray-600 mb-2">{day}</div>
                    <div 
                      className="bg-blue-500 rounded mx-auto"
                      style={{
                        width: '20px',
                        height: `${Math.max(10, (index + 1) * 8)}px`
                      }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-1">{(index + 1) * 30}m</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* User Info */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                个人信息
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">年龄</label>
                  <p className="text-gray-900">28岁</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">每日学习时间</label>
                  <p className="text-gray-900">2小时</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">学习偏好</label>
                  <p className="text-gray-900">视觉型学习者</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">加入时间</label>
                  <p className="text-gray-900">2024年1月</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                成就徽章
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-xs text-gray-600">学习达人</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">目标达成</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600">坚持不懈</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-xs text-gray-600">经验大师</p>
                </div>
                
                <div className="text-center opacity-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-400">待解锁</p>
                </div>
                
                <div className="text-center opacity-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-400">待解锁</p>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-red-600" />
                学习目标
              </h2>
              
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">掌握React进阶</p>
                  <p className="text-sm text-blue-700">预计完成时间：2周</p>
                  <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
                    <div className="bg-blue-600 h-1 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">学习TypeScript</p>
                  <p className="text-sm text-green-700">预计完成时间：1个月</p>
                  <div className="w-full bg-green-200 rounded-full h-1 mt-2">
                    <div className="bg-green-600 h-1 rounded-full w-1/2"></div>
                  </div>
                </div>
                
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-900">构建全栈项目</p>
                  <p className="text-sm text-yellow-700">预计完成时间：3个月</p>
                  <div className="w-full bg-yellow-200 rounded-full h-1 mt-2">
                    <div className="bg-yellow-600 h-1 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
