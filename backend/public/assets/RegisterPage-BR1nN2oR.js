import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{B as t,L as n,W as r,dt as i,it as a,lt as o,o as s,ot as c,p as l,pt as u,z as d}from"./icons-Cff_7MF5.js";import{t as f}from"./react-DI1tKokD.js";import{c as p,n as m}from"./router-_JDcIN7Y.js";import{h,m as g,t as _}from"./index-B9KBpaqb.js";var v=e(u(),1),y=f();function b(){let e=p(),[u,f]=(0,v.useState)({schoolName:``,email:``,username:``,password:``}),[b,x]=(0,v.useState)({}),[S,C]=(0,v.useState)({}),[w,T]=(0,v.useState)(!1),[E,D]=(0,v.useState)(!1),[O,k]=(0,v.useState)({loading:!0,isOpen:!0,startDate:null,endDate:null});(0,v.useEffect)(()=>{fetch(`${_}/api/auth/registration-status`).then(e=>e.json()).then(e=>k({loading:!1,isOpen:e.isOpen,startDate:e.startDate,endDate:e.endDate})).catch(()=>k(e=>({...e,loading:!1})))},[]);let A=e=>{let t={};return e.schoolName.trim()||(t.schoolName=`Required`),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email=`Invalid email`):t.email=`Required`,e.username.trim()||(t.username=`Required`),e.password?(e.password.length<8||!/[0-9]/.test(e.password)||!/[^A-Za-z0-9]/.test(e.password))&&(t.password=`Password must be at least 8 chars, 1 number, 1 special char`):t.password=`Required`,t},j=e=>{let{name:t,value:n}=e.target;f(e=>({...e,[t]:n})),S[t]&&x(A({...u,[t]:n}))},M=e=>{let{name:t}=e.target;C(e=>({...e,[t]:!0})),x(A(u))},N=async t=>{t.preventDefault();let n=A(u);if(x(n),C({schoolName:!0,email:!0,username:!0,password:!0}),Object.keys(n).length===0){D(!0);try{let t=await fetch(`${_}/api/auth/register`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(u)}),n=await t.json();t.ok?(g.success(`Registration successful! Please check your email for verification. You can log in now.`),e(`/login`,{state:{message:`Registered successfully! Please log in.`}})):g.error(`Error: ${n.error||n.message||`Registration failed`}`)}catch(e){console.error(`Error during registration:`,e),g.error(`Network error. Please try again later.`)}finally{D(!1)}}},P=[{label:`8+ characters`,met:u.password.length>=8},{label:`At least 1 number`,met:/[0-9]/.test(u.password)},{label:`At least 1 special char`,met:/[^A-Za-z0-9]/.test(u.password)}];return(0,y.jsxs)(`div`,{className:`login-page`,children:[(0,y.jsx)(h,{children:(0,y.jsx)(`title`,{children:`Register | NTI Olympiad`})}),(0,y.jsx)(`div`,{className:`login-blue-bg`}),(0,y.jsxs)(`div`,{className:`login-content`,children:[(0,y.jsx)(`div`,{className:`login-left`,children:(0,y.jsxs)(`div`,{className:`login-visual-panel`,children:[(0,y.jsx)(`div`,{className:`blob blob-1`}),(0,y.jsx)(`div`,{className:`blob blob-2`}),(0,y.jsx)(`div`,{className:`blob blob-3`}),(0,y.jsxs)(`div`,{className:`visual-container`,children:[(0,y.jsx)(`div`,{className:`orbit-item item-1`,children:(0,y.jsx)(n,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-2`,children:(0,y.jsx)(r,{size:24,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-3`,children:(0,y.jsx)(o,{size:28,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-4`,children:(0,y.jsx)(c,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`center-glass`,children:(0,y.jsx)(s,{size:60,color:`#FBBF24`,className:`trophy-icon`,strokeWidth:2})})]}),(0,y.jsxs)(`div`,{className:`visual-text`,children:[(0,y.jsx)(`h2`,{children:`NTI OLYMPIAD`}),(0,y.jsx)(`p`,{children:`Challenge your reasoning, benchmark your performance, and achieve national excellence.`})]})]})}),(0,y.jsx)(`div`,{className:`login-right`,children:(0,y.jsxs)(`div`,{className:`login-card`,children:[(0,y.jsxs)(`div`,{className:`login-header`,children:[(0,y.jsxs)(`div`,{className:`login-brand-left`,children:[(0,y.jsx)(`span`,{children:`NATIONAL TALENT`}),(0,y.jsx)(`span`,{children:`IDENTIFICATION`})]}),(0,y.jsxs)(`div`,{className:`login-brand-right`,children:[(0,y.jsxs)(`div`,{className:`login-circles`,children:[(0,y.jsx)(`div`,{className:`circle circle-red`,children:(0,y.jsx)(n,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-green`,children:(0,y.jsx)(r,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-blue`,children:(0,y.jsx)(l,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-yellow`,children:(0,y.jsx)(c,{size:18,color:`#fff`})})]}),(0,y.jsxs)(`div`,{className:`login-logo-text`,children:[(0,y.jsx)(`strong`,{children:`NTI`}),` OLYMPIAD`]})]})]}),(0,y.jsxs)(`div`,{className:`login-center-title`,children:[(0,y.jsx)(`h2`,{children:`REGISTER`}),(0,y.jsx)(`p`,{children:`Create a school account to join the NTI network.`})]}),!O.loading&&!O.isOpen&&(0,y.jsxs)(`div`,{style:{backgroundColor:`#FEF2F2`,border:`1px solid #FECACA`,color:`#991B1B`,padding:`14px 16px`,borderRadius:`6px`,marginBottom:`20px`,fontSize:`14px`,textAlign:`center`,fontWeight:`500`,lineHeight:`1.5`},children:[`Registration is currently closed.`,O.startDate&&O.endDate&&(0,y.jsxs)(y.Fragment,{children:[` It is open from `,(0,y.jsx)(`strong`,{children:new Date(O.startDate).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`})}),` to `,(0,y.jsx)(`strong`,{children:new Date(O.endDate).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`})}),`.`]})]}),!O.loading&&O.isOpen&&O.endDate&&(0,y.jsxs)(`div`,{style:{backgroundColor:`#ECFDF5`,border:`1px solid #A7F3D0`,color:`#065F46`,padding:`10px 16px`,borderRadius:`6px`,marginBottom:`20px`,fontSize:`13px`,textAlign:`center`,fontWeight:`500`},children:[`Registration is open until `,(0,y.jsx)(`strong`,{children:new Date(O.endDate).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`})}),`.`]}),(0,y.jsxs)(`form`,{onSubmit:N,className:`login-form`,children:[(0,y.jsxs)(`div`,{className:`login-field`,children:[(0,y.jsxs)(`label`,{children:[`SCHOOL NAME `,(0,y.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,y.jsx)(`input`,{type:`text`,name:`schoolName`,placeholder:`Enter School Name`,value:u.schoolName,onChange:j,onBlur:M,style:S.schoolName&&b.schoolName?{borderColor:`#EF4444`}:{}}),S.schoolName&&b.schoolName&&(0,y.jsx)(`span`,{className:`error-text`,children:b.schoolName})]}),(0,y.jsxs)(`div`,{className:`login-field`,children:[(0,y.jsxs)(`label`,{children:[`OFFICIAL EMAIL `,(0,y.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,y.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Enter Official Email`,value:u.email,onChange:j,onBlur:M,style:S.email&&b.email?{borderColor:`#EF4444`}:{}}),S.email&&b.email&&(0,y.jsx)(`span`,{className:`error-text`,children:b.email})]}),(0,y.jsxs)(`div`,{className:`login-field`,children:[(0,y.jsxs)(`label`,{children:[`USERNAME `,(0,y.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,y.jsx)(`input`,{type:`text`,name:`username`,placeholder:`Choose a Username`,value:u.username,onChange:j,onBlur:M,style:S.username&&b.username?{borderColor:`#EF4444`}:{}}),S.username&&b.username&&(0,y.jsx)(`span`,{className:`error-text`,children:b.username})]}),(0,y.jsxs)(`div`,{className:`login-field`,children:[(0,y.jsxs)(`label`,{children:[`PASSWORD `,(0,y.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,y.jsxs)(`div`,{className:`password-wrap`,children:[(0,y.jsx)(`input`,{type:w?`text`:`password`,name:`password`,placeholder:`Enter your Password`,value:u.password,onChange:j,onBlur:M,style:S.password&&b.password?{borderColor:`#EF4444`}:{}}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>T(!w),className:`eye-btn`,children:w?(0,y.jsx)(t,{size:18,color:`#9CA3AF`}):(0,y.jsx)(d,{size:18,color:`#9CA3AF`})})]}),S.password&&b.password&&(0,y.jsx)(`span`,{className:`error-text`,children:b.password})]}),(0,y.jsxs)(`div`,{className:`password-criteria`,children:[(0,y.jsx)(`p`,{className:`criteria-title`,children:`Password requirements:`}),(0,y.jsx)(`ul`,{className:`criteria-list`,children:P.map((e,t)=>(0,y.jsxs)(`li`,{className:e.met?`met`:``,children:[e.met?(0,y.jsx)(a,{size:14,className:`check-icon`}):(0,y.jsx)(`span`,{className:`dot`}),e.label]},t))})]}),(0,y.jsx)(`div`,{className:`submit-wrap`,style:{marginTop:`16px`},children:(0,y.jsxs)(`button`,{type:`submit`,disabled:E||!O.loading&&!O.isOpen,className:`submit-btn`,style:{width:`100%`,justifyContent:`center`},children:[E?`REGISTERING...`:`CREATE ACCOUNT`,!E&&(0,y.jsx)(i,{size:18})]})})]}),(0,y.jsx)(`div`,{className:`login-footer`,children:(0,y.jsxs)(`p`,{className:`mt-3 text-[#4B5563]`,children:[`Already have an account? `,(0,y.jsx)(m,{to:`/login`,className:`font-semibold text-[#1976D2] hover:underline`,children:`Click here to log in`})]})})]})})]}),(0,y.jsx)(`style`,{children:`
        .login-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 64px);
          font-family: 'Inter', sans-serif;
        }

        .login-blue-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f4c9c;
          z-index: 0;
        }

        .login-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          min-height: calc(100vh - 64px);
        }

        /* ── LEFT ── */
        .login-left {
          flex: 0 0 45%;
          padding: 64px 32px 80px 48px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }

        .login-visual-panel {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-bottom: 20px;
          z-index: 2;
        }

        /* Blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          animation: floatBlob 8s infinite alternate ease-in-out;
          z-index: -1;
        }
        .blob-1 { top: 15%; left: 15%; width: 160px; height: 160px; background: #60A5FA; }
        .blob-2 { top: 25%; right: 15%; width: 140px; height: 140px; background: #34D399; animation-delay: -2s; }
        .blob-3 { bottom: 25%; left: 25%; width: 180px; height: 180px; background: #818CF8; animation-delay: -4s; }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20px, -20px) scale(1.1); }
        }

        /* Visual Container */
        .visual-container {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }

        /* Center Glass */
        .center-glass {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05);
          z-index: 10;
        }
        .trophy-icon {
          filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.6));
        }

        /* Orbit Items */
        .orbit-item {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          animation: floatIcon 6s infinite alternate ease-in-out;
        }

        .item-1 {
          top: 5%; left: 0%; width: 56px; height: 56px;
          background: linear-gradient(135deg, #F87171, #DC2626);
          --rot: -10;
        }
        .item-2 {
          top: 10%; right: 5%; width: 50px; height: 50px;
          background: linear-gradient(135deg, #34D399, #059669);
          --rot: 15;
          animation-delay: -1.5s;
        }
        .item-3 {
          bottom: 10%; left: 5%; width: 64px; height: 64px;
          background: linear-gradient(135deg, #60A5FA, #2563EB);
          --rot: -5;
          animation-delay: -3s;
        }
        .item-4 {
          bottom: 15%; right: 0%; width: 54px; height: 54px;
          background: linear-gradient(135deg, #FBBF24, #D97706);
          --rot: 10;
          animation-delay: -4.5s;
        }

        @keyframes floatIcon {
          0% { transform: translateY(0px) rotate(calc(var(--rot) * 1deg)); }
          100% { transform: translateY(-15px) rotate(calc(var(--rot) * 1deg + 5deg)); }
        }

        .visual-text {
          text-align: center;
          color: #fff;
          z-index: 10;
        }
        .visual-text h2 {
          font-family: 'Lora', serif;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .visual-text p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
          max-width: 340px;
          margin: 0 auto;
        }

        /* ── RIGHT ── */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 64px 48px;
        }

        .login-card {
          width: 100%;
          max-width: 560px;
          background: #ffffff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .login-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .login-brand-left {
          display: flex;
          flex-direction: column;
          font-family: 'Montserrat', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          color: #1F2937;
          line-height: 1.3;
        }

        .login-brand-right {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-circles {
          display: flex;
          gap: 6px;
          margin-bottom: 6px;
        }

        .circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle-red { background-color: #E53935; }
        .circle-green { background-color: #4CAF50; }
        .circle-blue { background-color: #2196F3; }
        .circle-yellow { background-color: #FF9800; }

        .login-logo-text {
          font-family: 'Montserrat', 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #1F2937;
          letter-spacing: 0.5px;
        }

        .login-center-title {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-center-title h2 {
          font-size: 32px;
          font-weight: 400;
          color: #374151;
          margin: 0 0 12px 0;
          letter-spacing: 1px;
        }

        .login-center-title p {
          font-size: 14px;
          color: #9CA3AF;
          margin: 0;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .login-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .login-field label {
          font-size: 11.5px;
          font-weight: 700;
          color: #4B5563;
          letter-spacing: 0.5px;
        }

        .asterisk {
          color: #EF4444;
          margin-left: 2px;
        }

        .login-field input[type="text"],
        .login-field input[type="email"],
        .login-field input[type="password"] {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          border: 1px solid #D1D5DB;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
        }

        .login-field input::placeholder {
          color: #9CA3AF;
        }

        .login-field input:focus {
          border-color: #1976D2;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }
          
        .error-text {
          font-size: 12px;
          color: #EF4444;
          font-weight: 500;
          margin-top: 2px;
        }

        .password-wrap {
          position: relative;
        }

        .password-wrap input {
          padding-right: 40px;
        }

        .eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
        }

        .password-criteria {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          padding: 16px;
          margin-top: -4px;
        }

        .criteria-title {
          font-size: 12px;
          font-weight: 600;
          color: #4B5563;
          margin: 0 0 10px 0;
        }

        .criteria-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .criteria-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #9CA3AF;
        }

        .criteria-list li.met {
          color: #059669;
          font-weight: 500;
        }

        .check-icon {
          color: #059669;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: #D1D5DB;
          border-radius: 50%;
          margin-left: 5px;
          margin-right: 5px;
        }

        .submit-wrap {
          display: flex;
          justify-content: flex-end;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: #1976D2;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }

        .submit-btn:disabled {
          background: #93C5FD;
          cursor: not-allowed;
        }

        .submit-btn:hover:not(:disabled) {
          background: #1565C0;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
        }

        .login-footer {
          margin-top: 32px;
          font-size: 13px;
          color: #6B7280;
          text-align: center;
        }

        @media (max-width: 768px) {
          .login-content {
            flex-direction: column;
          }
          .login-left, .login-right {
            flex: none;
            width: 100%;
            padding: 24px;
          }
          .login-left > div {
            margin: 0 auto;
          }
          .login-card {
            margin: 0 auto;
            padding: 32px 24px;
          }
          .login-header {
            flex-direction: column;
            gap: 24px;
            align-items: center;
            text-align: center;
          }
        }
      `})]})}export{b as default};