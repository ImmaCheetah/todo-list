(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{D:()=>y});const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const o=new Uint8Array(16);function d(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));const l=function(e,n,o){if(t.randomUUID&&!n&&!e)return t.randomUUID();const l=(e=e||{}).random||(e.rng||d)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,n){o=o||0;for(let e=0;e<16;++e)n[o+e]=l[e];return n}return function(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}(l)};function a(e,t,n,o){let d=!1;e=e.toString(),t=t.toString();const r=e=>{o=e};return{get title(){return e},get description(){return t},get dueDate(){return n},get priority(){return o},getCompleteState:()=>d,setComplete:()=>{d=!0},changePriority:r,editTask:(o,d,l,a)=>{e=o,t=d,n=l,r(a)},printTask:()=>{console.log(`Task title - ${e}, Desc - ${t}, Date - ${n}, Priority - ${o}`)}}}function i(e){let t=l(),n=[];return{title:e,tasks:n,myuuid:t,addTask:e=>{n.push(e)},displayTasks:()=>{for(let e=0;e<n.length;e++)console.log(`Task ${e} - ${n[e].title}, ${n[e].dueDate}, ${n[e].priority}`)},deleteTask:e=>{n.splice(e,1)}}}function s(e){let t=function(e){const t=document.querySelector(".folders-div"),n=document.createElement("button");return n.classList.add("folder-button"),n.textContent=e.title,n.value=e.myuuid,t.appendChild(n),n.addEventListener("click",y),t}(e);document.querySelector(".sidebar").appendChild(t)}const c=function(){let e=[];return{folders:e,addFolder:t=>{e.push(t)},deleteFolder:t=>{e.splice(t,1)}}}(),u=i("Inbox");console.log("Inbox Folder ID is "+u.myuuid);const m=a("chores","wash dishes","nov 23","high"),p=a("movies","avatar","nov 29","med"),f=a("coding","todo list","dec 10","low");function y(){let e=this.value;return c.folders.forEach((t=>{e===t.myuuid&&(document.getElementById("task-container").textContent="",t.tasks.forEach((e=>{!function(e,t){let n=function(e){const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p");return t.classList.add("task-div"),n.textContent=e.title,o.textContent=e.description,d.textContent=e.dueDate,r.textContent=e.priority,t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(r),t}(e);document.getElementById(t).appendChild(n)}(e,["task-container"])})),console.log("match found"))})),e}m.editTask("new thing","another new thing","new date","HIGH"),u.addTask(f),u.addTask(p),u.addTask(m),u.displayTasks(),c.addFolder(u),console.log(c),document.getElementById("open-task-modal-btn").addEventListener("click",(function(){document.getElementById("task-dialog").showModal()})),document.getElementById("folder-add-btn").addEventListener("click",(function(){document.getElementById("folder-dialog").showModal()})),document.getElementById("folder-confirm-btn").addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("folder-dialog"),{folderTitleInForm:n}=function(){const e=document.getElementById("folder-form");return{folderForm:e,folderTitleInForm:e.elements["folder-title"].value}}();let o=i(n);s(o),c.addFolder(o),console.log(c.folders),t.close()})),document.getElementById("task-add-btn").addEventListener("click",(function(){const{taskTitle:e,taskDescription:t,taskDueDate:n,taskPriority:o}=function(){const e=document.getElementById("main-form"),t=e.elements["task-title"],n=e.elements["task-description"],o=e.elements["task-due-date"],d=e.elements["task-priority"];return{taskTitle:t.value,taskDescription:n.value,taskDueDate:o.value,taskPriority:d.value}}(),d=a(e,t,n,o);c.folders.forEach((e=>{tempId===e.myuuid&&e.addTask(d)})),console.log(d.printTask())}));let g=i("test");g.addTask(m),c.addFolder(g),s(g);let k=i("test2");k.addTask(p),c.addFolder(k),s(k)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRVyxTQUFRQyxJQUNwQkgsU0FBV0csRUFBT3RDLFFBQ2xCc0MsRUFBT3BDLFFBQVFvRSxFQUNuQixJQUVKekUsUUFBUUMsSUFBSXdFLEVBQVExRSxZQUN4QixJQUtBLElBQUkyRSxFQUFheEUsRUFBTyxRQUN4QndFLEVBQVdyRSxRQUFROEIsR0FDbkJQLEVBQVlFLFVBQVU0QyxHQUN0QjlELEVBQWE4RCxHQUViLElBQUlDLEVBQWN6RSxFQUFPLFNBQ3pCeUUsRUFBWXRFLFFBQVErQixHQUNwQlIsRUFBWUUsVUFBVTZDLEdBQ3RCL0QsRUFBYStELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNvbXBsZXRlU3RhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldENvbXBsZXRlU3RhdGUgPSAoKSA9PiBjb21wbGV0ZVN0YXRlO1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aXRsZSA9IHRpdGxlLnRvU3RyaW5nKCk7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi50b1N0cmluZygpO1xuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VGFzayA9IChuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayB0aXRsZSAtICR7dGl0bGV9LCBEZXNjIC0gJHtkZXNjcmlwdGlvbn0sIERhdGUgLSAke2R1ZURhdGV9LCBQcmlvcml0eSAtICR7cHJpb3JpdHl9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sIFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSwgXG4gICAgICAgIGdldCBkdWVEYXRlKCkge3JldHVybiBkdWVEYXRlfSwgXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgICAgICBnZXRDb21wbGV0ZVN0YXRlLFxuICAgICAgICBzZXRDb21wbGV0ZSwgXG4gICAgICAgIGNoYW5nZVByaW9yaXR5LFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgcHJpbnRUYXNrXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvbGRlcih0aXRsZSkge1xuICAgIFxuXG4gICAgbGV0IG15dXVpZCA9IHV1aWR2NCgpO1xuICAgIGxldCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrTmFtZSkgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrICR7aX0gLSAke3Rhc2tzW2ldLnRpdGxlfSwgJHt0YXNrc1tpXS5kdWVEYXRlfSwgJHt0YXNrc1tpXS5wcmlvcml0eX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tOYW1lLCAxKTtcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge3RpdGxlLCB0YXNrcywgbXl1dWlkLCBhZGRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZVRhc2t9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VwZXJGb2xkZXIoKSB7XG4gICAgbGV0IGZvbGRlcnMgPSBbXVxuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKG5ld0ZvbGRlck5hbWUpID0+IHtcbiAgICAgICAgZm9sZGVycy5wdXNoKG5ld0ZvbGRlck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IChmb2xkZXJOYW1lKSA9PiB7XG4gICAgICAgIGZvbGRlcnMuc3BsaWNlKGZvbGRlck5hbWUsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7Zm9sZGVycywgYWRkRm9sZGVyLCBkZWxldGVGb2xkZXJ9XG59IiwiaW1wb3J0IHtcbiAgICBvcGVuRm9sZGVyV2l0aElEXG59IGZyb20gJy4uL2luZGV4LmpzJztcblxuLy8gQ3JlYXRlIGFsbCBlbGVtZW50cyBmb3IgZWFjaCB0YXNrIHByb3BlcnR5IGFuZCBjaGFuZ2UgdGV4dCBjb250ZW50IHRvIGNvcnJlc3BvbmRpbmcgdmFsdWVcbi8vIFRoZW4gYWRkIHRoZW0gdG8gYSBtYWluIGRpdiBhbmQgcmV0dXJuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGl0bGVJbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0YXNrVGl0bGVJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnRpdGxlO1xuICAgIHRhc2tEZXNjcmlwdGlvbkluRGl2LnRleHRDb250ZW50ID0gdGFza05hbWUuZGVzY3JpcHRpb247XG4gICAgdGFza0R1ZURhdGVJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLmR1ZURhdGU7XG4gICAgdGFza1ByaW9yaXR5SW5EaXYudGV4dENvbnRlbnQgPSB0YXNrTmFtZS5wcmlvcml0eTtcbiAgICBcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUluRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkluRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5EaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5EaXYpO1xuICAgIFxuICAgIHJldHVybiB0YXNrRGl2O1xufVxuXG4vLyBUYWtlIGluIHRhc2sgYW5kIHdoZXJlIHRvIGFwcGVuZFxuLy8gQ3JlYXRlIHRoZSB0YXNrIHVzaW5nIGNyZWF0ZVRhc2tFbGVtZW50IGFuZCBhc3NpZ24gdG8gdmFyaWFibGVcbi8vIFRhcmdldCBlbGVtZW50IHRvIGFwcGVuZCB0byBhbmQgYXBwZW5kXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2tOYW1lLCBsb2NhdGlvbikge1xuICAgIGxldCB0YXNrRE9NID0gY3JlYXRlVGFza0VsZW1lbnQodGFza05hbWUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbik7XG4gICAgbG9jYXRpb25ET00uYXBwZW5kQ2hpbGQodGFza0RPTSk7XG59XG5cbi8vIFRha2UgaW4gZm9sZGVyIG5hbWUgdGhlbiBsb29wIHRocm91Z2ggdGFza3MgaW5zaWRlIGZvbGRlciB0byBhcHBlbmQgdG8gc2NyZWVuXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVyVGFza3MoZm9sZGVyTmFtZSkge1xuICAgIGZvbGRlck5hbWUudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgYXBwZW5kVGFzayh0YXNrLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrRm9ybUluZm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stdGl0bGUnXTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWRlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWR1ZS1kYXRlJ107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay1wcmlvcml0eSddO1xuICAgIFxuICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbkZvcm0udmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5Gb3JtLnZhbHVlO1xuXG4gICAgcmV0dXJuIHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX07XG59IFxuXG4vLyBDcmVhdGUgYnV0dG9uIHRvIGhvbGQgZm9sZGVyIGFuZCB0aXRsZVxuLy8gQWRkIHRpdGxlIHRvIGRpdiBhbmQgcmV0dXJuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJFbGVtZW50KGZvbGRlck5hbWUpIHtcbiAgICBjb25zdCBmb2xkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycy1kaXYnKTtcbiAgICBjb25zdCBmb2xkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vIGZvbGRlckRpdi5jbGFzc0xpc3QuYWRkKCdmb2xkZXItZGl2Jyk7XG4gICAgZm9sZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlci1idXR0b24nKTtcbiAgICBmb2xkZXJCdG4udGV4dENvbnRlbnQgPSBmb2xkZXJOYW1lLnRpdGxlO1xuICAgIGZvbGRlckJ0bi52YWx1ZSA9IGZvbGRlck5hbWUubXl1dWlkO1xuXG4gICAgZm9sZGVyRGl2LmFwcGVuZENoaWxkKGZvbGRlckJ0bik7XG5cbiAgICBmb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9sZGVyV2l0aElEKTtcbiAgICBcbiAgICByZXR1cm4gZm9sZGVyRGl2O1xufVxuXG4vLyBUYWtlIGluIGZvbGRlciBuYW1lIGFuZCBjcmVhdGUgZm9sZGVyIHVzaW5nIGZ1bmN0aW9uXG4vLyBBcHBlbmQgdG8gc2lkZWJhclxuZnVuY3Rpb24gYXBwZW5kRm9sZGVyKGZvbGRlck5hbWUpIHtcbiAgICBsZXQgZm9sZGVyRE9NID0gY3JlYXRlRm9sZGVyRWxlbWVudChmb2xkZXJOYW1lKTtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyRm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhckZvbGRlcnMuYXBwZW5kQ2hpbGQoZm9sZGVyRE9NKTtcbn1cblxuLy8gVGFrZSBpbiBzdXBlciBmb2xkZXIgbmFtZSB0byBsb29wIHRocm91Z2ggZWFjaCBmb2xkZXIgYW5kIGFwcGVuZCB0byBzaWRlYmFyXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVycyhzdXBlckZvbGRlck5hbWUpIHtcbiAgICAvLyBjbGVhclNpZGViYXIoKTtcbiAgICBzdXBlckZvbGRlck5hbWUuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGFwcGVuZEZvbGRlcihmb2xkZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGb2xkZXJGb3JtSW5mbygpIHtcbiAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1mb3JtJyk7XG5cbiAgICBjb25zdCBmb2xkZXJUaXRsZUluRm9ybSA9IGZvbGRlckZvcm0uZWxlbWVudHNbJ2ZvbGRlci10aXRsZSddLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtmb2xkZXJGb3JtLCBmb2xkZXJUaXRsZUluRm9ybX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2lkZWJhcigpIHtcbiAgICBjb25zdCBmb2xkZXJzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMtZGl2Jyk7XG4gICAgZm9sZGVyc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgZ2V0VGFza0Zvcm1JbmZvLFxuICAgIGdldEZvbGRlckZvcm1JbmZvLFxuICAgIGNyZWF0ZVRhc2tFbGVtZW50LFxuICAgIGNyZWF0ZUZvbGRlckVsZW1lbnQsXG4gICAgYXBwZW5kRm9sZGVyLFxuICAgIGRpc3BsYXlGb2xkZXJUYXNrcyxcbiAgICBhcHBlbmRUYXNrLFxuICAgIGRpc3BsYXlGb2xkZXJzLFxuICAgIGNsZWFyVGFza0NvbnRhaW5lclxufSIsImltcG9ydCB7XG4gICAgVGFzayxcbiAgICBGb2xkZXIsXG4gICAgU3VwZXJGb2xkZXJcbn0gZnJvbSAnLi9tb2R1bGVzL2ZhY3Rvcmllcy5qcyc7XG5cbmltcG9ydCB7XG4gICAgZ2V0VGFza0Zvcm1JbmZvLFxuICAgIGdldEZvbGRlckRpYWxvZyxcbiAgICBnZXRGb2xkZXJGb3JtSW5mbyxcbiAgICBjcmVhdGVUYXNrRWxlbWVudCxcbiAgICBjcmVhdGVGb2xkZXJFbGVtZW50LFxuICAgIGFwcGVuZEZvbGRlcixcbiAgICBkaXNwbGF5Rm9sZGVyVGFza3MsXG4gICAgYXBwZW5kVGFzayxcbiAgICBkaXNwbGF5Rm9sZGVycyxcbiAgICBjbGVhclRhc2tDb250YWluZXJcbn0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcyc7XG5cbi8vU3VwZXIgRm9sZGVyIFxuY29uc3Qgc3VwZXJGb2xkZXIgPSBTdXBlckZvbGRlcigpO1xuXG4vLyBNYWluIEZvbGRlciB0aGF0IHRhc2tzIHdpbGwgZ28gaW50b1xuY29uc3QgaW5ib3hGb2xkZXIgPSBGb2xkZXIoJ0luYm94Jyk7XG5jb25zb2xlLmxvZyhcIkluYm94IEZvbGRlciBJRCBpcyBcIiArIGluYm94Rm9sZGVyLm15dXVpZCk7XG5cbi8vIFRlc3QgdGFza3NcbmNvbnN0IHRhc2sxID0gVGFzaygnY2hvcmVzJywgJ3dhc2ggZGlzaGVzJywgJ25vdiAyMycsICdoaWdoJyk7XG5jb25zdCB0YXNrMiA9IFRhc2soJ21vdmllcycsICdhdmF0YXInLCAnbm92IDI5JywgJ21lZCcpO1xuY29uc3QgdGFzazMgPSBUYXNrKCdjb2RpbmcnLCAndG9kbyBsaXN0JywgJ2RlYyAxMCcsICdsb3cnKTtcblxudGFzazEuZWRpdFRhc2soJ25ldyB0aGluZycsICdhbm90aGVyIG5ldyB0aGluZycsICduZXcgZGF0ZScsICdISUdIJyk7XG5cbi8vIFRlc3RpbmcgZnVuY3Rpb25hbGl0aWVzXG5pbmJveEZvbGRlci5hZGRUYXNrKHRhc2szKTtcbmluYm94Rm9sZGVyLmFkZFRhc2sodGFzazIpO1xuaW5ib3hGb2xkZXIuYWRkVGFzayh0YXNrMSk7XG5pbmJveEZvbGRlci5kaXNwbGF5VGFza3MoKTtcbnN1cGVyRm9sZGVyLmFkZEZvbGRlcihpbmJveEZvbGRlcik7XG5jb25zb2xlLmxvZyhzdXBlckZvbGRlcik7XG5cblxuLy8gT3BlbiB0YXNrIG1vZGFsIHdoZW4gY2xpY2tlZFxuY29uc3Qgb3BlblRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXRhc2stbW9kYWwtYnRuJyk7XG5vcGVuVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRpYWxvZycpO1xuXG4gICAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn0pXG5cblxuLy8gZGlzcGxheUZvbGRlclRhc2tzKGluYm94Rm9sZGVyKTtcbi8vIGRpc3BsYXlGb2xkZXJzKHN1cGVyRm9sZGVyKTtcblxuLy8gT3BlbiBmb2xkZXIgbW9kYWwgd2hlbiBjbGlja2VkXG5jb25zdCBhZGRGb2xkZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLWFkZC1idG4nKTtcbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IGZvbGRlckRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItZGlhbG9nJyk7XG4gICAgLy8gZ2V0Rm9sZGVyRGlhbG9nKCk7XG4gICAgLy91c2Ugc2hvd01vZGFsKClcbiAgICBmb2xkZXJEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gc3VibWl0IGZvbGRlciBmb3JtXG4vLyBDcmVhdGUgYSBuZXcgZm9sZGVyIGluc3RhbmNlIHdpdGggaW5mbyBmcm9tIGZvcm1cbi8vIEFkZCB0byBET01cbi8vIEFkZCB0byBzdXBlciBmb2xkZXJcbi8vIFNob3VsZCBiZSBkb25lIG9uIHRoZSBmb3JtIGluc3RlYWQgb2YgYnV0dG9uIGJ1dCBNRE4gZXhhbXBsZSB3aXRoIGRpYWxvZyBkaWQgaXQgdGhpcyB3YXlcbmNvbnN0IGZvbGRlclN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItY29uZmlybS1idG4nKTtcbmZvbGRlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgY29uc3QgZm9sZGVyRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kaWFsb2cnKTtcbiAgICBjb25zdCB7Zm9sZGVyVGl0bGVJbkZvcm19ID0gZ2V0Rm9sZGVyRm9ybUluZm8oKTtcblxuICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIoZm9sZGVyVGl0bGVJbkZvcm0pO1xuICAgIGFwcGVuZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIFxuICAgIHN1cGVyRm9sZGVyLmFkZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIGNvbnNvbGUubG9nKHN1cGVyRm9sZGVyLmZvbGRlcnMpO1xuXG4gICAgZm9sZGVyRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuLy8gR28gdGhyb3VnaCBhbGwgZm9sZGVycyBhbmQgY2hlY2sgaWYgdGhlIGNsaWNrZWQgYnV0dG9uIHZhbHVlIG1hdGNoZXMgZm9sZGVyIHZhbHVlXG4vLyB0aGVuIGRpc3BsYXkgdGFza3Mgb2YgdGhhdCBmb2xkZXIgdG8gc2NyZWVuXG5mdW5jdGlvbiBvcGVuRm9sZGVyV2l0aElEKCkge1xuICAgIGxldCB0ZW1wSWQgPSB0aGlzLnZhbHVlO1xuICAgIHN1cGVyRm9sZGVyLmZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICBpZiAodGVtcElkID09PSBmb2xkZXIubXl1dWlkKSB7XG4gICAgICAgICAgICBjbGVhclRhc2tDb250YWluZXIoKTtcbiAgICAgICAgICAgIC8vZGlzcGxheSBhbGwgdGFza3Mgb2YgdGhpcyBmb2xkZXIgdG8gcGFnZVxuICAgICAgICAgICAgZGlzcGxheUZvbGRlclRhc2tzKGZvbGRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdGNoIGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBJZDtcbn1cblxuY29uc3QgdGFza0FkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWFkZC1idG4nKTtcbi8vIENyZWF0ZSBuZXcgdGFzayBpbnN0YW5jZSB1c2luZyBpbmZvIGZyb20gZm9ybVxudGFza0FkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX0gPSBnZXRUYXNrRm9ybUluZm8oKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcbiAgICBzdXBlckZvbGRlci5mb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgaWYgKHRlbXBJZCA9PT0gZm9sZGVyLm15dXVpZCkge1xuICAgICAgICAgICAgZm9sZGVyLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrLnByaW50VGFzaygpKTtcbn0pXG5cbi8vIFNldCBjdXJyZW50IGZvbGRlciBJRCB0byBhIHZhcmlhYmxlXG4vLyBcblxubGV0IHRlc3RGb2xkZXIgPSBGb2xkZXIoJ3Rlc3QnKTtcbnRlc3RGb2xkZXIuYWRkVGFzayh0YXNrMSk7XG5zdXBlckZvbGRlci5hZGRGb2xkZXIodGVzdEZvbGRlcik7XG5hcHBlbmRGb2xkZXIodGVzdEZvbGRlcik7XG5cbmxldCB0ZXN0Rm9sZGVyMiA9IEZvbGRlcigndGVzdDInKTtcbnRlc3RGb2xkZXIyLmFkZFRhc2sodGFzazIpO1xuc3VwZXJGb2xkZXIuYWRkRm9sZGVyKHRlc3RGb2xkZXIyKTtcbmFwcGVuZEZvbGRlcih0ZXN0Rm9sZGVyMik7XG5cbmV4cG9ydCB7XG4gICAgb3BlbkZvbGRlcldpdGhJRFxufSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhbmRvbVVVSUQiLCJjcnlwdG8iLCJiaW5kIiwiZ2V0UmFuZG9tVmFsdWVzIiwicm5kczgiLCJVaW50OEFycmF5Iiwicm5nIiwiRXJyb3IiLCJieXRlVG9IZXgiLCJpIiwicHVzaCIsInRvU3RyaW5nIiwic2xpY2UiLCJvcHRpb25zIiwiYnVmIiwib2Zmc2V0Iiwicm5kcyIsInJhbmRvbSIsImFyciIsInVuc2FmZVN0cmluZ2lmeSIsIlRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGVTdGF0ZSIsImNoYW5nZVByaW9yaXR5IiwibmV3UHJpb3JpdHkiLCJnZXRDb21wbGV0ZVN0YXRlIiwic2V0Q29tcGxldGUiLCJlZGl0VGFzayIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwicHJpbnRUYXNrIiwiY29uc29sZSIsImxvZyIsIkZvbGRlciIsIm15dXVpZCIsInRhc2tzIiwiYWRkVGFzayIsIm5ld1Rhc2tOYW1lIiwiZGlzcGxheVRhc2tzIiwibGVuZ3RoIiwiZGVsZXRlVGFzayIsInRhc2tOYW1lIiwic3BsaWNlIiwiYXBwZW5kRm9sZGVyIiwiZm9sZGVyTmFtZSIsImZvbGRlckRPTSIsImZvbGRlckRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvbGRlckJ0biIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbkZvbGRlcldpdGhJRCIsImNyZWF0ZUZvbGRlckVsZW1lbnQiLCJzdXBlckZvbGRlciIsImZvbGRlcnMiLCJhZGRGb2xkZXIiLCJuZXdGb2xkZXJOYW1lIiwiZGVsZXRlRm9sZGVyIiwiU3VwZXJGb2xkZXIiLCJpbmJveEZvbGRlciIsInRhc2sxIiwidGFzazIiLCJ0YXNrMyIsInRlbXBJZCIsInRoaXMiLCJmb3JFYWNoIiwiZm9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXNrIiwibG9jYXRpb24iLCJ0YXNrRE9NIiwidGFza0RpdiIsInRhc2tUaXRsZUluRGl2IiwidGFza0Rlc2NyaXB0aW9uSW5EaXYiLCJ0YXNrRHVlRGF0ZUluRGl2IiwidGFza1ByaW9yaXR5SW5EaXYiLCJjcmVhdGVUYXNrRWxlbWVudCIsImFwcGVuZFRhc2siLCJzaG93TW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb2xkZXJEaWFsb2ciLCJmb2xkZXJUaXRsZUluRm9ybSIsImZvbGRlckZvcm0iLCJlbGVtZW50cyIsImdldEZvbGRlckZvcm1JbmZvIiwibmV3Rm9sZGVyIiwiY2xvc2UiLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsImZvcm0iLCJ0YXNrVGl0bGVJbkZvcm0iLCJ0YXNrRGVzY3JpcHRpb25JbkZvcm0iLCJ0YXNrRHVlRGF0ZUluRm9ybSIsInRhc2tQcmlvcml0eUluRm9ybSIsImdldFRhc2tGb3JtSW5mbyIsIm5ld1Rhc2siLCJ0ZXN0Rm9sZGVyIiwidGVzdEZvbGRlcjIiXSwic291cmNlUm9vdCI6IiJ9