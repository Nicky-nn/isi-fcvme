import{Q as o}from"./react-toastify-ac6b7c37.js";import{S as t}from"./sweetalert2-b5adf0ab.js";const a={position:"top-center",theme:"colored"},c=e=>{o.error(e,{...a})},d=(e="Acción realizada correctamente")=>{o.success(e,{...a})},m=e=>{o.warning(e,{...a})},n=e=>`
<p style="text-align: center">${e.message}</p>
<div class="accordionTabs">
    <div class="tab">
      <input type="checkbox" id="a01">
      <label class="tab-label" for="a01">Detalle del error</label>
      <div class="tab-content">
        <ul style="margin: 0; padding: 5px 15px; line-height: 25px ">
          <li><strong style="color:#ef5350">Nombre: </strong> ${e.name}</li>
          <li><strong  style="color:#ef5350">Mensaje Original: </strong> ${e.cause}</li>
          <li><strong  style="color:#ef5350">Detalle Error: </strong> ${e.stack}</li>
        </ul>
      </div>
    </div>
  </div>
  `,u={title:"Confirmación",showCancelButton:!0,allowOutsideClick:!1,confirmButtonText:"Confirmar",showLoaderOnConfirm:!0},f=e=>{t.fire({title:"Alerta!!",width:700,customClass:"swalError",allowEscapeKey:!1,allowOutsideClick:!0,html:n(e)}).then()},g=async({title:e="Confirmación",text:s="Confirma que desea realizar la acción",preConfirm:r})=>t.fire({title:e,showCancelButton:!0,confirmButtonText:"Confirmar",cancelButtonText:"Cancelar",backdrop:!0,html:s,showLoaderOnConfirm:!0,preConfirm:r}),p=()=>{t.fire({timer:15e3,timerProgressBar:!0,allowOutsideClick:!1,didOpen:()=>{t.showLoading()}}).then()},w=()=>{t.close()};export{f as a,d as b,m as c,p as d,w as e,u as f,c as n,g as s};
