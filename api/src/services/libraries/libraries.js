import { db } from 'src/lib/db'

export const libraries = () => {
  return db.library.findMany()
}

export const library = ({ id }) => {
  return db.library.findOne({
    where: { id },
  })
}

export const createLibrary = ({ input }) => {
  return db.library.create({
    data: input,
  })
}

export const updateLibrary = ({ id, input }) => {
  return db.library.update({
    data: input,
    where: { id },
  })
}

export const deleteLibrary = ({ id }) => {
  return db.library.delete({
    where: { id },
  })
}
