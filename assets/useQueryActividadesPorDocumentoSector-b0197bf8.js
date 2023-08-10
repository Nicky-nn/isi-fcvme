import{g as i,G as n}from"./graphql-request-396d023b.js";import{A as s,M as d}from"./index-a032e14e.js";import{e as u}from"./@tanstack-464f39f1.js";const m=i`
  query ACTIVIDADES_POR_DOCUMENTO_SECTOR($codDocSector: Int!) {
    sinActividadesPorDocumentoSector(codigoDocumentoSector: $codDocSector) {
      codigoActividad
      codigoDocumentoSector
      tipoDocumentoSector
      actividadEconomica
      tipoActividad
    }
  }
`,S=async()=>{try{const o=new n("https://sandbox.isipass.net/api"),t=localStorage.getItem(s);o.setHeader("authorization",`Bearer ${t}`);const r=parseInt("9".toString());return(await o.request(m,{codDocSector:r})).sinActividadesPorDocumentoSector}catch(o){throw new d(o)}},A=(o=[])=>{const{data:t,isLoading:r,isError:c,error:a}=u(["sinActividadesPorDocumentoSector",...o],async()=>{const e=await S();return e.length>0?e:[]});return{actividades:t,actLoading:r,actIsError:c,actError:a}};export{A as u};
