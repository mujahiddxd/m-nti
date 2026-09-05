import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{$ as t,L as n,W as r,Y as i,ft as a,k as o,lt as s,o as c,ot as l,p as u,pt as d}from"./icons-Cff_7MF5.js";import{t as f}from"./react-DI1tKokD.js";import{n as p,u as m}from"./router-_JDcIN7Y.js";import{c as h,h as g,t as _}from"./index-B9KBpaqb.js";var v=e(d(),1),y=f();function b(){let[e]=m(),d=e.get(`token`),[f,b]=(0,v.useState)(`verifying`),[x,S]=(0,v.useState)(``);return(0,v.useEffect)(()=>{(async()=>{if(!d){b(`error`),S(`Verification token is missing from the URL.`);return}try{let e=await fetch(`${_}/api/auth/verify-email`,{method:`POST`,credentials:`include`,headers:{"Content-Type":`application/json`},body:JSON.stringify({token:d})}),t=await e.json();e.ok?b(`success`):(b(`error`),S(t.error||`The verification link is invalid or has expired.`))}catch(e){console.error(`Error during email verification:`,e),b(`error`),S(`Failed to connect to the server. Please check your internet connection.`)}})()},[d]),(0,y.jsxs)(`div`,{className:`login-page`,children:[(0,y.jsxs)(g,{children:[(0,y.jsx)(`title`,{children:`Verify Email – NTI Olympiad Portal`}),(0,y.jsx)(`meta`,{name:`description`,content:`Verify your NTI Olympiad student or school coordinator portal email address.`}),(0,y.jsx)(`meta`,{name:`robots`,content:`noindex, follow`})]}),(0,y.jsx)(`div`,{className:`login-blue-bg`}),(0,y.jsxs)(`div`,{className:`login-content`,children:[(0,y.jsx)(`div`,{className:`login-left`,children:(0,y.jsxs)(`div`,{className:`login-visual-panel`,children:[(0,y.jsx)(`div`,{className:`blob blob-1`}),(0,y.jsx)(`div`,{className:`blob blob-2`}),(0,y.jsx)(`div`,{className:`blob blob-3`}),(0,y.jsxs)(`div`,{className:`visual-container`,children:[(0,y.jsx)(`div`,{className:`orbit-item item-1`,children:(0,y.jsx)(n,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-2`,children:(0,y.jsx)(r,{size:24,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-3`,children:(0,y.jsx)(s,{size:28,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`orbit-item item-4`,children:(0,y.jsx)(l,{size:26,color:`#fff`,strokeWidth:2.5})}),(0,y.jsx)(`div`,{className:`center-glass`,children:(0,y.jsx)(c,{size:60,color:`#FBBF24`,className:`trophy-icon`,strokeWidth:2})})]}),(0,y.jsxs)(`div`,{className:`visual-text`,children:[(0,y.jsx)(`h2`,{children:`NTI OLYMPIAD`}),(0,y.jsx)(`p`,{children:`Challenge your reasoning, benchmark your performance, and achieve national excellence.`})]})]})}),(0,y.jsx)(`div`,{className:`login-right`,children:(0,y.jsxs)(`div`,{className:`login-card`,children:[(0,y.jsxs)(`div`,{className:`login-header`,children:[(0,y.jsxs)(`div`,{className:`login-brand-left`,children:[(0,y.jsx)(`span`,{children:`NATIONAL TALENT`}),(0,y.jsx)(`span`,{children:`IDENTIFICATION`})]}),(0,y.jsxs)(`div`,{className:`login-brand-right`,children:[(0,y.jsxs)(`div`,{className:`login-circles`,children:[(0,y.jsx)(`div`,{className:`circle circle-red`,children:(0,y.jsx)(n,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-green`,children:(0,y.jsx)(r,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-blue`,children:(0,y.jsx)(u,{size:18,color:`#fff`})}),(0,y.jsx)(`div`,{className:`circle circle-yellow`,children:(0,y.jsx)(l,{size:18,color:`#fff`})})]}),(0,y.jsxs)(`div`,{className:`login-logo-text`,children:[(0,y.jsx)(`strong`,{children:`NTI`}),` OLYMPIAD`]})]})]}),f===`verifying`&&(0,y.jsxs)(`div`,{className:`status-container`,style:{textAlign:`center`,padding:`40px 0`},children:[(0,y.jsx)(o,{className:`animate-spin`,size:48,color:`#1976D2`,style:{margin:`0 auto 20px`}}),(0,y.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`400`,color:`#374151`,marginBottom:`12px`},children:`VERIFYING EMAIL`}),(0,y.jsx)(`p`,{style:{fontSize:`14px`,color:`#9CA3AF`},children:`Please wait while we verify your email address...`})]}),f===`success`&&(0,y.jsxs)(`div`,{className:`status-container`,style:{textAlign:`center`,padding:`20px 0`},children:[(0,y.jsx)(`div`,{style:{width:`60px`,height:`60px`,background:`#d1fae5`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`},children:(0,y.jsx)(t,{size:32,color:`#059669`})}),(0,y.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`400`,color:`#374151`,marginBottom:`12px`},children:`EMAIL VERIFIED`}),(0,y.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.5`,marginBottom:`24px`},children:`Your email address has been verified successfully. You can now log in to the coordinator portal.`}),(0,y.jsx)(p,{to:h.login,className:`submit-btn`,style:{textDecoration:`none`,justifyContent:`center`,display:`inline-flex`,width:`100%`},children:`CONTINUE TO LOGIN`})]}),f===`error`&&(0,y.jsxs)(`div`,{className:`status-container`,style:{textAlign:`center`,padding:`20px 0`},children:[(0,y.jsx)(`div`,{style:{width:`60px`,height:`60px`,background:`#fee2e2`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`},children:(0,y.jsx)(i,{size:32,color:`#dc2626`})}),(0,y.jsx)(`h2`,{style:{fontSize:`24px`,fontWeight:`400`,color:`#374151`,marginBottom:`12px`},children:`VERIFICATION FAILED`}),(0,y.jsx)(`p`,{style:{fontSize:`14px`,color:`#dc2626`,fontWeight:`500`,marginBottom:`12px`},children:x}),(0,y.jsx)(`p`,{style:{fontSize:`14px`,color:`#6B7280`,lineHeight:`1.5`,marginBottom:`24px`},children:`Please try requesting a new verification link, or contact support if you continue to have trouble.`}),(0,y.jsx)(p,{to:h.login,className:`submit-btn`,style:{textDecoration:`none`,justifyContent:`center`,display:`inline-flex`,width:`100%`,background:`#dc2626`},children:`BACK TO LOGIN`})]}),(0,y.jsx)(`div`,{className:`login-footer`,style:{textAlign:`center`,marginTop:`40px`},children:(0,y.jsxs)(p,{to:h.login,className:`back-link`,style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,color:`#6B7280`,textDecoration:`none`,fontSize:`14px`,fontWeight:`500`},children:[(0,y.jsx)(a,{size:16}),` Back to Login`]})})]})})]}),(0,y.jsx)(`style`,{children:`
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
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
      `})]})}export{b as default};