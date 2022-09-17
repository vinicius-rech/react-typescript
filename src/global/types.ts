export type Task = {
  id?: number
  title?: string
  status?: string | 'todo'
  description?: string | null
}