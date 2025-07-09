import { useState } from 'react'
import { TreePine, Lock, CheckCircle, PlayCircle, Star } from 'lucide-react'
import { SkillStatus, SkillLevel } from '../types'

interface SkillNodeData {
  id: string
  name: string
  description: string
  status: SkillStatus
  level: SkillLevel
  xp: number
  maxXp: number
  position: { x: number; y: number }
}

const mockSkillNodes: SkillNodeData[] = [
  {
    id: '1',
    name: 'HTML基础',
    description: '掌握HTML标签和语法',
    status: SkillStatus.COMPLETED,
    level: SkillLevel.FAMILIAR,
    xp: 100,
    maxXp: 100,
    position: { x: 200, y: 300 }
  },
  {
    id: '2',
    name: 'CSS基础',
    description: '学习CSS样式和布局',
    status: SkillStatus.LEARNING,
    level: SkillLevel.CAPABLE,
    xp: 75,
    maxXp: 100,
    position: { x: 400, y: 250 }
  },
  {
    id: '3',
    name: 'JavaScript基础',
    description: 'JavaScript语法和基本概念',
    status: SkillStatus.AVAILABLE,
    level: SkillLevel.AWARE,
    xp: 30,
    maxXp: 100,
    position: { x: 600, y: 300 }
  },
  {
    id: '4',
    name: 'React框架',
    description: '现代前端框架React',
    status: SkillStatus.LOCKED,
    level: SkillLevel.UNKNOWN,
    xp: 0,
    maxXp: 150,
    position: { x: 800, y: 200 }
  },
  {
    id: '5',
    name: 'TypeScript',
    description: 'JavaScript的超集',
    status: SkillStatus.LOCKED,
    level: SkillLevel.UNKNOWN,
    xp: 0,
    maxXp: 120,
    position: { x: 750, y: 400 }
  }
]

export function SkillTreePage() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNodeData | null>(null)

  const getStatusIcon = (status: SkillStatus) => {
    switch (status) {
      case SkillStatus.COMPLETED:
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case SkillStatus.LEARNING:
        return <PlayCircle className="w-6 h-6 text-blue-500" />
      case SkillStatus.AVAILABLE:
        return <Star className="w-6 h-6 text-yellow-500" />
      case SkillStatus.LOCKED:
        return <Lock className="w-6 h-6 text-gray-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: SkillStatus) => {
    switch (status) {
      case SkillStatus.COMPLETED:
        return 'bg-green-100 border-green-300 text-green-800'
      case SkillStatus.LEARNING:
        return 'bg-blue-100 border-blue-300 text-blue-800'
      case SkillStatus.AVAILABLE:
        return 'bg-yellow-100 border-yellow-300 text-yellow-800'
      case SkillStatus.LOCKED:
        return 'bg-gray-100 border-gray-300 text-gray-500'
      default:
        return 'bg-gray-100 border-gray-300 text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <TreePine className="w-8 h-8 mr-3 text-green-600" />
              我的技能树
            </h1>
            <p className="text-gray-600 mt-2">点击技能节点查看详情和学习路径</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              添加新技能
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              AI推荐技能
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Skill Tree Canvas */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="relative" style={{ height: '600px' }}>
                <svg className="absolute inset-0 w-full h-full">
                  {/* Connection lines */}
                  <line x1="300" y1="300" x2="400" y2="250" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="400" y1="250" x2="600" y2="300" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="600" y1="300" x2="800" y2="200" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="600" y1="300" x2="750" y2="400" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                </svg>

                {/* Skill Nodes */}
                {mockSkillNodes.map((skill) => (
                  <div
                    key={skill.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${getStatusColor(skill.status)} border-2 rounded-xl p-4 w-48 shadow-sm hover:shadow-md transition-all`}
                    style={{ left: skill.position.x, top: skill.position.y }}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{skill.name}</h3>
                      {getStatusIcon(skill.status)}
                    </div>
                    <p className="text-xs mb-3">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          skill.status === SkillStatus.COMPLETED
                            ? 'bg-green-500'
                            : skill.status === SkillStatus.LEARNING
                            ? 'bg-blue-500'
                            : skill.status === SkillStatus.AVAILABLE
                            ? 'bg-yellow-500'
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${(skill.xp / skill.maxXp) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span>{skill.level}</span>
                      <span>{skill.xp}/{skill.maxXp} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              {selectedSkill ? (
                <div>
                  <div className="flex items-center mb-4">
                    {getStatusIcon(selectedSkill.status)}
                    <h2 className="text-xl font-semibold ml-2">{selectedSkill.name}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{selectedSkill.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">掌握程度</span>
                      <p className="text-lg font-semibold text-blue-600">{selectedSkill.level}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700">学习进度</span>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(selectedSkill.xp / selectedSkill.maxXp) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.round((selectedSkill.xp / selectedSkill.maxXp) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700">经验值</span>
                      <p className="text-lg">{selectedSkill.xp} / {selectedSkill.maxXp} XP</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    {selectedSkill.status === SkillStatus.AVAILABLE && (
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        开始学习
                      </button>
                    )}
                    {selectedSkill.status === SkillStatus.LEARNING && (
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                        继续学习
                      </button>
                    )}
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      查看任务
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <TreePine className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>点击技能节点查看详情</p>
                </div>
              )}
            </div>
            
            {/* Legend */}
            <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
              <h3 className="font-semibold mb-4">图例</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>已掌握</span>
                </div>
                <div className="flex items-center">
                  <PlayCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>学习中</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span>可学习</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-4 h-4 text-gray-400 mr-2" />
                  <span>未解锁</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
