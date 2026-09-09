import{n as e,r as t}from"./fortune.C7W44vcv.js";var n=document.getElementById(`solar-to-lunar-form`),r=document.getElementById(`s2l-result`),i=document.getElementById(`lunar-to-solar-form`),a=document.getElementById(`l2s-result`);function o(e,t){e.innerHTML=`<p class="error-msg">${t}</p>`}n.addEventListener(`submit`,e=>{e.preventDefault();try{let[e,i,a]=new FormData(n).get(`solar-date`).trim().split(`-`).map(e=>parseInt(e,10));if(Number.isNaN(e)||Number.isNaN(i)||Number.isNaN(a))throw Error(`날짜 형식이 올바르지 않습니다.`);let o=t(e,i,a);r.innerHTML=`
        <p>입력한 양력 <strong>${e}년 ${i}월 ${a}일</strong>은</p>
        <p class="big-result">음력 ${o.lunar.year}년 ${o.lunar.month}월 ${o.lunar.day}일 ${o.lunar.isLeapMonth?`(윤달)`:``}</p>
        <p class="gapja-info">년주 ${o.gapja.yearPillarHanja} (${o.gapja.yearPillar}) · 일주 ${o.gapja.dayPillarHanja} (${o.gapja.dayPillar})</p>
      `}catch(e){o(r,e.message)}}),i.addEventListener(`submit`,t=>{t.preventDefault();try{let t=new FormData(i),n=parseInt(t.get(`lunar-year`),10),r=parseInt(t.get(`lunar-month`),10),o=parseInt(t.get(`lunar-day`),10),s=t.get(`lunar-leap`)===`on`;if(Number.isNaN(n)||Number.isNaN(r)||Number.isNaN(o))throw Error(`숫자를 입력해 주세요.`);let c=e(n,r,o,s);a.innerHTML=`
        <p>입력한 음력 <strong>${n}년 ${r}월 ${o}일${s?` (윤달)`:``}</strong>은</p>
        <p class="big-result">양력 ${c.solar.year}년 ${c.solar.month}월 ${c.solar.day}일</p>
        <p class="gapja-info">년주 ${c.gapja.yearPillarHanja} (${c.gapja.yearPillar}) · 일주 ${c.gapja.dayPillarHanja} (${c.gapja.dayPillar})</p>
      `}catch(e){o(a,e.message)}});