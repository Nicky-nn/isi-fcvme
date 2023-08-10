import{g as a,G as t}from"./graphql-request-396d023b.js";import{A as c}from"./index-a032e14e.js";const r=a`
  query LISTADO($limit: Int!, $reverse: Boolean, $page: Int!, $query: String) {
    fcvMonedaExtranjeraListado(
      limit: $limit
      reverse: $reverse
      page: $page
      query: $query
    ) {
      pageInfo {
        hasNextPage
        hasPrevPage
        limit
        page
        totalDocs
      }
      docs {
        cuf
        moneda {
          codigoClasificador
          descripcion
        }
        representacionGrafica {
          rollo
          sin
          pdf
          xml
        }
        sucursal {
          codigo
          direccion
          telefono
        }
        puntoVenta {
          codigo
          tipoPuntoVenta {
            codigoClasificador
            descripcion
          }
          nombre
          descripcion
        }
        metodoPago {
          codigoClasificador
          descripcion
        }
        detalle {
          descripcionProducto
          nroItem
          actividadEconomica {
            codigoCaeb
            descripcion
          }
          productoServicio {
            codigoActividad
            codigoProducto
            descripcionProducto
          }
          codigoProducto
          cantidad
          unidadMedida {
            codigoClasificador
            descripcion
          }
          precioUnitario
          montoDescuento
          subTotal
          detalleExtra
        }
        nitEmisor
        razonSocialEmisor
        numeroFactura
        fechaEmision
        cliente {
          razonSocial
          codigoCliente
          tipoDocumentoIdentidad {
            codigoClasificador
            descripcion
          }
          numeroDocumento
          complemento
          nombres
          apellidos
          email
        }
        montoTotal
        montoTotalMoneda
        tipoCambio
        state
        updatedAt
        usuario
        usucre
        usumod
        createdAt
      }
    }
  }
`,l=async e=>{const o=new t("https://sandbox.isipass.net/api"),i=localStorage.getItem(c);return o.setHeader("authorization",`Bearer ${i}`),(await o.request(r,{...e})).fcvMonedaExtranjeraListado};export{l as f};
