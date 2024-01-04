import { logger } from '../utils/logger'
import porductModel from '../models/product.model'
import ProductType from '../types/product.type'

export const addProductToDB = async (payload: ProductType) => {
  return await porductModel.create(payload)
}

export const getProductFromDB = async () => {
  return await porductModel
    .find()
    .then((data) => {
      // console.log(data);
      return data
    })
    .catch((err) => {
      // console.log(err);
      logger.info('cannot get data from database')
      logger.error(err)
    })
}

export const getProductById = async (id: string) => {
  return await porductModel.findOne({ product_id: id })
  // .then((data) => {
  //     // console.log(data);
  //     return data
  // })
  // .catch((err) => {
  //     // console.log(err);
  //     logger.info('cannot get data from database')
  //     logger.error(err)
  // })
}

export const updateProductById = async (id: string, payload: ProductType) => {
  const result = await porductModel.findOneAndUpdate({ product_id: id }, { $set: payload })
  return result
}

export const deleteProductById = async (id: string) => {
  const result = await porductModel.findOneAndDelete({ product_id: id })
  // console.log(result);
  return result
}
