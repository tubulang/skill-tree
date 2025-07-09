import { create } from 'zustand'
import { 
  User, 
  SkillNode, 
  Task, 
  Circle, 
  Note, 
  Achievement, 
  GameStats,
  AIRecommendation 
} from '../types'

interface AppState {
  // User state
  user: User | null
  setUser: (user: User) => void
  
  // Skills state
  skills: SkillNode[]
  setSkills: (skills: SkillNode[]) => void
  updateSkill: (skillId: string, updates: Partial<SkillNode>) => void
  
  // Tasks state
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  addTask: (task: Task) => void
  updateTask: (taskId: string, updates: Partial<Task>) => void
  deleteTask: (taskId: string) => void
  
  // Circles state
  circles: Circle[]
  setCircles: (circles: Circle[]) => void
  joinCircle: (circleId: string) => void
  leaveCircle: (circleId: string) => void
  
  // Notes state
  notes: Note[]
  setNotes: (notes: Note[]) => void
  addNote: (note: Note) => void
  updateNote: (noteId: string, updates: Partial<Note>) => void
  deleteNote: (noteId: string) => void
  
  // Achievements state
  achievements: Achievement[]
  setAchievements: (achievements: Achievement[]) => void
  unlockAchievement: (achievementId: string) => void
  
  // Game stats
  gameStats: GameStats | null
  setGameStats: (stats: GameStats) => void
  
  // AI Recommendations
  recommendations: AIRecommendation[]
  setRecommendations: (recommendations: AIRecommendation[]) => void
  
  // UI state
  loading: boolean
  setLoading: (loading: boolean) => void
  error: string | null
  setError: (error: string | null) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),
  
  // Skills state
  skills: [],
  setSkills: (skills) => set({ skills }),
  updateSkill: (skillId, updates) => 
    set((state) => ({
      skills: state.skills.map((skill) =>
        skill.id === skillId ? { ...skill, ...updates } : skill
      )
    })),
  
  // Tasks state
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => 
    set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId)
    })),
  
  // Circles state
  circles: [],
  setCircles: (circles) => set({ circles }),
  joinCircle: (circleId) => {
    // In a real app, this would make an API call
    console.log(`Joining circle ${circleId}`)
  },
  leaveCircle: (circleId) => {
    // In a real app, this would make an API call
    console.log(`Leaving circle ${circleId}`)
  },
  
  // Notes state
  notes: [],
  setNotes: (notes) => set({ notes }),
  addNote: (note) =>
    set((state) => ({ notes: [note, ...state.notes] })),
  updateNote: (noteId, updates) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId ? { ...note, ...updates } : note
      )
    })),
  deleteNote: (noteId) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== noteId)
    })),
  
  // Achievements state
  achievements: [],
  setAchievements: (achievements) => set({ achievements }),
  unlockAchievement: (achievementId) =>
    set((state) => ({
      achievements: state.achievements.map((achievement) =>
        achievement.id === achievementId
          ? { ...achievement, unlockedAt: new Date() }
          : achievement
      )
    })),
  
  // Game stats
  gameStats: null,
  setGameStats: (stats) => set({ gameStats: stats }),
  
  // AI Recommendations
  recommendations: [],
  setRecommendations: (recommendations) => set({ recommendations }),
  
  // UI state
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
}))

// Selectors for computed values
export const useUserLevel = () => {
  const user = useAppStore((state) => state.user)
  if (!user) return 0
  
  // Simple level calculation based on total XP
  return Math.floor(user.totalXp / 500) + 1
}

export const useSkillProgress = () => {
  const skills = useAppStore((state) => state.skills)
  
  const totalSkills = skills.length
  const completedSkills = skills.filter(skill => skill.xp >= skill.maxXp).length
  const progressPercentage = totalSkills > 0 ? (completedSkills / totalSkills) * 100 : 0
  
  return {
    totalSkills,
    completedSkills,
    progressPercentage
  }
}

export const useTaskProgress = () => {
  const tasks = useAppStore((state) => state.tasks)
  
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.status === 'completed').length
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length
  const todoTasks = tasks.filter(task => task.status === 'todo').length
  
  return {
    totalTasks,
    completedTasks,
    inProgressTasks,
    todoTasks
  }
}

export const useCurrentStreak = () => {
  const gameStats = useAppStore((state) => state.gameStats)
  return gameStats?.currentStreak || 0
}
