import { useState } from 'react'
import { BookOpen, Plus, Tag, Search, Heart, MessageCircle, Share2 } from 'lucide-react'
import { Note } from '../types'

const mockNotes: Note[] = [
  {
    id: '1',
    content: '今天学习了React Hooks，useState的使用比想象中简单，但useEffect的依赖数组需要特别注意。记录一下遇到的无限循环问题...',
    skillTags: ['React', 'Hooks', 'useEffect'],
    taskId: '1',
    mood: 'happy',
    visibility: 'public',
    createdAt: new Date('2024-01-10T14:30:00'),
    updatedAt: new Date('2024-01-10T14:30:00')
  },
  {
    id: '2',
    content: 'TypeScript的类型推断真的很强大！今天在写项目时发现编译器能自动推断出很多类型，代码变得更加安全了。',
    skillTags: ['TypeScript', '类型系统'],
    mood: 'excited',
    visibility: 'circle',
    createdAt: new Date('2024-01-09T09:15:00'),
    updatedAt: new Date('2024-01-09T09:15:00')
  },
  {
    id: '3',
    content: '遇到了CSS布局问题，flexbox和grid各有优势。整理了一下使用场景：一维布局用flex，二维布局用grid。',
    skillTags: ['CSS', 'Flexbox', 'Grid'],
    mood: 'neutral',
    visibility: 'private',
    createdAt: new Date('2024-01-08T16:45:00'),
    updatedAt: new Date('2024-01-08T16:45:00')
  }
]

export function NotesPage() {
  const [notes] = useState<Note[]>(mockNotes)
  const [filter, setFilter] = useState<'all' | 'public' | 'circle' | 'private'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotes = notes.filter(note => {
    const matchesFilter = filter === 'all' || note.visibility === filter
    const matchesSearch = note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.skillTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getMoodEmoji = (mood?: string) => {
    switch (mood) {
      case 'excited': return '🤩'
      case 'happy': return '😊'
      case 'neutral': return '😐'
      case 'frustrated': return '😤'
      case 'confused': return '😕'
      default: return '📝'
    }
  }

  const getVisibilityColor = (visibility: string) => {
    switch (visibility) {
      case 'public': return 'text-green-600 bg-green-50'
      case 'circle': return 'text-blue-600 bg-blue-50'
      case 'private': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getVisibilityText = (visibility: string) => {
    switch (visibility) {
      case 'public': return '公开'
      case 'circle': return '圈子可见'
      case 'private': return '私密'
      default: return '未知'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-yellow-600" />
              学习笔记
            </h1>
            <p className="text-gray-600 mt-2">记录学习过程中的思考和感悟</p>
          </div>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>写笔记</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-1 md:mr-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜索笔记内容或标签..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex space-x-2">
              {['all', 'public', 'circle', 'private'].map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filter === filterOption
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {filterOption === 'all' ? '全部' : 
                   filterOption === 'public' ? '公开' : 
                   filterOption === 'circle' ? '圈子' : '私密'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notes List */}
        <div className="space-y-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
              {/* Note Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getMoodEmoji(note.mood)}</span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getVisibilityColor(note.visibility)}`}>
                        {getVisibilityText(note.visibility)}
                      </span>
                      {note.taskId && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          关联任务
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {note.createdAt.toLocaleDateString('zh-CN')} {note.createdAt.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note Content */}
              <div className="mb-4">
                <p className="text-gray-900 leading-relaxed">{note.content}</p>
              </div>

              {/* Tags */}
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-4 h-4 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {note.skillTags.map((tag) => (
                    <span key={tag} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">12</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">3</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">分享</span>
                  </button>
                </div>
                <button className="text-sm text-gray-600 hover:text-gray-900">
                  编辑
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? '没找到相关笔记' : '还没有笔记'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? '试试其他关键词' : '开始记录你的学习心得吧'}
            </p>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
              写第一篇笔记
            </button>
          </div>
        )}

        {/* Writing Tips */}
        <div className="mt-12 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">💡 写笔记小贴士</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
            <div>
              <h4 className="font-medium mb-2">记录学习过程</h4>
              <p>记录遇到的问题、解决方案和心得体会</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">使用技能标签</h4>
              <p>为笔记添加相关技能标签，方便后续查找和整理</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">记录情绪状态</h4>
              <p>学习时的心情也是成长轨迹的重要组成部分</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">选择合适的可见性</h4>
              <p>公开分享、圈子讨论或私人记录，灵活选择</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
