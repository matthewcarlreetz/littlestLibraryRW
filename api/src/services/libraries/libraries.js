import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const libraries = () => {
  requireAuth()
  return db.library.findMany()
}

export const library = ({ id }) => {
  requireAuth()
  return db.library.findOne({
    where: { id },
  })
}

export const createLibrary = ({ input }) => {
  requireAuth()
  return db.library.create({
    data: input,
  })
}

export const updateLibrary = ({ id, input }) => {
  requireAuth()
  return db.library.update({
    data: input,
    where: { id },
  })
}

export const deleteLibrary = ({ id }) => {
  requireAuth()
  return db.library.delete({
    where: { id },
  })
}
