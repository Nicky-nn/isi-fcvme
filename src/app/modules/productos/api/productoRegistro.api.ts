// noinspection GraphQLUnresolvedReference

import { gql, GraphQLClient } from 'graphql-request'

import { AccessToken } from '../../../base/models/paramsModel'
import { ProductoInputApiProps, ProductoProps } from '../interfaces/producto.interface'

const gqlQuery = gql`
  mutation FCVME_PRODUCTO_REGISTRO(
    $codigoProducto: String!
    $input: FcvmeProductoInput!
  ) {
    fcvmeProductoRegistro(codigoProducto: $codigoProducto, input: $input) {
      codigoProducto
      descripcion
      usucre
      usumod
      createdAt
      updatedAt
      state
      tipoProducto {
        _id
        descripcion
        codigoParent
        parientes
      }
      proveedor {
        codigo
        nombre
      }
    }
  }
`

export const apiProductoRegistro = async (
  codigoProducto: string, // Agrega el parámetro codigoProducto
  input: ProductoInputApiProps,
): Promise<ProductoProps> => {
  const client = new GraphQLClient(import.meta.env.ISI_API_URL)
  const token = localStorage.getItem(AccessToken)
  // Set a single header
  client.setHeader('authorization', `Bearer ${token}`)
  console.log('apiProductoRegistro', input)
  const data: any = await client.request(gqlQuery, {
    codigoProducto: codigoProducto,
    input: input,
  })
  return data.fcvmeProductoRegistro
}
