import{au as a,aB as g,av as P,aC as E,j as t,az as V,a as i,ay as s,M as m,a8 as T,P as L,aD as q,aE as z,Y as F,aF as N}from"./@mui-94e45ada.js";import{u as R}from"./formik-bccae489.js";import{r as o}from"./react-19ede8c0.js";import{N as G}from"./react-router-dom-c0e9fbdc.js";import{c as H,a as p}from"./yup-861a4b8a.js";import{u as J,i as M}from"./index-a032e14e.js";import{P as u}from"./Typography-c4fd38d1.js";import{c as W}from"./react-router-11fb21ef.js";import"./react-is-e5978b8b.js";import"./@emotion-01c0502c.js";import"./hoist-non-react-statics-6e7e3bdb.js";import"./@babel-41a3dc83.js";import"./stylis-79144faa.js";import"./react-transition-group-07c33d75.js";import"./react-dom-308b05ff.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./jss-4560bbb1.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-275843d2.js";import"./jss-plugin-global-96037998.js";import"./jss-plugin-nested-279c4525.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-80d6b696.js";import"./jss-plugin-vendor-prefixer-711b305d.js";import"./css-vendor-f41dfb6e.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-6dbc5b30.js";import"./tiny-warning-c932d744.js";import"./@remix-run-d753ad9e.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-85f95ecf.js";import"./rc-input-number-5ce3f958.js";import"./classnames-e62508ea.js";import"./rc-util-f84322a6.js";import"./@rc-component-9042d6d8.js";/* empty css                     */import"./react-toastify-ac6b7c37.js";import"./clsx-1229b3e0.js";import"./react-datepicker-b19bab85.js";import"./date-fns-66b136a8.js";import"./react-onclickoutside-a7243ba6.js";import"./react-popper-4d77a87f.js";import"./warning-4834017b.js";import"./react-redux-0edfc849.js";import"./use-sync-external-store-b3a8aa83.js";import"./lodash-c8b5ff2a.js";import"./jwt-decode-9c18df67.js";import"./graphql-request-396d023b.js";import"./form-data-c8368213.js";import"./extract-files-b993d67a.js";import"./graphql-9eaaa955.js";import"./cross-fetch-ff4a750f.js";import"./nanoid-bef4f1f3.js";import"./@reduxjs-e99b2c47.js";import"./immer-41fd5235.js";import"./redux-5bd193e3.js";import"./redux-thunk-ef899f4c.js";import"./@tanstack-464f39f1.js";const $="/assets/images/isibackgroud.jpg",l=a(g)(()=>({display:"flex",alignItems:"center"})),x=a(l)(()=>({justifyContent:"center",padding:"15px 15px 5px 15px"})),D=a(g)(()=>({height:"100%",padding:"20px",position:"relative",background:"rgba(0, 0, 0, 0.01)"})),O=a("img")(()=>({width:"100%",maxHeight:"90px"})),U=a(x)(()=>({backgroundImage:`url("${$}")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh","& .card":{maxWidth:400,borderRadius:12,margin:"1rem"}}));a(P)(()=>({position:"absolute",top:"6px",left:"25px"}));const Y=H({shop:p().required("Url de la tienda es requerido"),email:p().email("Debe registrar un email válido").required("Email es requerido"),password:p().min(6,"Password debe contener al menos 6 caracteres").required("Password es requerido")}),ot=()=>{const[n,f]=o.useState(!1),b=E(),v=W(),[w,d]=o.useState(!1),{login:C}=J(),[y,k]=o.useState(!1),[c,S]=o.useState(""),e=R({initialValues:{shop:"",email:"",password:"",remember:!0},validationSchema:Y,onSubmit:async r=>{d(!0);const{shop:h,email:j,password:I,remember:A}=r;try{A?localStorage.setItem("shop",h):localStorage.removeItem("shop"),await C(h,j,I),v("/")}catch(B){S(B.message),d(!1)}}});return o.useEffect(()=>{M(localStorage.getItem("shop"))||e.setFieldValue("shop",localStorage.getItem("shop"))},[]),o.useEffect(()=>{window.javascriptCallback=()=>{k(!0)};const r=document.createElement("script");return r.src="https://challenges.cloudflare.com/turnstile/v0/api.js",r.async=!0,r.defer=!0,r.addEventListener("load",()=>{console.log("Script del CAPTCHA cargado correctamente.")}),document.body.appendChild(r),()=>{document.body.removeChild(r),window.javascriptCallback=()=>{}}},[]),t(U,{children:t(V,{className:"card",children:i(s,{container:!0,children:[t(s,{item:!0,sm:12,xs:12,children:t(x,{p:4,height:"100%",children:t(O,{src:"/assets/images/logo-isiinvoice.png",alt:"Gestión de ventas y servicios",style:{paddingTop:"20px"}})})}),t(s,{item:!0,sm:12,xs:12,children:t(D,{children:i("form",{onSubmit:e.handleSubmit,children:[t(s,{container:!0,spacing:5,children:i(s,{item:!0,lg:12,md:12,sm:12,xs:12,sx:{mt:2},children:[t(m,{label:"URL Comercio",size:"small",sx:{mb:3,width:"100%"},type:"text",name:"shop",value:e.values.shop,onChange:e.handleChange,error:e.touched.shop&&!!e.errors.shop,helperText:e.touched.shop&&e.errors.shop}),t(m,{label:"Correo Electrónico",size:"small",sx:{mb:3,width:"100%"},id:"email",name:"email",type:"text",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&!!e.errors.email,helperText:e.touched.email&&e.errors.email}),t(m,{label:"Contraseña",size:"small",sx:{mb:2,width:"100%"},id:"password",name:"password",type:n?"text":"password",value:e.values.password,onChange:e.handleChange,error:e.touched.password&&!!e.errors.password,helperText:e.touched.password&&e.errors.password,InputProps:{endAdornment:t(T,{position:"end",sx:{justifyContent:"flex-end"},children:t(L,{onClick:()=>f(!n),sx:{p:0,minWidth:"auto"},children:n?t(q,{}):t(z,{})})})}}),t("div",{className:"cf-turnstile","data-sitekey":"0x4AAAAAAAIkjLV9wbVBEmv2","data-callback":"javascriptCallback","data-theme":"light","data-lenguage":"es",style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"20px"}}),i(l,{justifyContent:"space-between",children:[i(l,{gap:1,children:[t(F,{size:"small",name:"remember",onChange:e.handleChange,checked:e.values.remember,sx:{padding:0}}),t(u,{children:"Recordarme"})]}),t(G,{to:"/session/forgot-password",style:{color:b.palette.primary.main},children:"¿Olvidaste tu contraseña?"})]}),t(N,{type:"submit",color:"primary",loading:w,variant:"contained",sx:{my:2},disabled:!y,children:"Iniciar Sesión"})]})}),c&&t(u,{sx:{color:"red"},children:c})]})})})]})})})};export{ot as default};
