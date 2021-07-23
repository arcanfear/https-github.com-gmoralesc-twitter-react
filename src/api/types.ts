export type Id = {
  id: string
}

type Generic = {
  _id: string
  createdAt: string
  updatedAt: string
}

export type User = {
  name: string
  username: string
  email: string
  id?: string
  dateCreatedAt?: string
} & Generic

export type UserParams = {
  name: string
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

type Comment = {
  _id: string,
  comment: string,
  user: User
}

export type Tweet = {
  content: string
  user: User
  likes: number
  comments: Comment[]
  id?: string
  date?: string
} & Generic
