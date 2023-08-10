import{g as E,G as x}from"./graphql-request-396d023b.js";import{A as b,M as w,g as T,l as $,c as j,i as G}from"./index-a032e14e.js";import{j as e,a as D,ay as u,ac as O,ad as H,F as A,U as L,_ as F,$ as N,a1 as _,P as I,aL as Q,ao as W}from"./@mui-94e45ada.js";import{o as k}from"./@hookform-4c1cadd7.js";import{r as z}from"./react-19ede8c0.js";import{C as h,u as V}from"./react-hook-form-f9fec52a.js";import{n as P,s as M,a as v,b as U}from"./swal-6db6c20f.js";import{F as C}from"./FormTextField-3f227e6b.js";import{a as y}from"./localization-3d90e8d6.js";import{S as J}from"./react-select-753177b7.js";import{A as K,a as X}from"./AlertLoading-3592644c.js";import{M as Y,a as Z}from"./ReactSelect-5115d3bc.js";import{e as ee}from"./@tanstack-464f39f1.js";import{s as oe,c as q,e as ne,a as f}from"./yup-861a4b8a.js";import{e as re}from"./yup-locales-e98f4908.js";const ae=E`
  query CLIENTES_LISTADO($limit: Int!, $reverse: Boolean, $page: Int!, $query: String) {
    clientesAll(limit: $limit, reverse: $reverse, page: $page, query: $query) {
      pageInfo {
        hasNextPage
        hasPrevPage
        totalDocs
        limit
        page
        totalPages
      }
      docs {
        _id
        apellidos
        codigoCliente
        complemento
        email
        nombres
        numeroDocumento
        razonSocial
        codigoExcepcion
        tipoDocumentoIdentidad {
          codigoClasificador
          descripcion
        }
        state
        usucre
        createdAt
        usumod
        UpdatedAt
      }
    }
  }
`,Ne=async o=>{const n=new x("https://sandbox.isipass.net/api"),l=localStorage.getItem(b);return n.setHeader("authorization",`Bearer ${l}`),(await n.request(ae,{...o})).clientesAll},te=E`
  mutation CLIENTE_99001_REGISTRO($input: Cliente99001Input!) {
    cliente99001Create(input: $input) {
      _id
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
  }
`,ie=async o=>{try{const n=new x("https://sandbox.isipass.net/api"),l=localStorage.getItem(b);return n.setHeader("authorization",`Bearer ${l}`),(await n.request(te,{input:o})).cliente99001Create}catch(n){throw new w(n)}},se=o=>{const{form:n}=o,{control:l,getValues:i,formState:{errors:m}}=n;return e("form",{children:D(u,{container:!0,spacing:3,children:[e(u,{item:!0,xs:12,children:D(O,{severity:"info",children:[e(H,{children:"¿Que es un cliente 99001?"}),"Son Consulados, embajadas, organismos internacionales, patrimonios autónomos, personal diplomático y personas extranjeras sin residencia, excepto en el caso de exportación de servicios turísticos."]})}),e(u,{item:!0,lg:6,md:6,xs:12,children:e(h,{control:l,name:"codigoCliente",render:({field:t})=>{var r;return e(C,{name:"codigoCliente",label:"Codigo Cliente",value:t.value,onChange:t.onChange,onBlur:t.onBlur,error:!!m.codigoCliente,helperText:((r=m.codigoCliente)==null?void 0:r.message)||"Código aleatorio modificable",required:!0,disabled:i("action")===y.UPDATE})}})}),e(u,{item:!0,lg:12,md:12,xs:12,children:e(h,{control:l,name:"razonSocial",render:({field:t})=>{var r;return e(C,{name:"razonSocial",label:"Razón Social",value:t.value,onChange:t.onChange,onBlur:t.onBlur,error:!!m.razonSocial,helperText:(r=m.razonSocial)==null?void 0:r.message,required:!0})}})}),e(u,{item:!0,lg:12,md:12,xs:12,children:e(h,{control:l,name:"email",render:({field:t})=>{var r;return e(C,{name:"email",label:"Correo Electrónico",value:t.value,onChange:t.onChange,onBlur:t.onBlur,error:!!m.email,helperText:(r=m.email)==null?void 0:r.message,required:!0})}})})]})})},R={codigoCliente:"",razonSocial:"",email:"",action:y.REGISTER},le={sinTipoDocumento:null,razonSocial:"",numeroDocumento:"",complemento:"",email:"",nombres:"",apellidos:"",telefono:"",action:y.REGISTER},ce=o=>({apellidos:T(o.apellidos,""),codigoCliente:o.codigoCliente,email:o.email,nombres:T(o.nombres,""),razonSocial:o.razonSocial}),me=async o=>{try{return $("begin"),[]}catch(n){return[n.message]}};oe(re);const ue=q({sinTipoDocumento:q({codigoClasificador:ne().integer().required()}).required().nullable(),razonSocial:f().required("Razon social es un campo requerido"),numeroDocumento:f().required("Número de documento es un campo obligatorio"),complemento:f(),email:f().email("Ingrese email válido").required("Email es requerido"),apellidos:f()}),de=q({razonSocial:f().required("Razon social es un campo requerido"),codigoCliente:f().required("Código Cliente es un campo obligatorio"),email:f().email("Ingrese email válido").required("Email es requerido")}),_e=o=>{const{onClose:n,keepMounted:l,open:i,...m}=o,t=V({defaultValues:{...R},resolver:k(de)}),r=async p=>{const d=await me();if(d.length>0)P(d.join("<br>"));else{const S=ce(p);await M({preConfirm:async()=>{const s=await ie(S).catch(a=>({error:a}));return s.error?(v(s.error),!1):s}}).then(s=>{s.isConfirmed&&(U(),n(s.value)),s.isDenied&&v(s.value)})}},g=(p,d)=>console.log(p,d);return z.useEffect(()=>{i&&t.reset({...R,codigoCliente:j(10).toUpperCase()})},[i]),e(A,{children:D(L,{sx:{"& .MuiDialog-paper":{width:"90%",maxHeight:600}},maxWidth:"sm",keepMounted:l,open:i,...m,children:[e(F,{children:"Registro Nuevo Cliente 99001"}),e(N,{dividers:!0,children:e(se,{form:t})}),D(_,{children:[e(I,{autoFocus:!0,color:"error",variant:"contained",size:"small",onClick:()=>{n()},children:"Cancelar"}),e(I,{onClick:t.handleSubmit(r,g),style:{marginRight:15},size:"small",variant:"contained",children:"Registrar"})]})]})})},ge=E`
  mutation CLIENTE_REGISTRO($input: ClienteInput!) {
    clienteCreate(input: $input) {
      _id
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
  }
`,pe=async o=>{try{const n=new x("https://sandbox.isipass.net/api"),l=localStorage.getItem(b);return n.setHeader("authorization",`Bearer ${l}`),(await n.request(ge,{input:o})).clienteCreate}catch(n){throw new w(n)}},he=E`
  query TIPO_DOCUMENTO_IDENTIDAD {
    sinTipoDocumentoIdentidad {
      codigoClasificador
      descripcion
    }
  }
`,Ce=async()=>{const o=new x("https://sandbox.isipass.net/api"),n=localStorage.getItem(b);return o.setHeader("authorization",`Bearer ${n}`),(await o.request(he)).sinTipoDocumentoIdentidad},fe=(o=[],n={})=>{const{data:l,isLoading:i,isError:m,error:t,isSuccess:r}=ee(["tipoDocumentoIdentidad",...o],async()=>{const g=await Ce();return g.length>0?g:[]},{...n});return{tiposDocumentoIdentidad:l,tdiLoading:i,tdiIsError:m,tdiError:t,tdIsSuccess:r}},De=o=>{const{form:n}=o,{watch:l,control:i,setValue:m,getValues:t,formState:{errors:r}}=n,{tiposDocumentoIdentidad:g,tdiLoading:p,tdiIsError:d,tdiError:S,tdIsSuccess:s}=fe();return d?e(K,{mensaje:S==null?void 0:S.message}):(z.useEffect(()=>{s&&G(t("sinTipoDocumento.codigoClasificador"))&&m("sinTipoDocumento",g[0])},[s]),e("form",{children:D(u,{container:!0,spacing:3,children:[e(u,{item:!0,lg:12,md:12,sm:12,xs:12,sx:{mt:2},children:p?e(X,{}):e(h,{render:({field:a})=>{var c;return D(Q,{fullWidth:!0,error:!!r.sinTipoDocumento,required:!0,children:[e(Y,{shrink:!0,children:"Tipo Documento Identidad"}),e(J,{menuPosition:"fixed",styles:Z(!!r.sinTipoDocumento),name:"sinTipoDocumento",placeholder:"Seleccione el tipo documento identidad",value:a.value,onChange:a.onChange,onBlur:a.onBlur,isSearchable:!1,options:g,getOptionValue:B=>B.codigoClasificador.toString(),getOptionLabel:B=>`${B.descripcion}`,required:!0,isDisabled:t("action")===y.UPDATE}),e(W,{children:(c=r.sinTipoDocumento)==null?void 0:c.message})]})},name:"sinTipoDocumento",control:i})}),e(u,{item:!0,lg:12,md:12,xs:12,children:e(h,{control:i,name:"razonSocial",render:({field:a})=>{var c;return e(C,{name:"razonSocial",label:"Razón Social",value:a.value,onChange:a.onChange,onBlur:a.onBlur,error:!!r.razonSocial,helperText:(c=r.razonSocial)==null?void 0:c.message,required:!0})}})}),e(u,{item:!0,lg:7,md:7,xs:12,children:e(h,{control:i,name:"numeroDocumento",render:({field:a})=>{var c;return e(C,{name:"numeroDocumento",label:"Número Documento",value:a.value,onChange:a.onChange,onBlur:a.onBlur,error:!!r.numeroDocumento,helperText:(c=r.numeroDocumento)==null?void 0:c.message,required:!0})}})}),e(u,{item:!0,lg:5,md:5,xs:12,children:e(h,{control:i,name:"complemento",render:({field:a})=>{var c;return e(C,{name:"complemento",label:"Complemento",value:a.value,onChange:a.onChange,onBlur:a.onBlur,error:!!r.complemento,helperText:(c=r.complemento)==null?void 0:c.message})}})}),e(u,{item:!0,lg:7,md:7,xs:12,children:e(h,{control:i,name:"email",render:({field:a})=>{var c;return e(C,{name:"email",label:"Correo Electrónico",value:a.value,onChange:a.onChange,onBlur:a.onBlur,error:!!r.email,helperText:(c=r.email)==null?void 0:c.message,required:!0})}})}),e(u,{item:!0,lg:5,md:5,xs:12,children:e(h,{control:i,name:"telefono",render:({field:a})=>{var c;return e(C,{name:"telefono",label:"Teléfonos",value:a.value,onChange:a.onChange,onBlur:a.onBlur,error:!!r.telefono,helperText:(c=r.telefono)==null?void 0:c.message})}})})]})}))},Se=o=>{var n;return{nombres:o.nombres,apellidos:T(o.apellidos,""),codigoTipoDocumentoIdentidad:(n=o.sinTipoDocumento)==null?void 0:n.codigoClasificador,numeroDocumento:o.numeroDocumento,complemento:T(o.complemento,null),email:o.email,razonSocial:o.razonSocial,telefono:T(o.telefono,null)}},Te=async o=>{try{return $("BEGIN"),[]}catch(n){return[n.message]}},ke=o=>{const{onClose:n,keepMounted:l,open:i,...m}=o,t=V({defaultValues:{...le},resolver:k(ue)}),r=async p=>{const d=await Te();if(d.length>0)P(d.join("<br>"));else{const S=Se(p);await M({preConfirm:async()=>{const s=await pe(S).catch(a=>({error:a}));return s.error?(v(s.error),!1):s}}).then(s=>{s.isConfirmed&&(U(),n(s.value)),s.isDenied&&v(s.value)})}},g=(p,d)=>console.log(p,d);return z.useEffect(()=>{t.reset()},[i]),e(A,{children:D(L,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"sm",keepMounted:l,open:i,...m,children:[e(F,{children:"Registro Nuevo Cliente"}),e(N,{dividers:!0,children:e(De,{form:t})}),D(_,{children:[e(I,{autoFocus:!0,color:"error",variant:"contained",size:"small",onClick:()=>{n()},children:"Cancelar"}),e(I,{onClick:t.handleSubmit(r,g),style:{marginRight:15},size:"small",variant:"contained",disabled:!t.formState.isValid,children:"Registrar"})]})]})})};export{R as C,se as a,me as b,de as c,le as d,ue as e,De as f,Te as g,ke as h,_e as i,Ne as j};
