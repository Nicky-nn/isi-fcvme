import{j as e,F as h,a as r,Z as G,a0 as M,P as R,aU as q,ay as C,W as L,aG as $,aV as k,aW as K,aX as S,aB as O,ab as V}from"./@mui-94e45ada.js";import{M as W}from"./material-react-table-1f8ebe78.js";import{r as a}from"./react-19ede8c0.js";import{L as j}from"./react-router-dom-c0e9fbdc.js";import{A as U,S as H}from"./AuditIconButton-d761f0b1.js";import{S as Q,B as X}from"./Breadcrumb-c4cf427b.js";import{n as b}from"./NumberInput-1ec990a6.js";import{S as _,a as l}from"./SimpleMenu-fe44c236.js";import{P as d,l as Z,b as y}from"./localization-3d90e8d6.js";import{A as J,n as F,o as p,a as Y}from"./index-a032e14e.js";import{m as ee,d as oe}from"./materialReactTableUtils-e433a167.js";import{g as te,G as ie}from"./graphql-request-396d023b.js";import{e as ae}from"./@tanstack-464f39f1.js";import"./react-is-e5978b8b.js";import"./@emotion-01c0502c.js";import"./hoist-non-react-statics-6e7e3bdb.js";import"./@babel-41a3dc83.js";import"./stylis-79144faa.js";import"./react-transition-group-07c33d75.js";import"./react-dom-308b05ff.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./jss-4560bbb1.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-275843d2.js";import"./jss-plugin-global-96037998.js";import"./jss-plugin-nested-279c4525.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-80d6b696.js";import"./jss-plugin-vendor-prefixer-711b305d.js";import"./css-vendor-f41dfb6e.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./highlight-words-42d92bcd.js";import"./react-router-11fb21ef.js";import"./@remix-run-d753ad9e.js";import"./rc-input-number-5ce3f958.js";import"./classnames-e62508ea.js";import"./rc-util-f84322a6.js";import"./@rc-component-9042d6d8.js";/* empty css                     */import"./react-toastify-ac6b7c37.js";import"./clsx-1229b3e0.js";import"./react-datepicker-b19bab85.js";import"./date-fns-66b136a8.js";import"./react-onclickoutside-a7243ba6.js";import"./react-popper-4d77a87f.js";import"./warning-4834017b.js";import"./react-redux-0edfc849.js";import"./use-sync-external-store-b3a8aa83.js";import"./lodash-c8b5ff2a.js";import"./jwt-decode-9c18df67.js";import"./nanoid-bef4f1f3.js";import"./@reduxjs-e99b2c47.js";import"./immer-41fd5235.js";import"./redux-5bd193e3.js";import"./redux-thunk-ef899f4c.js";import"./form-data-c8368213.js";import"./extract-files-b993d67a.js";import"./graphql-9eaaa955.js";import"./cross-fetch-ff4a750f.js";const re=te`
  query NCD_LISTADO($limit: Int!, $reverse: Boolean, $page: Int!, $query: String) {
    notaCreditoDebitoAlqListado(
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
        totalPages
      }
      docs {
        nitEmisor
        razonSocialEmisor
        numeroNotaCreditoDebito
        numeroFactura
        cuf
        cufd {
          codigo
          codigoControl
        }
        cuis {
          codigo
        }
        sucursal {
          codigo
        }
        puntoVenta {
          codigo
        }
        fechaEmision

        cliente {
          razonSocial
          codigoCliente
          numeroDocumento
          tipoDocumentoIdentidad {
            codigoClasificador
            descripcion
          }
          complemento
        }
        numeroAutorizacionCuf
        fechaEmisionFactura
        montoTotalOriginal
        montoTotalDevuelto
        montoDescuentoCreditoDebito
        montoEfectivoCreditoDebito
        usuario
        detalle {
          nroItem
          nroItemFactura
          productoServicio {
            codigoActividad
            codigoProducto
            descripcionProducto
          }
          producto
          descripcion
          cantidad
          unidadMedida {
            descripcion
          }
          precioUnitario
        }
        codigoRecepcion
        motivoAnulacion {
          descripcion
        }
        representacionGrafica {
          pdf
          rollo
          xml
          sin
        }
        usucre
        createdAt
        updatedAt
        state
      }
    }
  }
`,D=async o=>{const n=new ie("https://sandbox.isipass.net/api"),i=localStorage.getItem(J);return n.setHeader("authorization",`Bearer ${i}`),(await n.request(re,{...o})).notaCreditoDebitoAlqListado},ne=[{header:"Nro.",accessorKey:"numeroFactura",size:140},{accessorKey:"fechaEmisionFactura",header:"Fecha FCV",id:"fechaEmisionFactura",size:180},{accessorKey:"fechaEmision",header:"Fecha NCD",id:"fechaEmision",size:180},{header:"Número NCD",accessorKey:"numeroNotaCreditoDebito",size:140},{header:"Razon Social",id:"cliente.razonSocial",accessorKey:"cliente.razonSocial",maxSize:250,minSize:200},{id:"cliente.numeroDocumento",header:"Nro. Documento",accessorFn:o=>r("span",{children:[o.cliente.numeroDocumento," ",o.cliente.complemento?`-${o.cliente.complemento}`:""]}),filterFn:(o,n,i)=>o.original.cliente.numeroDocumento.startsWith(i),size:155},{accessorKey:"cuf",id:"cuf",header:"C.U.F."},{accessorKey:"montoTotalOriginal",header:"Monto.Original",Cell:({cell:o})=>e("span",{children:b(o.getValue(),{})}),muiTableBodyCellProps:{align:"right"}},{accessorKey:"montoTotalDevuelto",header:"Monto.Devuelto",Cell:({cell:o})=>e("span",{children:b(o.getValue(),{})}),muiTableBodyCellProps:{align:"right"}},{accessorKey:"state",header:"Estado",accessorFn:o=>e(V,{color:o.state===y.validada?"success":o.state===y.pendiente?"warning":"error",label:o.state,size:"small"}),filterVariant:"select",filterSelectOptions:oe,filterFn:(o,n,i)=>o.original.state.toLowerCase().startsWith(i.toLowerCase())}],So=()=>{a.useState(!1),a.useState(!1);const[o,n]=a.useState(0),[i,u]=a.useState([]),[m,A]=a.useState([]),[s,x]=a.useState({pageIndex:d.page,pageSize:d.limit}),[P,se]=a.useState({}),[ce,g]=a.useState(!1),v=async()=>{g(!0);try{await E()}catch(t){console.error("Error al recargar los datos:",t)}g(!1)},{data:T,isError:f,isLoading:z,refetch:E,isRefetching:N}=ae(["gestionNotas",i,s.pageIndex,s.pageSize,m],async()=>{try{const t=Y(i),c={...d,page:s.pageIndex+1,limit:s.pageSize,reverse:m.length<=0,query:t};if(await D(c)){const{pageInfo:w,docs:B}=await D(c);return n(w.totalDocs),B}else return[]}catch(t){throw console.log(t),t}}),I=a.useMemo(()=>ne,[]);return e(h,{children:r(Q,{children:[e("div",{className:"breadcrumb",children:e(X,{routeSegments:[{name:"Notas de crédito debito",path:F.gestion},{name:"Gestión de Notas"}]})}),e(G,{elevation:0,variant:"elevation",square:!0,sx:{mb:2,p:.5,bgcolor:"#FAFAFA"},className:"asideSidebarFixed",children:e(M,{direction:{xs:"column",sm:"row"},style:{marginTop:2},spacing:{xs:1,sm:1,md:1,xl:1},justifyContent:"flex-end",children:e(R,{size:"small",startIcon:e(q,{}),variant:"contained",color:"success",component:j,to:F.nuevo,children:"Nueva Nota de Crédito Debito"})})}),e(C,{container:!0,spacing:2,children:e(C,{item:!0,lg:12,md:12,xs:12,children:e(W,{columns:I,data:T??[],initialState:{showColumnFilters:!0,columnVisibility:{cuf:!1,fechaEmisionFactura:!1,fechaEmision:!1}},manualFiltering:!0,manualPagination:!0,manualSorting:!0,muiToolbarAlertBannerProps:f?{color:"error",children:"Error Cargando Datos"}:void 0,onColumnFiltersChange:u,onPaginationChange:x,onSortingChange:A,enableDensityToggle:!1,enableGlobalFilter:!1,rowCount:o,localization:Z,state:{isLoading:z,columnFilters:i,pagination:s,showAlertBanner:f,showProgressBars:N,sorting:m,density:"compact",columnPinning:{right:["actions"]},rowSelection:P},enableRowActions:!0,positionActionsColumn:"first",displayColumnDefOptions:{"mrt-row-actions":{header:"Acciones",size:110}},renderRowActions:({row:t})=>r("div",{style:{display:"flex",flexWrap:"nowrap",gap:"0.5rem"},children:[r(_,{menuButton:e(h,{children:e(L,{"aria-label":"delete",children:e($,{})})}),children:[r(l,{onClick:c=>{c.preventDefault()},children:[e(k,{})," Anular Documento"]}),r(l,{onClick:()=>{p(t.original.representacionGrafica.pdf)},children:[e(K,{})," Pdf Medio Oficio"]}),r(l,{onClick:()=>{p(t.original.representacionGrafica.xml)},children:[e(S,{})," Xml"]}),r(l,{onClick:()=>{p(t.original.representacionGrafica.sin)},children:[e(S,{})," Url S.I.N."]})]}),e(U,{row:t.original})]}),muiTableHeadCellFilterTextFieldProps:{...ee},renderTopToolbarCustomActions:({table:t})=>e(H,{refetch:v,sx:{flexGrow:1},justifyContent:"flex-start"})})})}),e(O,{py:"12px"})]})})};export{So as default};
