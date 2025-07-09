import { Users, Hash, TrendingUp, MessageCircle, Heart } from 'lucide-react'

const mockCircles = [
  {
    id: '1',
    name: '前端开发学习圈',
    description: '专注于前端技术学习和分享，包括React、Vue、TypeScript等',
    memberCount: 1250,
    tags: ['前端', 'React', 'Vue', 'JavaScript'],
    category: '技术学习',
    isJoined: true,
    recentActivity: '2小时前'
  },
  {
    id: '2',
    name: 'TypeScript实战',
    description: '深入学习TypeScript，分享最佳实践和项目经验',
    memberCount: 680,
    tags: ['TypeScript', '编程语言', '类型系统'],
    category: '编程语言',
    isJoined: false,
    recentActivity: '1天前'
  },
  {
    id: '3',
    name: 'AI技术探索',
    description: '探讨人工智能技术发展，分享AI应用案例和学习资源',
    memberCount: 950,
    tags: ['AI', '机器学习', '深度学习'],
    category: '新兴技术',
    isJoined: true,
    recentActivity: '30分钟前'
  },
  {
    id: '4',
    name: '全栈开发之路',
    description: '从前端到后端，分享全栈开发技能和经验',
    memberCount: 1560,
    tags: ['全栈', 'Node.js', '数据库', 'DevOps'],
    category: '技术学习',
    isJoined: false,
    recentActivity: '3小时前'
  }
]

export function CirclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center mb-2">
            <Users className="w-8 h-8 mr-3 text-purple-600" />
            学习圈子
          </h1>
          <p className="text-gray-600">找到志同道合的学习伙伴，一起成长进步</p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-200 font-medium">
              推荐圈子
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              我的圈子
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              热门圈子
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">已加入圈子</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">发布动态</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">获得点赞</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">活跃度排名</p>
                <p className="text-2xl font-bold text-gray-900">Top 15%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Circle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCircles.map((circle) => (
            <div key={circle.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{circle.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{circle.description}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {circle.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex items-center space-x-2 mb-4">
                  <Hash className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-wrap gap-1">
                    {circle.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {circle.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{circle.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{circle.memberCount.toLocaleString()} 成员</span>
                  </div>
                  <span>最近活跃: {circle.recentActivity}</span>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-2 rounded-lg font-medium transition-colors ${
                    circle.isJoined
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {circle.isJoined ? '已加入' : '加入圈子'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">AI推荐圈子</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Python数据科学</h3>
                <p className="text-blue-700 text-sm mb-3">
                  基于你对JavaScript的掌握，推荐学习Python进行数据分析
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600">匹配度: 85%</span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    查看详情
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Node.js后端开发</h3>
                <p className="text-green-700 text-sm mb-3">
                  扩展你的前端技能，学习服务端JavaScript开发
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600">匹配度: 92%</span>
                  <button className="text-green-600 text-sm font-medium hover:text-green-800">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
