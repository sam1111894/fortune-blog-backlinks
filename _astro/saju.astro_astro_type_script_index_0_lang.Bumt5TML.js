import{t as e}from"./fortune.C7W44vcv.js";var t=document.getElementById(`saju-form`),n=document.getElementById(`saju-result`),r=t.querySelector(`.submit-btn`),i=r.textContent;t.addEventListener(`submit`,async a=>{a.preventDefault(),r.disabled=!0,r.textContent=`계산 중...`;try{let r=new FormData(t),i=r.get(`birthdate`).trim(),a=r.get(`birthtime`).trim(),o=a===`-1`?12:parseInt(a,10);if(!i)throw Error(`생년월일을 입력해 주세요.`);let[s,c,l]=i.split(`-`).map(e=>parseInt(e,10));if(Number.isNaN(s)||Number.isNaN(c)||Number.isNaN(l))throw Error(`날짜 형식이 올바르지 않습니다.`);let u=e(s,c,l,o),d=u.saju,f=u.lunar.lunar,p=a===`-1`?`시간 미상 (정오 기준)`:`${String(o).padStart(2,`0`)}시`,m=`음력 ${f.year}년 ${f.month}월 ${f.day}일${f.isLeapMonth?` (윤달)`:``}`;n.innerHTML=`
        <h2>${s}년 ${c}월 ${l}일 ${p}</h2>
        <div class="pillars">
          <div class="pillar"><span class="pos">년주</span><span class="hanja">${d.yearPillarHanja}</span><span class="hangul">${d.yearPillar}</span></div>
          <div class="pillar"><span class="pos">월주</span><span class="hanja">${d.monthPillarHanja}</span><span class="hangul">${d.monthPillar}</span></div>
          <div class="pillar"><span class="pos">일주</span><span class="hanja">${d.dayPillarHanja}</span><span class="hangul">${d.dayPillar}</span></div>
          <div class="pillar"><span class="pos">시주</span><span class="hanja">${d.hourPillarHanja??`—`}</span><span class="hangul">${d.hourPillar??`—`}</span></div>
        </div>
        <p class="lunar-info">${m}${d.isTimeCorrected?` · 야간 시간 자동 보정됨`:``}</p>
      `}catch(e){n.innerHTML=`
        <h2>오류</h2>
        <p class="error-msg">${e.message}</p>
      `}finally{r.disabled=!1,r.textContent=i}});