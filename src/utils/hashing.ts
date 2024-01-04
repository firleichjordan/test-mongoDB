import bcrypt from 'bcrypt'

// encode
export const hashing = (password: string) => {
  return bcrypt.hashSync(password, 10)
}

// decode (untuk cek password yang dimasukkan dan yang ada di database)
export const checkPassword = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword)
}
