import { db } from 'src/lib/db'
import { requireAuth, requireAdmin } from 'src/lib/auth'

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
  requireAdmin()
  return db.library.create({
    data: input,
  })
}

export const updateLibrary = ({ id, input }) => {
  requireAdmin()
  return db.library.update({
    data: input,
    where: { id },
  })
}

export const deleteLibrary = ({ id }) => {
  requireAdmin()
  return db.library.delete({
    where: { id },
  })
}
