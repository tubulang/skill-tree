import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { SkillLevel, SkillStatus } from '../types'

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format time duration in minutes to human readable format
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}分钟`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return `${hours}小时`
  }
  
  return `${hours}小时${remainingMinutes}分钟`
}

/**
 * Calculate XP needed for next skill level
 */
export function getXpForNextLevel(currentLevel: SkillLevel): number {
  const xpMap: Record<SkillLevel, number> = {
    [SkillLevel.UNKNOWN]: 50,
    [SkillLevel.AWARE]: 100,
    [SkillLevel.CAPABLE]: 200,
    [SkillLevel.FAMILIAR]: 400,
    [SkillLevel.PROFICIENT]: 800,
    [SkillLevel.MASTER]: 0, // Max level
  }
  
  return xpMap[currentLevel]
}

/**
 * Get skill level based on XP
 */
export function getSkillLevelFromXp(xp: number): SkillLevel {
  if (xp >= 800) return SkillLevel.MASTER
  if (xp >= 400) return SkillLevel.PROFICIENT
  if (xp >= 200) return SkillLevel.FAMILIAR
  if (xp >= 100) return SkillLevel.CAPABLE
  if (xp >= 50) return SkillLevel.AWARE
  return SkillLevel.UNKNOWN
}

/**
 * Calculate learning capacity based on age
 */
export function calculateLearningCapacity(age: number): {
  dailyCapacity: number
  weeklyCapacity: number
  monthlyCapacity: number
  description: string
} {
  let dailyCapacity: number
  let description: string
  
  if (age <= 25) {
    dailyCapacity = 4 // 4 hours per day
    description = '年轻活力，学习能力强'
  } else if (age <= 35) {
    dailyCapacity = 3 // 3 hours per day  
    description = '精力充沛，专注度高'
  } else if (age <= 45) {
    dailyCapacity = 2.5 // 2.5 hours per day
    description = '经验丰富，学习高效'
  } else if (age <= 55) {
    dailyCapacity = 2 // 2 hours per day
    description = '智慧沉淀，深度学习'
  } else {
    dailyCapacity = 1.5 // 1.5 hours per day
    description = '厚积薄发，品质学习'
  }
  
  return {
    dailyCapacity,
    weeklyCapacity: dailyCapacity * 7,
    monthlyCapacity: dailyCapacity * 30,
    description
  }
}

/**
 * Calculate remaining life time based on age (assuming 100 years lifespan)
 */
export function calculateLifeTimeLeft(age: number): {
  years: number
  months: number
  days: number
  percentage: number
} {
  const maxAge = 100
  const remainingYears = Math.max(0, maxAge - age)
  const remainingMonths = remainingYears * 12
  const remainingDays = remainingYears * 365
  const percentage = (age / maxAge) * 100
  
  return {
    years: remainingYears,
    months: remainingMonths,
    days: remainingDays,
    percentage: Math.min(100, percentage)
  }
}

/**
 * Generate AI recommendation priority based on user skills and goals
 */
export function calculateRecommendationPriority(
  userSkills: string[],
  targetSkill: string,
  skillDependencies: string[]
): number {
  // Simple algorithm - in real app would use ML model
  let priority = 5 // Base priority
  
  // Check if user has prerequisite skills
  const hasPrerequisites = skillDependencies.every(dep => 
    userSkills.includes(dep)
  )
  
  if (hasPrerequisites) {
    priority += 3
  }
  
  // Check skill demand (mock data)
  const highDemandSkills = ['React', 'TypeScript', 'Python', 'AI', 'Node.js']
  if (highDemandSkills.includes(targetSkill)) {
    priority += 2
  }
  
  return Math.min(10, priority)
}

/**
 * Format date to Chinese locale
 */
export function formatChineseDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Format time to Chinese locale
 */
export function formatChineseTime(date: Date): string {
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Calculate skill tree completion percentage
 */
export function calculateSkillTreeCompletion(skills: any[]): number {
  if (skills.length === 0) return 0
  
  const totalXp = skills.reduce((sum, skill) => sum + skill.maxXp, 0)
  const currentXp = skills.reduce((sum, skill) => sum + skill.xp, 0)
  
  return Math.round((currentXp / totalXp) * 100)
}

/**
 * Get skill status color class
 */
export function getSkillStatusColor(status: SkillStatus): string {
  const colorMap: Record<SkillStatus, string> = {
    [SkillStatus.LOCKED]: 'bg-gray-100 border-gray-300 text-gray-500',
    [SkillStatus.AVAILABLE]: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    [SkillStatus.LEARNING]: 'bg-blue-100 border-blue-300 text-blue-800',
    [SkillStatus.COMPLETED]: 'bg-green-100 border-green-300 text-green-800',
  }
  
  return colorMap[status]
}

/**
 * Generate random skill recommendations (mock AI)
 */
export function generateSkillRecommendations(userSkills: string[]): string[] {
  const allSkills = [
    'React Hooks', 'TypeScript', 'Node.js', 'GraphQL', 'Docker',
    'Kubernetes', 'AWS', 'Python', 'Machine Learning', 'Vue.js',
    'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Tailwind CSS'
  ]
  
  // Filter out skills user already has
  const availableSkills = allSkills.filter(skill => !userSkills.includes(skill))
  
  // Return random 3-5 recommendations
  const count = Math.floor(Math.random() * 3) + 3
  return availableSkills
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Generate unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait) as unknown as number
  }
}
