import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{B as t,L as n,W as r,dt as i,k as a,lt as o,o as s,ot as c,p as l,pt as u,z as d}from"./icons-Cff_7MF5.js";import{t as f}from"./react-DI1tKokD.js";import{c as p,n as m,u as h}from"./router-_JDcIN7Y.js";import{c as g,h as _,m as v,t as y}from"./index-B9KBpaqb.js";var b=e(u(),1),x=f();function S(){let[e,u]=(0,b.useState)(``),[f,S]=(0,b.useState)(``),[C,w]=(0,b.useState)(!1),[T,E]=(0,b.useState)(!1),[D,O]=(0,b.useState)(!1),[k,A]=(0,b.useState)(!1),[j,M]=(0,b.useState)(``),[N]=h(),P=N.get(`token`),F=p();return(0,x.jsxs)(`div`,{className:`login-page`,children:[(0,x.jsxs)(_,{children:[(0,x.jsx)(`title`,{children:`Reset Password – NTI Olympiad Portal`}),(0,x.jsx)(`meta`,{name:`description`,content:`Reset your NTI Olympiad student or school coordinator portal password.`}),(0,x.jsx)(`meta`,{name:`robots`,content:`noindex, follow`})]}),(0,x.jsx)(`div`,{className:`login-blue-bg`}),(0,x.jsxs)(`div`,{className:`login-content`,children:[(0,x.jsx)(`div`,{className:`login-left`,children:(0,x.jsxs)(`div`,{className:`login-visual-panel`,children:[(0,x.jsx)(`div`,{className:`blob blob-1`}),(0,x.jsx)(`div`,{className:`blob blob-2`}),(0,x.jsx)(`div`,{className:`blob blob-3`}),(0,x.jsxs)(`div`,{className:`visual-container`,children:[(0,x.jsx)(`div`,{className:`orbit-item item-1`,children:(0,x.jsx)(n,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,x.jsx)(`div`,{className:`orbit-item item-2`,children:(0,x.jsx)(r,{size:24,color:`#fff`,strokeWidth:2.5})}),(0,x.jsx)(`div`,{className:`orbit-item item-3`,children:(0,x.jsx)(o,{size:28,color:`#fff`,strokeWidth:2.5})}),(0,x.jsx)(`div`,{className:`orbit-item item-4`,children:(0,x.jsx)(c,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,x.jsx)(`div`,{className:`center-glass`,children:(0,x.jsx)(s,{size:60,color:`#FBBF24`,className:`trophy-icon`,strokeWidth:2})})]}),(0,x.jsxs)(`div`,{className:`visual-text`,children:[(0,x.jsx)(`h2`,{children:`NTI OLYMPIAD`}),(0,x.jsx)(`p`,{children:`Challenge your reasoning, benchmark your performance, and achieve national excellence.`})]})]})}),(0,x.jsx)(`div`,{className:`login-right`,children:(0,x.jsxs)(`div`,{className:`login-card`,children:[(0,x.jsxs)(`div`,{className:`login-header`,children:[(0,x.jsxs)(`div`,{className:`login-brand-left`,children:[(0,x.jsx)(`span`,{children:`NATIONAL TALENT`}),(0,x.jsx)(`span`,{children:`IDENTIFICATION`})]}),(0,x.jsxs)(`div`,{className:`login-brand-right`,children:[(0,x.jsxs)(`div`,{className:`login-circles`,children:[(0,x.jsx)(`div`,{className:`circle circle-red`,children:(0,x.jsx)(n,{size:18,color:`#fff`})}),(0,x.jsx)(`div`,{className:`circle circle-green`,children:(0,x.jsx)(r,{size:18,color:`#fff`})}),(0,x.jsx)(`div`,{className:`circle circle-blue`,children:(0,x.jsx)(l,{size:18,color:`#fff`})}),(0,x.jsx)(`div`,{className:`circle circle-yellow`,children:(0,x.jsx)(c,{size:18,color:`#fff`})})]}),(0,x.jsxs)(`div`,{className:`login-logo-text`,children:[(0,x.jsx)(`strong`,{children:`NTI`}),` OLYMPIAD`]})]})]}),(0,x.jsxs)(`div`,{className:`login-center-title`,children:[(0,x.jsx)(`h2`,{children:`RESET PASSWORD`}),(0,x.jsx)(`p`,{children:`Create a new password for your account.`})]}),D?(0,x.jsxs)(`div`,{className:`success-message`,style:{textAlign:`center`,padding:`20px 0`},children:[(0,x.jsx)(`div`,{style:{width:`60px`,height:`60px`,background:`#d1fae5`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`},children:(0,x.jsx)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#059669`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,x.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,x.jsx)(`h3`,{style:{fontSize:`18px`,fontWeight:`600`,color:`#111827`,marginBottom:`8px`},children:`Password Reset Successful`}),(0,x.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.5`},children:`Your password has been changed successfully. You will be redirected to the login page shortly.`}),(0,x.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,marginTop:`16px`},children:(0,x.jsx)(m,{to:g.login,style:{color:`#1976D2`,textDecoration:`none`,fontWeight:`500`},children:`Click here to login now`})})]}):(0,x.jsxs)(`form`,{onSubmit:async t=>{if(t.preventDefault(),e!==f){v.error(`Passwords do not match!`);return}if(!P){M(`Reset token is missing from the URL. Please request a new link.`);return}A(!0),M(``);try{let t=await fetch(`${y}/api/auth/reset-password`,{method:`POST`,credentials:`include`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:P,password:e})}),n=await t.json();t.ok?(v.success(n.message||`Password reset successfully!`),O(!0),setTimeout(()=>{F(g.login)},3e3)):(v.error(n.error||`Failed to reset password. The link may have expired.`),M(n.error||`Failed to reset password. The link may have expired.`))}catch(e){console.error(`Error during password reset:`,e),v.error(`Network error. Please try again later.`),M(`Network error. Please try again later.`)}finally{A(!1)}},className:`login-form`,children:[j&&(0,x.jsx)(`div`,{style:{color:`#dc2626`,backgroundColor:`#fee2e2`,padding:`12px`,borderRadius:`6px`,fontSize:`13px`,fontWeight:`500`},children:j}),(0,x.jsxs)(`div`,{className:`login-field`,children:[(0,x.jsxs)(`label`,{children:[`NEW PASSWORD `,(0,x.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,x.jsxs)(`div`,{className:`password-wrap`,children:[(0,x.jsx)(`input`,{type:C?`text`:`password`,placeholder:`Enter new password`,value:e,onChange:e=>u(e.target.value),disabled:k,required:!0}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>w(!C),className:`eye-btn`,disabled:k,children:C?(0,x.jsx)(t,{size:18,color:`#9CA3AF`}):(0,x.jsx)(d,{size:18,color:`#9CA3AF`})})]})]}),(0,x.jsxs)(`div`,{className:`login-field`,children:[(0,x.jsxs)(`label`,{children:[`CONFIRM PASSWORD `,(0,x.jsx)(`span`,{className:`asterisk`,children:`*`})]}),(0,x.jsxs)(`div`,{className:`password-wrap`,children:[(0,x.jsx)(`input`,{type:T?`text`:`password`,placeholder:`Confirm new password`,value:f,onChange:e=>S(e.target.value),disabled:k,required:!0}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>E(!T),className:`eye-btn`,disabled:k,children:T?(0,x.jsx)(t,{size:18,color:`#9CA3AF`}):(0,x.jsx)(d,{size:18,color:`#9CA3AF`})})]})]}),(0,x.jsx)(`div`,{className:`submit-wrap`,style:{marginTop:`16px`},children:(0,x.jsx)(`button`,{type:`submit`,className:`submit-btn`,style:{width:`100%`,justifyContent:`center`},disabled:k,children:k?(0,x.jsxs)(x.Fragment,{children:[`RESETTING... `,(0,x.jsx)(a,{className:`animate-spin`,size:18})]}):(0,x.jsxs)(x.Fragment,{children:[`RESET PASSWORD `,(0,x.jsx)(i,{size:18})]})})})]})]})})]}),(0,x.jsx)(`style`,{children:`
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
        .visual-container {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }
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
        .orbit-item {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          animation: floatIcon 6s infinite alternate ease-in-out;
        }
        .item-1 { top: 5%; left: 0%; width: 56px; height: 56px; background: linear-gradient(135deg, #F87171, #DC2626); --rot: -10; }
        .item-2 { top: 10%; right: 5%; width: 50px; height: 50px; background: linear-gradient(135deg, #34D399, #059669); --rot: 15; animation-delay: -1.5s; }
        .item-3 { bottom: 10%; left: 5%; width: 64px; height: 64px; background: linear-gradient(135deg, #60A5FA, #2563EB); --rot: -5; animation-delay: -3s; }
        .item-4 { bottom: 15%; right: 0%; width: 54px; height: 54px; background: linear-gradient(135deg, #FBBF24, #D97706); --rot: 10; animation-delay: -4.5s; }
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
          gap: 24px;
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
        .password-wrap {
          position: relative;
        }
        .login-field input[type="text"],
        .login-field input[type="password"] {
          width: 100%;
          padding: 12px 40px 12px 14px;
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
        .submit-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
        }
        .submit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
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
        .submit-btn:hover {
          background: #1565C0;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
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
      `})]})}export{S as default};