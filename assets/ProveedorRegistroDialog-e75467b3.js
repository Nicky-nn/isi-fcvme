import{g as m,G as h}from"./graphql-request-396d023b.js";import{A as g,c as f}from"./index-a032e14e.js";import{j as r,F as C,a as d,ay as o,M as t,U as b,_ as x,$ as B,a1 as q,P as u}from"./@mui-94e45ada.js";import{u as P}from"./formik-bccae489.js";import{r as R}from"./react-19ede8c0.js";import{s as $,a as E,b as T}from"./swal-6db6c20f.js";import{s as y,c as D,a as n}from"./yup-861a4b8a.js";import{e as z}from"./yup-locales-e98f4908.js";const I=m`
  query PROVEEDORES($limit: Int!, $reverse: Boolean, $page: Int!, $query: String) {
    proveedores(limit: $limit, reverse: $reverse, page: $page, query: $query) {
      pageInfo {
        hasNextPage
        hasPrevPage
        totalDocs
        limit
        page
        totalPages
      }
      docs {
        codigo
        nombre
        direccion
        ciudad
        contacto
        correo
        telefono
        state
        createdAt
        updatedAt
        usucre
        usumod
      }
    }
  }
`,j=async a=>{const e=new h("https://sandbox.isipass.net/api"),i=localStorage.getItem(g);return e.setHeader("authorization",`Bearer ${i}`),(await e.request(I,{...a})).proveedores},S=m`
  mutation PROVEEDOR_REGISTRO($input: ProveedorInput!) {
    proveedorRegistro(input: $input) {
      codigo
      nombre
      direccion
      ciudad
      contacto
      correo
      telefono
      state
      createdAt
      updatedAt
      usucre
      usumod
    }
  }
`,A=async a=>{const e=new h("https://sandbox.isipass.net/api"),i=localStorage.getItem(g);return e.setHeader("authorization",`Bearer ${i}`),(await e.request(S,{input:a})).proveedorRegistro},F={codigo:"",nombre:"",direccion:"",ciudad:"",contacto:"",correo:"",telefono:""};y(z);const V=D({codigo:n().required("Código es requerido"),nombre:n().required("Nombre Proveedor es requerido"),direccion:n().required("Dirección es requerido"),ciudad:n().required("Ciudad / Ubicación es requerido"),contacto:n().required("Nombre de contacto es requerido"),correo:n().email("Ingrese Correo válido").required("Correo es requerido"),telefono:n()}),k=a=>{const{formik:e}=a;return r(C,{children:r("form",{noValidate:!0,children:d(o,{container:!0,spacing:2,children:[r(o,{item:!0,xs:12,md:4,lg:4,children:r(t,{name:"codigo",label:"Código",size:"small",fullWidth:!0,value:e.values.codigo,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.codigo&&!!e.errors.codigo,helperText:e.touched.codigo&&e.errors.codigo})}),r(o,{item:!0,xs:12,md:8,lg:8,children:r(t,{name:"nombre",label:"Nombre Proveedor",size:"small",fullWidth:!0,value:e.values.nombre,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.nombre&&!!e.errors.nombre,helperText:e.touched.nombre&&e.errors.nombre})}),r(o,{item:!0,xs:12,md:12,lg:12,children:r(t,{name:"ciudad",label:"Ciudad / Ubicación",size:"small",fullWidth:!0,value:e.values.ciudad,onChange:e.handleChange,required:!0,onBlur:e.handleBlur,error:e.touched.ciudad&&!!e.errors.ciudad,helperText:e.touched.ciudad&&e.errors.ciudad})}),r(o,{item:!0,xs:12,md:12,lg:12,children:r(t,{name:"direccion",label:"Dirección",size:"small",fullWidth:!0,value:e.values.direccion,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.direccion&&!!e.errors.direccion,helperText:e.touched.direccion&&e.errors.direccion})}),r(o,{item:!0,xs:12,md:12,lg:12,children:r(t,{name:"contacto",label:"Nombre del contacto",size:"small",fullWidth:!0,value:e.values.contacto,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.contacto&&!!e.errors.contacto,helperText:e.touched.contacto&&e.errors.contacto})}),r(o,{item:!0,xs:12,md:6,lg:6,children:r(t,{name:"correo",label:"Correo Electrónico",size:"small",fullWidth:!0,value:e.values.correo,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.correo&&!!e.errors.correo,helperText:e.touched.correo&&e.errors.correo})}),r(o,{item:!0,xs:12,md:6,lg:6,children:r(t,{name:"telefono",label:"Teléfono",size:"small",fullWidth:!0,value:e.values.telefono,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.telefono&&!!e.errors.telefono,helperText:e.touched.telefono&&e.errors.telefono})})]})})})},H=a=>{const{onClose:e,open:i,...s}=a,l=P({initialValues:F,validationSchema:V,onSubmit:async v=>{await $({preConfirm:()=>A(v).catch(c=>(E(c),!1)),text:"Confirma que desea registrar al proveedor"}).then(c=>{c.isConfirmed&&(T(),e(c.value))})}}),p=()=>{e()};return R.useEffect(()=>{l.resetForm(),l.setFieldValue("codigo",f().toUpperCase())},[i]),d(b,{sx:{"& .MuiDialog-paper":{width:"100%",maxHeight:500}},maxWidth:"sm",open:i,...s,children:[r(x,{children:"Registrar nuevo Proveedor"}),r(B,{dividers:!0,children:r(k,{formik:l})}),d(q,{children:[r(u,{autoFocus:!0,color:"error",size:"small",variant:"contained",onClick:p,children:"Cancelar"}),r(u,{onClick:l.submitForm,size:"small",style:{marginRight:25},variant:"contained",disabled:!l.isValid,children:"Registrar Proveedor"})]})]})};export{H as P,j as a,F as b,k as c,V as p};
