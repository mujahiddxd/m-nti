import{t as e}from"./react-DI1tKokD.js";var t=e(),n=({width:e,height:n,borderRadius:r,className:i=``,style:a={}})=>(0,t.jsx)(`div`,{className:`skeleton-loading ${i}`,style:{width:e,height:n,borderRadius:r,...a},children:(0,t.jsx)(`style`,{children:`
        .skeleton-loading {
          background: #f3f4f6;
          background: linear-gradient(
            90deg,
            #f3f4f6 25%,
            #e5e7eb 50%,
            #f3f4f6 75%
          );
          background-size: 200% 100%;
          animation: skeleton-pulse 1.5s ease-in-out infinite;
        }

        @keyframes skeleton-pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `})});export{n as t};