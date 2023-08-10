import{j as e,F as v,a as g,W as b,aG as k,aH as G,Q as O,P as C,aJ as N,ab as _,Z as H,a0 as K,a_ as Q,ay as x,aB as j}from"./@mui-94e45ada.js";import{r as i}from"./react-19ede8c0.js";import{L as U}from"./react-router-dom-c0e9fbdc.js";import{S as W,B as J}from"./Breadcrumb-c4cf427b.js";import{A as y,p as V,g as c,a as Z,b as X}from"./index-a032e14e.js";import{M as Y}from"./material-react-table-1f8ebe78.js";import{Q as ee}from"./react-toastify-ac6b7c37.js";import{A as oe,S as re}from"./AuditIconButton-d761f0b1.js";import{S as te,a as ie}from"./SimpleMenu-fe44c236.js";import{P as u,l as ae}from"./localization-3d90e8d6.js";import{s as se,a as ne,b as ce}from"./swal-6db6c20f.js";import{g as w,G as A}from"./graphql-request-396d023b.js";import{c as de}from"./react-router-11fb21ef.js";import{e as le}from"./@tanstack-464f39f1.js";import"./react-is-e5978b8b.js";import"./@emotion-01c0502c.js";import"./hoist-non-react-statics-6e7e3bdb.js";import"./@babel-41a3dc83.js";import"./stylis-79144faa.js";import"./react-transition-group-07c33d75.js";import"./react-dom-308b05ff.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./jss-4560bbb1.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-275843d2.js";import"./jss-plugin-global-96037998.js";import"./jss-plugin-nested-279c4525.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-80d6b696.js";import"./jss-plugin-vendor-prefixer-711b305d.js";import"./css-vendor-f41dfb6e.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./@remix-run-d753ad9e.js";import"./rc-input-number-5ce3f958.js";import"./classnames-e62508ea.js";import"./rc-util-f84322a6.js";import"./@rc-component-9042d6d8.js";/* empty css                     */import"./react-datepicker-b19bab85.js";import"./date-fns-66b136a8.js";import"./react-onclickoutside-a7243ba6.js";import"./react-popper-4d77a87f.js";import"./warning-4834017b.js";import"./react-redux-0edfc849.js";import"./use-sync-external-store-b3a8aa83.js";import"./lodash-c8b5ff2a.js";import"./jwt-decode-9c18df67.js";import"./nanoid-bef4f1f3.js";import"./@reduxjs-e99b2c47.js";import"./immer-41fd5235.js";import"./redux-5bd193e3.js";import"./redux-thunk-ef899f4c.js";import"./clsx-1229b3e0.js";import"./form-data-c8368213.js";import"./extract-files-b993d67a.js";import"./graphql-9eaaa955.js";import"./cross-fetch-ff4a750f.js";import"./highlight-words-42d92bcd.js";import"./sweetalert2-b5adf0ab.js";const pe=w`
  query ICE_PRODUCTO_LISTADO(
    $limit: Int!
    $reverse: Boolean
    $page: Int!
    $query: String
  ) {
    fcvmeProductoListado(limit: $limit, reverse: $reverse, page: $page, query: $query) {
      pageInfo {
        hasNextPage
        hasPrevPage
        limit
        page
        totalDocs
      }
      docs {
        codigoProducto
        state
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
        createdAt
        usumod
        updatedAt
      }
    }
  }
`,me=async o=>{const t=new A("https://sandbox.isipass.net/api"),a=localStorage.getItem(y);return t.setHeader("authorization",`Bearer ${a}`),(await t.request(pe,{...o})).fcvmeProductoListado},ue=w`
  mutation expoProductoListado_PRODUCTOS_ELIMINAR($codigoProducto: String!) {
    fcvmeProductoEliminar(codigoProducto: $codigoProducto)
  }
`,ge=async o=>{const t=new A("https://sandbox.isipass.net/api"),a=localStorage.getItem(y);return t.setHeader("authorization",`Bearer ${a}`),(await t.request(ue,{codigoProducto:o})).fcvmeProductoEliminar},he=[{id:"codigoProducto",header:"Código Servicio",accessorFn:o=>c(o.codigoProducto,"")},{accessorKey:"nombre",header:"Producto",id:"nombre",size:150},{accessorKey:"descripcion",header:"Descripción",id:"descripcion",size:200},{accessorKey:"precio",header:"Precio",id:"precio",size:135,accessorFn:o=>c(o.precio,"")},{accessorKey:"proveedor.nombre",header:"Proveedor",id:"proveedor",accessorFn:o=>{var t;return c((t=o.proveedor)==null?void 0:t.nombre,"-")}},{accessorKey:"unidadMedida.descripcion",header:"Unidad Medida",id:"unidadMedida",accessorFn:o=>c(o.unidadMedida.descripcion,"")},{accessorKey:"precioComparacion",header:"Precio Comparación",id:"precioComparacion",size:135,accessorFn:o=>c(o.precioComparacion,"")},{accessorFn:o=>e(_,{size:"small",label:o.state,color:"success"}),id:"state",header:"Estado"}],fe=o=>{const t=de(),[a,l]=i.useState([]),[s,F]=i.useState({pageIndex:u.page,pageSize:u.limit}),[R,T]=i.useState(0),[I,h]=i.useState(!1),[p,E]=i.useState([]);i.useState("");const[M,f]=i.useState({}),[Pe,z]=i.useState(!1),B=async()=>{h(!0);try{await S()}catch(r){console.error("Error al recargar los datos:",r)}h(!1)},{data:$,isError:P,isFetching:Se,isLoading:D,status:ve,refetch:S}=le(["table-data",a,s.pageIndex,s.pageSize,p],async()=>{const r=Z(a),d={...u,page:s.pageIndex+1,limit:s.pageSize,reverse:p.length<=0,query:r},{pageInfo:m,docs:n}=await me(d);return T(m.totalDocs),z(!1),n},{refetchOnWindowFocus:!0,keepPreviousData:!0}),q=i.useMemo(()=>he,[]),L=async r=>{const d=r.flat();if(d.length!==1){ee.error("Solo se puede seleccionar un elemento para eliminar.");return}const m=d[0].original.codigoProducto;await se({text:"Confirma que desea eliminar el registro seleccionado y sus respectivas variantes, esta operación no se podrá revertir",preConfirm:()=>ge(m).catch(n=>(ne(n),!1))}).then(n=>{n.isConfirmed&&(ce(),f({}),S())})};return e(v,{children:e(Y,{columns:q,data:$??[],initialState:{showColumnFilters:!0,columnVisibility:{descripcion:!1,proveedor:!1,precioComparacion:!1}},manualFiltering:!0,manualPagination:!0,manualSorting:!0,muiToolbarAlertBannerProps:P?{color:"error",children:"Error loading data"}:void 0,onColumnFiltersChange:l,onPaginationChange:F,onSortingChange:E,enableDensityToggle:!1,enableGlobalFilter:!1,rowCount:R,localization:ae,state:{isLoading:D,columnFilters:a,pagination:s,showAlertBanner:P,showProgressBars:I,density:"compact",sorting:p,rowSelection:M},muiSearchTextFieldProps:{variant:"outlined",placeholder:"Busqueda",InputLabelProps:{shrink:!0},size:"small"},enableRowActions:!0,positionActionsColumn:"first",renderRowActions:({row:r})=>g("div",{style:{display:"flex",flexWrap:"nowrap",gap:"0.5rem"},children:[e(te,{menuButton:e(v,{children:e(b,{"aria-label":"delete",children:e(k,{})})}),children:e(b,{children:g(ie,{onClick:()=>t(`${V.modificar}/${r.original.codigoProducto}`),children:[e(G,{}),"Modificar"]})})}),e(oe,{row:r.original})]}),muiTableHeadCellFilterTextFieldProps:{sx:{m:"0.5rem 0",width:"95%"},variant:"outlined",size:"small"},enableRowSelection:!0,onRowSelectionChange:f,renderTopToolbarCustomActions:({table:r})=>e(O,{sx:{display:"flex",gap:"1rem",p:"0.5rem",flexWrap:"wrap"},children:e(re,{refetch:B,sx:{flexGrow:1},children:e(C,{color:"error",onClick:()=>L(r.getSelectedRowModel().flatRows),startIcon:e(N,{}),variant:"contained",size:"small",sx:{height:"28px",top:"0.5rem"},disabled:r.getSelectedRowModel().flatRows.length===0,children:"Eliminar"})})}),muiTableProps:{sx:{tableLayout:"fixed"}},displayColumnDefOptions:{"mrt-row-actions":{muiTableHeadCellProps:{align:"center"},size:120}}})})},To=()=>(i.useContext(X),g(W,{children:[e("div",{className:"breadcrumb",children:e(J,{routeSegments:[{name:"Servicio",path:"/productos/gestión"},{name:"Gestión de servicios"}]})}),e(H,{elevation:0,variant:"elevation",square:!0,sx:{mb:2,p:.5,bgcolor:"#FAFAFA"},className:"asideSidebarFixed",children:e(K,{direction:{xs:"column",sm:"row"},style:{marginTop:2},spacing:{xs:1,sm:1,md:1,xl:1},justifyContent:"flex-end",children:e(C,{size:"small",variant:"contained",component:U,to:"/productos/nuevo",startIcon:e(Q,{}),color:"success",children:"Nuevo Servicio"})})}),e(x,{container:!0,spacing:2,children:e(x,{item:!0,lg:12,md:12,xs:12,children:e(fe,{})})}),e(j,{py:"12px"})]}));export{To as default};
