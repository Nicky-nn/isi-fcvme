import{a as p,j as t,at as b,Z as w,a0 as I,P as S,a$ as V,aZ as $,ay as s}from"./@mui-94e45ada.js";import{o as q}from"./@hookform-4c1cadd7.js";import{r as A}from"./react-19ede8c0.js";import{u as T}from"./react-hook-form-f9fec52a.js";import{Q as O}from"./react-toastify-ac6b7c37.js";import{S as R,B as D}from"./Breadcrumb-c4cf427b.js";import{A as u,i as E,p as _,P as k}from"./index-a032e14e.js";import{c as C,s as B,b as z,a as f,d as L,e as M}from"./swal-6db6c20f.js";import{g as l,G as g}from"./graphql-request-396d023b.js";import{P as U,a as H,b as N,c as Q,p as j,d as G,e as F}from"./ProductoProveedor-6a0fd211.js";import{f as Z,c as X}from"./react-router-11fb21ef.js";import"./react-is-e5978b8b.js";import"./@emotion-01c0502c.js";import"./hoist-non-react-statics-6e7e3bdb.js";import"./@babel-41a3dc83.js";import"./stylis-79144faa.js";import"./react-transition-group-07c33d75.js";import"./react-dom-308b05ff.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./jss-4560bbb1.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-275843d2.js";import"./jss-plugin-global-96037998.js";import"./jss-plugin-nested-279c4525.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-80d6b696.js";import"./jss-plugin-vendor-prefixer-711b305d.js";import"./css-vendor-f41dfb6e.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./clsx-1229b3e0.js";import"./react-router-dom-c0e9fbdc.js";import"./@remix-run-d753ad9e.js";import"./rc-input-number-5ce3f958.js";import"./classnames-e62508ea.js";import"./rc-util-f84322a6.js";import"./@rc-component-9042d6d8.js";/* empty css                     */import"./react-datepicker-b19bab85.js";import"./date-fns-66b136a8.js";import"./react-onclickoutside-a7243ba6.js";import"./react-popper-4d77a87f.js";import"./warning-4834017b.js";import"./react-redux-0edfc849.js";import"./use-sync-external-store-b3a8aa83.js";import"./lodash-c8b5ff2a.js";import"./jwt-decode-9c18df67.js";import"./nanoid-bef4f1f3.js";import"./@reduxjs-e99b2c47.js";import"./immer-41fd5235.js";import"./redux-5bd193e3.js";import"./redux-thunk-ef899f4c.js";import"./@tanstack-464f39f1.js";import"./form-data-c8368213.js";import"./extract-files-b993d67a.js";import"./graphql-9eaaa955.js";import"./cross-fetch-ff4a750f.js";import"./sweetalert2-b5adf0ab.js";import"./yup-861a4b8a.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-85f95ecf.js";import"./yup-locales-e98f4908.js";import"./react-select-753177b7.js";import"./@floating-ui-de51804c.js";import"./use-isomorphic-layout-effect-2578e237.js";import"./memoize-one-297ddbcb.js";import"./AlertLoading-3592644c.js";import"./ReactSelect-5115d3bc.js";import"./SimpleCard-cc9110a7.js";import"./Typography-c4fd38d1.js";import"./formik-bccae489.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-6dbc5b30.js";import"./tiny-warning-c932d744.js";import"./FormTextField-3f227e6b.js";import"./useQueryActividadesPorDocumentoSector-b0197bf8.js";import"./NumberInput-1ec990a6.js";import"./ProveedorRegistroDialog-e75467b3.js";const J=l`
  query ALQ_PARAMETROS {
    sinActividades {
      codigoCaeb
      descripcion
      tipoActividad
    }
  }
`,K=async()=>{const c=new g("https://sandbox.isipass.net/api"),r=localStorage.getItem(u);return c.setHeader("authorization",`Bearer ${r}`),(await c.request(J)).sinActividades||[]},W=l`
  query TIPO_PRODUCTO($id: ID!) {
    tipoProducto(id: $id) {
      _id
      descripcion
      codigoParent
      parientes
    }
  }
`,Y=async c=>{const r=new g("https://sandbox.isipass.net/api"),e=localStorage.getItem(u);return r.setHeader("authorization",`Bearer ${e}`),(await r.request(W,{id:c})).tipoProducto||[]},oo=l`
  mutation PRODUCTOS_ACTUALIZAR($codigoProducto: String!, $input: FcvmeProductoInput!) {
    fcvmeProductoActualizar(codigoProducto: $codigoProducto, input: $input) {
      codigoProducto
      descripcion
      usucre
      usumod
    }
  }
`,to=async(c,r)=>{const e=new g("https://sandbox.isipass.net/api"),m=localStorage.getItem(u);return e.setHeader("authorization",`Bearer ${m}`),(await e.request(oo,{codigoProducto:c,input:r})).fcvmeProductoActualizar},io=l`
  query EXPO_PRODUCTO($codigoProducto: ID!) {
    fcvmeProducto(codigoProducto: $codigoProducto) {
      codigoProducto
      nombre
      descripcion
      actividadEconomica {
        codigoCaeb
        descripcion
        tipoActividad
      }
      descripcionHtml
      tipoProducto {
        _id
        descripcion
        codigoParent
      }
      imagen {
        altText
        url
      }
      proveedor {
        codigo
        nombre
        correo
      }
      sinProductoServicio {
        codigoActividad
        codigoProducto
        descripcionProducto
      }
      precio
      precioComparacion
      costo
      unidadMedida {
        codigoClasificador
        descripcion
      }
      state
      usucre
      usumod
      updatedAt
      createdAt
    }
  }
`,ro=async c=>{const r=new g("https://sandbox.isipass.net/api"),e=localStorage.getItem(u);return r.setHeader("authorization",`Bearer ${e}`),(await r.request(io,{codigoProducto:c})).fcvmeProducto},Ot=c=>{const{id:r}=Z(),e=X(),[m,h]=A.useState(void 0),i=T({defaultValues:{...k},resolver:q(F)}),x=async n=>{await j(n);const o=n.codigoProducto,P=G(n);await B({preConfirm:async()=>{const a=await to(o,P).catch(d=>({error:d}));return a.error?(O.error("Error"),f(a.error),!1):a}}).then(a=>{a.isConfirmed&&z(),a.isDenied&&f(a.value)})},y=async n=>{try{L();const o=await ro(n);h(o[0]);const P=await K();if(o){const a=o.sinProductoServicio,d=P.find(v=>v.codigoCaeb===a.codigoActividad);if(i.setValue("codigoActividad",o.sinProductoServicio),i.setValue("codigoActividad.tipoActividad",(d==null?void 0:d.tipoActividad)||""),i.setValue("codigoActividad.actividadEconomica",(d==null?void 0:d.descripcion)||""),i.setValue("codigoProductoSin",o.sinProductoServicio),i.setValue("codigoUnidadMedida",o.unidadMedida),i.setValue("codigoProveedor",o.proveedor),i.setValue("nombre",o.nombre),i.setValue("codigoProducto",o.codigoProducto),i.setValue("descripcion",o.descripcion),i.setValue("precio",o.precio),o.tipoProducto&&o.tipoProducto._id){const v=await Y(o.tipoProducto._id);i.setValue("tipoProducto",v)}}else C("No se encontró el producto"),e(-1);M()}catch(o){f(o)}};return A.useEffect(()=>{(async()=>E(r)?(C("Se requiere el código del producto"),e(-1)):await y(r).then())()},[]),p(R,{children:[t("div",{className:"breadcrumb",children:t(D,{routeSegments:[{name:"Servicios",path:"/productos/gestion"},{name:"Modificar Servicio"}]})}),t(b,{}),t(w,{elevation:0,variant:"elevation",square:!0,sx:{mb:2,p:.5},className:"asideSidebarFixed",children:p(I,{direction:{xs:"column",sm:"row"},style:{marginTop:2},spacing:{xs:-2,sm:0,md:1,xl:0},justifyContent:"flex-end",children:[t(S,{color:"primary",startIcon:t(V,{}),variant:"contained",onClick:()=>{e(_.nuevo)},children:"Nuevo Servicio"})," ",t(S,{color:"success",startIcon:t($,{}),variant:"contained",onClick:i.handleSubmit(x),children:"Guardar Cambios"})]})}),p(s,{container:!0,spacing:2,children:[t(s,{item:!0,lg:8,md:8,xs:12,children:p(s,{container:!0,spacing:1,children:[t(s,{item:!0,lg:12,md:12,xs:12,children:t(U,{form:i})}),t(s,{item:!0,lg:12,md:12,xs:12,children:t(H,{form:i})})]})}),t(s,{item:!0,lg:4,md:4,xs:12,children:p(s,{container:!0,spacing:1,children:[t(s,{item:!0,lg:12,md:12,xs:12,children:t(N,{form:i})}),t(s,{item:!0,lg:12,md:12,xs:12,children:t(Q,{form:i})})]})})]})]})};export{Ot as default};
