/* eslint-disable camelcase */

import { AuthenticationError } from '@redwoodjs/api'
import { context } from '@redwoodjs/api/dist/globalContext'

export const getCurrentUser = async (jwt) => {
  return jwt
}

export const requireAuth = () => {
  if (!context?.currentUser?.app_metadata?.roles?.find((r) => r === 'admin')) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
