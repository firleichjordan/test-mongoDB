import { Router } from 'express'

import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller'
import { requireUser, requireWarehouse } from '../middleware/auth'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', requireWarehouse, createProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.delete('/:id', deleteProduct)
