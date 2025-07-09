import { useState } from 'react'
import { CheckSquare, Plus, Calendar, Tag, Clock, Filter } from 'lucide-react'
import { Task } from '../types'

const mockTasks: Task[] = [
  {
    id: '1',
    title: '完成React Hooks练习',
    description: '完成useState和useEffect的实际练习项目',
    skillId: '2',
    status: 'in-progress',
    priority: 'high',
    estimatedMinutes: 60,
    actualMinutes: 30,
    dueDate: new Date('2024-01-15'),
    tags: ['React', '前端', '练习'],
    subtasks: [
      { id: '1-1', title: '创建组件结构', completed: true, estimatedMinutes: 15 },
      { id: '1-2', title: '实现状态管理', completed: false, estimatedMinutes: 25 },
      { id: '1-3', title: '添加副作用处理', completed: false, estimatedMinutes: 20 }
    ],
    aiGenerated: false
  },
  {
    id: '2',
    title: '学习TypeScript基础语法',
    description: 'AI推荐：基于你的JavaScript基础，建议学习TypeScript',
    skillId: '5',
    status: 'todo',
    priority: 'medium',
    estimatedMinutes: 90,
    tags: ['TypeScript', '编程语言', 'AI推荐'],
    subtasks: [
      { id: '2-1', title: '类型系统概述', completed: false, estimatedMinutes: 30 },
      { id: '2-2', title: '接口和类型别名', completed: false, estimatedMinutes: 30 },
      { id: '2-3', title: '泛型基础', completed: false, estimatedMinutes: 30 }
    ],
    aiGenerated: true
  }
]

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [filter, setFilter] = useState<'all' | 'todo' | 'in-progress' | 'completed'>('all')
  const [showAddTask, setShowAddTask] = useState(false)

  const filteredTasks = tasks.filter(task => 
    filter === 'all' || task.status === filter
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50'
      case 'in-progress': return 'text-blue-600 bg-blue-50'
      case 'todo': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <CheckSquare className="w-8 h-8 mr-3 text-blue-600" />
              任务管理
            </h1>
            <p className="text-gray-600 mt-2">管理你的学习任务，追踪技能成长进度</p>
          </div>
          <button
            onClick={() => setShowAddTask(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>新建任务</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex space-x-2">
                {['all', 'todo', 'in-progress', 'completed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status as any)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === status
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {status === 'all' ? '全部' : status === 'todo' ? '待办' : status === 'in-progress' ? '进行中' : '已完成'}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              共 {filteredTasks.length} 个任务
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                    {task.aiGenerated && (
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        AI推荐
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status === 'todo' ? '待办' : task.status === 'in-progress' ? '进行中' : '已完成'}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority === 'high' ? '高优先级' : task.priority === 'medium' ? '中优先级' : '低优先级'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{task.description}</p>
                  
                  {/* Subtasks */}
                  <div className="space-y-2 mb-4">
                    {task.subtasks.map((subtask) => (
                      <div key={subtask.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={subtask.completed}
                          className="rounded border-gray-300"
                          readOnly
                        />
                        <span className={`text-sm ${subtask.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                          {subtask.title}
                        </span>
                        <span className="text-xs text-gray-500">({subtask.estimatedMinutes}分钟)</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <div className="flex space-x-1">
                      {task.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="ml-6 text-right">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{task.estimatedMinutes}分钟</span>
                  </div>
                  {task.dueDate && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{task.dueDate.toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Progress */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">完成进度</span>
                  <span className="text-gray-900 font-medium">
                    {task.subtasks.filter(st => st.completed).length} / {task.subtasks.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <CheckSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无任务</h3>
            <p className="text-gray-600 mb-4">创建你的第一个学习任务开始成长之旅</p>
            <button
              onClick={() => setShowAddTask(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              创建任务
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
