import{a as m,j as o,at as l,Z as g,a0 as P,P as f,aZ as h,ay as r}from"./@mui-94e45ada.js";import{o as v}from"./@hookform-4c1cadd7.js";import{u as x}from"./react-hook-form-f9fec52a.js";import{S,B as C}from"./Breadcrumb-c4cf427b.js";import{s as b,b as R,a as c}from"./swal-6db6c20f.js";import{g as A,G as w}from"./graphql-request-396d023b.js";import{A as y,P as I}from"./index-a032e14e.js";import{P as F,a as T,b as B,c as G,p as N,d as O,e as V}from"./ProductoProveedor-6a0fd211.js";import{c as _}from"./react-router-11fb21ef.js";import"./react-is-e5978b8b.js";import"./react-19ede8c0.js";import"./@babel-41a3dc83.js";import"./@emotion-01c0502c.js";import"./hoist-non-react-statics-6e7e3bdb.js";import"./stylis-79144faa.js";import"./react-transition-group-07c33d75.js";import"./react-dom-308b05ff.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./jss-4560bbb1.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-275843d2.js";import"./jss-plugin-global-96037998.js";import"./jss-plugin-nested-279c4525.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-80d6b696.js";import"./jss-plugin-vendor-prefixer-711b305d.js";import"./css-vendor-f41dfb6e.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./react-router-dom-c0e9fbdc.js";import"./@remix-run-d753ad9e.js";import"./react-toastify-ac6b7c37.js";import"./clsx-1229b3e0.js";import"./sweetalert2-b5adf0ab.js";import"./form-data-c8368213.js";import"./extract-files-b993d67a.js";import"./graphql-9eaaa955.js";import"./cross-fetch-ff4a750f.js";import"./rc-input-number-5ce3f958.js";import"./classnames-e62508ea.js";import"./rc-util-f84322a6.js";import"./@rc-component-9042d6d8.js";/* empty css                     */import"./react-datepicker-b19bab85.js";import"./date-fns-66b136a8.js";import"./react-onclickoutside-a7243ba6.js";import"./react-popper-4d77a87f.js";import"./warning-4834017b.js";import"./react-redux-0edfc849.js";import"./use-sync-external-store-b3a8aa83.js";import"./lodash-c8b5ff2a.js";import"./jwt-decode-9c18df67.js";import"./nanoid-bef4f1f3.js";import"./@reduxjs-e99b2c47.js";import"./immer-41fd5235.js";import"./redux-5bd193e3.js";import"./redux-thunk-ef899f4c.js";import"./@tanstack-464f39f1.js";import"./yup-861a4b8a.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-85f95ecf.js";import"./yup-locales-e98f4908.js";import"./react-select-753177b7.js";import"./@floating-ui-de51804c.js";import"./use-isomorphic-layout-effect-2578e237.js";import"./memoize-one-297ddbcb.js";import"./AlertLoading-3592644c.js";import"./ReactSelect-5115d3bc.js";import"./SimpleCard-cc9110a7.js";import"./Typography-c4fd38d1.js";import"./formik-bccae489.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-6dbc5b30.js";import"./tiny-warning-c932d744.js";import"./FormTextField-3f227e6b.js";import"./useQueryActividadesPorDocumentoSector-b0197bf8.js";import"./NumberInput-1ec990a6.js";import"./ProveedorRegistroDialog-e75467b3.js";const $=A`
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
`,j=async(s,a)=>{const t=new w("https://sandbox.isipass.net/api"),p=localStorage.getItem(y);return t.setHeader("authorization",`Bearer ${p}`),(await t.request($,{codigoProducto:s,input:a})).fcvmeProductoRegistro},dr=s=>{const a=_(),t=x({defaultValues:{...I},resolver:v(V)}),p=async e=>{await N(e);const n=e.codigoProducto,d=O(e);await b({preConfirm:async()=>{const i=await j(n,d).catch(u=>({error:u}));return i.error?(c(i.error),!1):i}}).then(i=>{i.isConfirmed&&(R(),a("/productos/gestion/",{replace:!0})),i.isDenied&&c(i.value)})};return m(S,{children:[o("div",{className:"breadcrumb",children:o(C,{routeSegments:[{name:"Servicios",path:"/productos/gestion"},{name:"Nuevo Producto / Servicio"}]})}),o(l,{}),o(g,{elevation:0,variant:"elevation",square:!0,sx:{mb:2,p:.5,bgcolor:"#FAFAFA"},className:"asideSidebarFixed",children:o(P,{direction:{xs:"column",sm:"row"},style:{marginTop:2},spacing:{xs:1,sm:1,md:1,xl:1},justifyContent:"flex-end",children:o(f,{color:"success",startIcon:o(h,{}),variant:"contained",onClick:t.handleSubmit(p),children:"Guardar Servicio"})})}),m(r,{container:!0,spacing:2,children:[o(r,{item:!0,lg:8,md:8,xs:12,children:m(r,{container:!0,spacing:1,children:[o(r,{item:!0,lg:12,md:12,xs:12,children:o(F,{form:t})}),o(r,{item:!0,lg:12,md:12,xs:12,children:o(T,{form:t})})]})}),o(r,{item:!0,lg:4,md:4,xs:12,children:m(r,{container:!0,spacing:1,children:[o(r,{item:!0,lg:12,md:12,xs:12,children:o(B,{form:t})}),o(r,{item:!0,lg:12,md:12,xs:12,children:o(G,{form:t})})]})})]})]})};export{dr as default};
