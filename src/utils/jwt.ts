import jwt from 'jsonwebtoken'
import CONFIG from '../config/environment'

export const signJWT = (payload: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, CONFIG.jwt_private, {
    ...(options && options),
    algorithm: 'RS256'
  })
}

export const verifyJWT = (token: string) => {
  try {
    const decoded: any = jwt.verify(token, CONFIG.jwt_public)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null
    }
  }
}

// export const reIssueAccessToken = async (refreshToken: string) => {
//     const { decoded }: any = verifyJWT(refreshToken)

//     const user = await findUserByEmail(decoded._doc.email)
//     if(!user) return false

//     const accessToken = signJWT({ ...user}, { expiresIn: '1d' })
//     return accessToken
// }
