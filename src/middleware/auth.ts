import { Request, Response, NextFunction } from 'express'

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user) {
    return res.sendStatus(403)
  }

  return next()
}

export const requireWarehouse = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user || user._doc.role !== 'Warehouse') {
    return res.sendStatus(403)
  }

  return next()
}
