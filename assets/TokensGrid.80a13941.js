var a=Object.defineProperty;var s=(r,n)=>a(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime.cb3fc327.js";const c=s(r=>Number(r.replace("rem",""))*16,"remToPixels");const d=s(({tokens:r,hasRemValue:n=!1})=>t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([o,i])=>t("tr",{children:[e("td",{children:o}),e("td",{children:i}),n&&e("td",{children:c(i)})]},o))})]}),"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.80a13941.js.map