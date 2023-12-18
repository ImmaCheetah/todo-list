(()=>{"use strict";const e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let t;const n=new Uint8Array(16);function o(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));const r=function(t,n,r){if(e.randomUUID&&!n&&!t)return e.randomUUID();const l=(t=t||{}).random||(t.rng||o)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,n){r=r||0;for(let e=0;e<16;++e)n[r+e]=l[e];return n}return function(e,t=0){return d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]}(l)};function l(e,t,n,o){let d=!1;e=e.toString(),t=t.toString();const r=e=>{o=e};return{get title(){return e},get description(){return t},get dueDate(){return n},get priority(){return o},getCompleteState:()=>d,setComplete:()=>{d=!0},changePriority:r,editTask:(o,d,l,i)=>{e=o,t=d,n=l,r(i)},printTask:()=>{console.log(`Task title - ${e}, Desc - ${t}, Date - ${n}, Priority - ${o}`)}}}function i(e){let t=r(),n=[];return{title:e,tasks:n,myuuid:t,addTask:e=>{n.push(e)},displayTasks:()=>{for(let e=0;e<n.length;e++)console.log(`Task ${e} - ${n[e].title}, ${n[e].dueDate}, ${n[e].priority}`)},deleteTask:e=>{n.splice(e,1)}}}function s(e){let t=function(e){const t=document.querySelector(".folders-div"),n=document.createElement("button");return n.classList.add("folder-button"),n.textContent=e.title,n.value=e.myuuid,t.appendChild(n),t}(e);document.querySelector(".sidebar").appendChild(t)}const a=function(){let e=[];return{folders:e,addFolder:t=>{e.push(t)},deleteFolder:t=>{e.splice(t,1)}}}(),c=i("Inbox");console.log("Inbox Folder ID is "+c.myuuid);const u=l("chores","wash dishes","nov 23","high"),m=l("movies","avatar","nov 29","med"),p=l("coding","todo list","dec 10","low");u.editTask("new thing","another new thing","new date","HIGH"),c.addTask(p),c.addTask(m),c.addTask(u),c.displayTasks(),a.addFolder(c),console.log(a);const f=document.getElementById("task-add-btn");document.getElementById("task-dialog").show(),f.addEventListener("click",(function(){const{taskTitle:e,taskDescription:t,taskDueDate:n,taskPriority:o}=function(){const e=document.getElementById("main-form"),t=e.elements["task-title"],n=e.elements["task-description"],o=e.elements["task-due-date"],d=e.elements["task-priority"];return{taskTitle:t.value,taskDescription:n.value,taskDueDate:o.value,taskPriority:d.value}}(),d=l(e,t,n,o);console.log(d.printTask())})),c.tasks.forEach((e=>{!function(e,t){let n=function(e){const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p");return t.classList.add("task-div"),n.textContent=e.title,o.textContent=e.description,d.textContent=e.dueDate,r.textContent=e.priority,t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(r),t}(e);document.getElementById(t).appendChild(n)}(e,["task-container"])})),document.getElementById("folder-add-btn").addEventListener("click",(function(){document.getElementById("folder-dialog").showModal()})),document.getElementById("folder-confirm-btn").addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("folder-dialog"),{folderTitleInForm:n}=function(){const e=document.getElementById("folder-form");return{folderForm:e,folderTitleInForm:e.elements["folder-title"].value}}();let o=i(n);s(o),a.addFolder(o),console.log(a.folders),t.close()}));let g="test",y=i(g);s(g),console.log(y.myuuid),document.querySelector(".folder-button").addEventListener("click",(function(){console.log("testing folder btn"),console.log(this.value)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVpNLFNBQVNxQixlQUFlaUIsR0FDaEM5QixZQUFZK0IsRUFDNUIsQ0FLUU8sQ0FBV1QsRUFBTSxDQUFDLGtCQUFrQixJQ3dCdkJyQyxTQUFTcUIsZUFBZSxrQkFFaENFLGlCQUFpQixTQUFTLFdBRWR2QixTQUFTcUIsZUFBZSxpQkFHaEMwQixXQUNqQixJQUV3Qi9DLFNBQVNxQixlQUFlLHNCQUloQ0UsaUJBQWlCLFNBQVMsU0FBU3lCLEdBQy9DQSxFQUFFQyxpQkFFRixNQUFNQyxFQUFlbEQsU0FBU3FCLGVBQWUsa0JBRXZDLGtCQUFDOEIsR0RVWCxXQUNJLE1BQU1DLEVBQWFwRCxTQUFTcUIsZUFBZSxlQUkzQyxNQUFPLENBQUMrQixhQUFZRCxrQkFGTUMsRUFBV3RCLFNBQVMsZ0JBQWdCdkIsTUFHbEUsQ0NoQmdDOEMsR0FFNUIsSUFBSUMsRUFBWXBFLEVBQU9pRSxHQUN2QnZELEVBQWEwRCxHQUViNUMsRUFBWUUsVUFBVTBDLEdBRXRCdEUsUUFBUUMsSUFBSXlCLEVBQVlDLFNBRXhCdUMsRUFBYUssT0FDakIsSUFFQSxJQUFJQyxFQUFhLE9BRWJDLEVBQVN2RSxFQUFPc0UsR0FDcEI1RCxFQUFhNEQsR0FDYnhFLFFBQVFDLElBQUl3RSxFQUFPdEUsUUFFRGEsU0FBU0MsY0FBYyxrQkFFL0JzQixpQkFBaUIsU0FBUyxXQUNoQ3ZDLFFBQVFDLElBQUksc0JBQ1pELFFBQVFDLElBQUl5RSxLQUFLbkQsTUFDckIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNvbXBsZXRlU3RhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldENvbXBsZXRlU3RhdGUgPSAoKSA9PiBjb21wbGV0ZVN0YXRlO1xuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aXRsZSA9IHRpdGxlLnRvU3RyaW5nKCk7XG4gICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi50b1N0cmluZygpO1xuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VGFzayA9IChuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayB0aXRsZSAtICR7dGl0bGV9LCBEZXNjIC0gJHtkZXNjcmlwdGlvbn0sIERhdGUgLSAke2R1ZURhdGV9LCBQcmlvcml0eSAtICR7cHJpb3JpdHl9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sIFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSwgXG4gICAgICAgIGdldCBkdWVEYXRlKCkge3JldHVybiBkdWVEYXRlfSwgXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgICAgICBnZXRDb21wbGV0ZVN0YXRlLFxuICAgICAgICBzZXRDb21wbGV0ZSwgXG4gICAgICAgIGNoYW5nZVByaW9yaXR5LFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgcHJpbnRUYXNrXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvbGRlcih0aXRsZSkge1xuICAgIFxuXG4gICAgbGV0IG15dXVpZCA9IHV1aWR2NCgpO1xuICAgIGxldCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrTmFtZSkgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrICR7aX0gLSAke3Rhc2tzW2ldLnRpdGxlfSwgJHt0YXNrc1tpXS5kdWVEYXRlfSwgJHt0YXNrc1tpXS5wcmlvcml0eX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tOYW1lLCAxKTtcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge3RpdGxlLCB0YXNrcywgbXl1dWlkLCBhZGRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZVRhc2t9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VwZXJGb2xkZXIoKSB7XG4gICAgbGV0IGZvbGRlcnMgPSBbXVxuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKG5ld0ZvbGRlck5hbWUpID0+IHtcbiAgICAgICAgZm9sZGVycy5wdXNoKG5ld0ZvbGRlck5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IChmb2xkZXJOYW1lKSA9PiB7XG4gICAgICAgIGZvbGRlcnMuc3BsaWNlKGZvbGRlck5hbWUsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7Zm9sZGVycywgYWRkRm9sZGVyLCBkZWxldGVGb2xkZXJ9XG59IiwiLy8gQ3JlYXRlIGFsbCBlbGVtZW50cyBmb3IgZWFjaCB0YXNrIHByb3BlcnR5IGFuZCBjaGFuZ2UgdGV4dCBjb250ZW50IHRvIGNvcnJlc3BvbmRpbmcgdmFsdWVcbi8vIFRoZW4gYWRkIHRoZW0gdG8gYSBtYWluIGRpdiBhbmQgcmV0dXJuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0YXNrTmFtZSkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGl0bGVJbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0YXNrVGl0bGVJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnRpdGxlO1xuICAgIHRhc2tEZXNjcmlwdGlvbkluRGl2LnRleHRDb250ZW50ID0gdGFza05hbWUuZGVzY3JpcHRpb247XG4gICAgdGFza0R1ZURhdGVJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLmR1ZURhdGU7XG4gICAgdGFza1ByaW9yaXR5SW5EaXYudGV4dENvbnRlbnQgPSB0YXNrTmFtZS5wcmlvcml0eTtcbiAgICBcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUluRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkluRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5EaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5SW5EaXYpO1xuICAgIFxuICAgIHJldHVybiB0YXNrRGl2O1xufVxuXG4vLyBUYWtlIGluIHRhc2sgYW5kIHdoZXJlIHRvIGFwcGVuZFxuLy8gQ3JlYXRlIHRoZSB0YXNrIHVzaW5nIGNyZWF0ZVRhc2tFbGVtZW50IGFuZCBhc3NpZ24gdG8gdmFyaWFibGVcbi8vIFRhcmdldCBlbGVtZW50IHRvIGFwcGVuZCB0byBhbmQgYXBwZW5kXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2tOYW1lLCBsb2NhdGlvbikge1xuICAgIGxldCB0YXNrRE9NID0gY3JlYXRlVGFza0VsZW1lbnQodGFza05hbWUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbik7XG4gICAgbG9jYXRpb25ET00uYXBwZW5kQ2hpbGQodGFza0RPTSk7XG59XG5cbi8vIFRha2UgaW4gZm9sZGVyIG5hbWUgdGhlbiBsb29wIHRocm91Z2ggdGFza3MgaW5zaWRlIGZvbGRlciB0byBhcHBlbmQgdG8gc2NyZWVuXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVyVGFza3MoZm9sZGVyTmFtZSkge1xuICAgIGZvbGRlck5hbWUudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgYXBwZW5kVGFzayh0YXNrLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrRm9ybUluZm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stdGl0bGUnXTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWRlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWR1ZS1kYXRlJ107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay1wcmlvcml0eSddO1xuICAgIFxuICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbkZvcm0udmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5Gb3JtLnZhbHVlO1xuXG4gICAgcmV0dXJuIHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX07XG59IFxuXG4vLyBDcmVhdGUgYnV0dG9uIHRvIGhvbGQgZm9sZGVyIGFuZCB0aXRsZVxuLy8gQWRkIHRpdGxlIHRvIGRpdiBhbmQgcmV0dXJuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJFbGVtZW50KGZvbGRlck5hbWUpIHtcbiAgICBjb25zdCBmb2xkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycy1kaXYnKTtcbiAgICBjb25zdCBmb2xkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vIGZvbGRlckRpdi5jbGFzc0xpc3QuYWRkKCdmb2xkZXItZGl2Jyk7XG4gICAgZm9sZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2ZvbGRlci1idXR0b24nKTtcbiAgICBmb2xkZXJCdG4udGV4dENvbnRlbnQgPSBmb2xkZXJOYW1lLnRpdGxlO1xuICAgIGZvbGRlckJ0bi52YWx1ZSA9IGZvbGRlck5hbWUubXl1dWlkO1xuXG4gICAgZm9sZGVyRGl2LmFwcGVuZENoaWxkKGZvbGRlckJ0bik7XG5cbiAgICByZXR1cm4gZm9sZGVyRGl2O1xufVxuXG4vLyBUYWtlIGluIGZvbGRlciBuYW1lIGFuZCBjcmVhdGUgZm9sZGVyIHVzaW5nIGZ1bmN0aW9uXG4vLyBBcHBlbmQgdG8gc2lkZWJhclxuZnVuY3Rpb24gYXBwZW5kRm9sZGVyKGZvbGRlck5hbWUpIHtcbiAgICBsZXQgZm9sZGVyRE9NID0gY3JlYXRlRm9sZGVyRWxlbWVudChmb2xkZXJOYW1lKTtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyRm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhckZvbGRlcnMuYXBwZW5kQ2hpbGQoZm9sZGVyRE9NKTtcbn1cblxuLy8gVGFrZSBpbiBzdXBlciBmb2xkZXIgbmFtZSB0byBsb29wIHRocm91Z2ggZWFjaCBmb2xkZXIgYW5kIGFwcGVuZCB0byBzaWRlYmFyXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVycyhzdXBlckZvbGRlck5hbWUpIHtcbiAgICAvLyBjbGVhclNpZGViYXIoKTtcbiAgICBzdXBlckZvbGRlck5hbWUuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGFwcGVuZEZvbGRlcihmb2xkZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGb2xkZXJGb3JtSW5mbygpIHtcbiAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1mb3JtJyk7XG5cbiAgICBjb25zdCBmb2xkZXJUaXRsZUluRm9ybSA9IGZvbGRlckZvcm0uZWxlbWVudHNbJ2ZvbGRlci10aXRsZSddLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtmb2xkZXJGb3JtLCBmb2xkZXJUaXRsZUluRm9ybX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2lkZWJhcigpIHtcbiAgICBjb25zdCBmb2xkZXJzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMtZGl2Jyk7XG4gICAgZm9sZGVyc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5cblxuICAgIFxuLy8gYWRkIGZvbGRlciBidXR0b25cbi8vIC0gd2hlbiBjbGlja2VkLCBjcmVhdGUgZGlhbG9nIG1vZGFsXG4vLyAtIGdldCBpbnB1dCBmcm9tIHVzZXJcbi8vIC0gc2F2ZSBpbnB1dCB2YWx1ZSB3aGVuIGFkZCBpcyBjbGlja2VkXG4vLyAtIHVzZSBzYXZlZCB2YWx1ZSB0byBjcmVhdGUgZm9sZGVyIG9uIHNpZGViYXJcblxuXG5cblxuZXhwb3J0IHtcbiAgICBnZXRUYXNrRm9ybUluZm8sXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgY3JlYXRlVGFza0VsZW1lbnQsXG4gICAgY3JlYXRlRm9sZGVyRWxlbWVudCxcbiAgICBhcHBlbmRGb2xkZXIsXG4gICAgZGlzcGxheUZvbGRlclRhc2tzLFxuICAgIGFwcGVuZFRhc2ssXG4gICAgZGlzcGxheUZvbGRlcnNcbn0iLCJpbXBvcnQge1xuICAgIFRhc2ssXG4gICAgRm9sZGVyLFxuICAgIFN1cGVyRm9sZGVyXG59IGZyb20gJy4vbW9kdWxlcy9mYWN0b3JpZXMuanMnO1xuXG5pbXBvcnQge1xuICAgIGdldFRhc2tGb3JtSW5mbyxcbiAgICBnZXRGb2xkZXJEaWFsb2csXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgY3JlYXRlVGFza0VsZW1lbnQsXG4gICAgY3JlYXRlRm9sZGVyRWxlbWVudCxcbiAgICBhcHBlbmRGb2xkZXIsXG4gICAgZGlzcGxheUZvbGRlclRhc2tzLFxuICAgIGFwcGVuZFRhc2ssXG4gICAgZGlzcGxheUZvbGRlcnNcbn0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcyc7XG5cbi8vU3VwZXIgRm9sZGVyIFxuY29uc3Qgc3VwZXJGb2xkZXIgPSBTdXBlckZvbGRlcigpO1xuXG4vLyBNYWluIEZvbGRlciB0aGF0IHRhc2tzIHdpbGwgZ28gaW50b1xuY29uc3QgaW5ib3hGb2xkZXIgPSBGb2xkZXIoJ0luYm94Jyk7XG5jb25zb2xlLmxvZyhcIkluYm94IEZvbGRlciBJRCBpcyBcIiArIGluYm94Rm9sZGVyLm15dXVpZCk7XG5cbi8vIFRlc3QgdGFza3NcbmNvbnN0IHRhc2sxID0gVGFzaygnY2hvcmVzJywgJ3dhc2ggZGlzaGVzJywgJ25vdiAyMycsICdoaWdoJyk7XG5jb25zdCB0YXNrMiA9IFRhc2soJ21vdmllcycsICdhdmF0YXInLCAnbm92IDI5JywgJ21lZCcpO1xuY29uc3QgdGFzazMgPSBUYXNrKCdjb2RpbmcnLCAndG9kbyBsaXN0JywgJ2RlYyAxMCcsICdsb3cnKTtcblxudGFzazEuZWRpdFRhc2soJ25ldyB0aGluZycsICdhbm90aGVyIG5ldyB0aGluZycsICduZXcgZGF0ZScsICdISUdIJyk7XG5cbi8vIFRlc3RpbmcgZnVuY3Rpb25hbGl0aWVzXG5pbmJveEZvbGRlci5hZGRUYXNrKHRhc2szKTtcbmluYm94Rm9sZGVyLmFkZFRhc2sodGFzazIpO1xuaW5ib3hGb2xkZXIuYWRkVGFzayh0YXNrMSk7XG5pbmJveEZvbGRlci5kaXNwbGF5VGFza3MoKTtcbnN1cGVyRm9sZGVyLmFkZEZvbGRlcihpbmJveEZvbGRlcik7XG5jb25zb2xlLmxvZyhzdXBlckZvbGRlcik7XG5cblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYWRkLWJ0bicpO1xuXG5jb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGlhbG9nJyk7XG5cbnRhc2tEaWFsb2cuc2hvdygpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBUaGlzIHZlcnNpb24gdXNlcyBhcnJheXNcbiAgICAvLyBsZXQgdGFza0RldGFpbHMgPSBnZXRUYXNrRm9ybUluZm8oKTtcbiAgICAvLyBjb25zdCB0ZXN0VGFzayA9IFRhc2sodGFza0RldGFpbHNbMF0sIHRhc2tEZXRhaWxzWzFdLCB0YXNrRGV0YWlsc1syXSwgdGFza0RldGFpbHNbM10pO1xuICAgIGNvbnN0IHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX0gPSBnZXRUYXNrRm9ybUluZm8oKTtcblxuICAgIGNvbnN0IHRlc3RUYXNrID0gVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGVzdFRhc2sucHJpbnRUYXNrKCkpO1xufSlcblxuZGlzcGxheUZvbGRlclRhc2tzKGluYm94Rm9sZGVyKTtcbi8vIGRpc3BsYXlGb2xkZXJzKHN1cGVyRm9sZGVyKTtcblxuY29uc3QgYWRkRm9sZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1hZGQtYnRuJyk7XG5cbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IGZvbGRlckRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItZGlhbG9nJyk7XG4gICAgLy8gZ2V0Rm9sZGVyRGlhbG9nKCk7XG4gICAgLy91c2Ugc2hvd01vZGFsKClcbiAgICBmb2xkZXJEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgZm9sZGVyU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1jb25maXJtLWJ0bicpO1xuXG4vLyBFdmVudCBsaXN0ZW5lciB0byBzdWJtaXQgZm9sZGVyIGZvcm1cbi8vIFNob3VsZCBiZSBkb25lIG9uIHRoZSBmb3JtIGluc3RlYWQgb2YgYnV0dG9uIGJ1dCBNRE4gZXhhbXBsZSB3aXRoIGRpYWxvZyBkaWQgaXQgdGhpcyB3YXlcbmZvbGRlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgY29uc3QgZm9sZGVyRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kaWFsb2cnKTtcbiAgICBcbiAgICBjb25zdCB7Zm9sZGVyVGl0bGVJbkZvcm19ID0gZ2V0Rm9sZGVyRm9ybUluZm8oKTtcblxuICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIoZm9sZGVyVGl0bGVJbkZvcm0pO1xuICAgIGFwcGVuZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIFxuICAgIHN1cGVyRm9sZGVyLmFkZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIC8vIGRpc3BsYXlGb2xkZXJzKCk7XG4gICAgY29uc29sZS5sb2coc3VwZXJGb2xkZXIuZm9sZGVycyk7XG5cbiAgICBmb2xkZXJEaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5sZXQgZm9sZGVyVGVzdCA9ICd0ZXN0JztcblxubGV0IGlkVGVzdCA9IEZvbGRlcihmb2xkZXJUZXN0KTtcbmFwcGVuZEZvbGRlcihmb2xkZXJUZXN0KTtcbmNvbnNvbGUubG9nKGlkVGVzdC5teXV1aWQpO1xuXG5jb25zdCBmb2xkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyLWJ1dHRvbicpO1xuXG5mb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdGluZyBmb2xkZXIgYnRuJyk7XG4gICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XG59KVxuXG4iXSwibmFtZXMiOlsicmFuZG9tVVVJRCIsImNyeXB0byIsImJpbmQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJFcnJvciIsImJ5dGVUb0hleCIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJzbGljZSIsIm9wdGlvbnMiLCJidWYiLCJvZmZzZXQiLCJybmRzIiwicmFuZG9tIiwiYXJyIiwidW5zYWZlU3RyaW5naWZ5IiwiVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZVN0YXRlIiwiY2hhbmdlUHJpb3JpdHkiLCJuZXdQcmlvcml0eSIsImdldENvbXBsZXRlU3RhdGUiLCJzZXRDb21wbGV0ZSIsImVkaXRUYXNrIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0R1ZURhdGUiLCJwcmludFRhc2siLCJjb25zb2xlIiwibG9nIiwiRm9sZGVyIiwibXl1dWlkIiwidGFza3MiLCJhZGRUYXNrIiwibmV3VGFza05hbWUiLCJkaXNwbGF5VGFza3MiLCJsZW5ndGgiLCJkZWxldGVUYXNrIiwidGFza05hbWUiLCJzcGxpY2UiLCJhcHBlbmRGb2xkZXIiLCJmb2xkZXJOYW1lIiwiZm9sZGVyRE9NIiwiZm9sZGVyRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9sZGVyQnRuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUZvbGRlckVsZW1lbnQiLCJzdXBlckZvbGRlciIsImZvbGRlcnMiLCJhZGRGb2xkZXIiLCJuZXdGb2xkZXJOYW1lIiwiZGVsZXRlRm9sZGVyIiwiU3VwZXJGb2xkZXIiLCJpbmJveEZvbGRlciIsInRhc2sxIiwidGFzazIiLCJ0YXNrMyIsImFkZEJ0biIsImdldEVsZW1lbnRCeUlkIiwic2hvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsImZvcm0iLCJ0YXNrVGl0bGVJbkZvcm0iLCJlbGVtZW50cyIsInRhc2tEZXNjcmlwdGlvbkluRm9ybSIsInRhc2tEdWVEYXRlSW5Gb3JtIiwidGFza1ByaW9yaXR5SW5Gb3JtIiwiZ2V0VGFza0Zvcm1JbmZvIiwidGVzdFRhc2siLCJmb3JFYWNoIiwidGFzayIsImxvY2F0aW9uIiwidGFza0RPTSIsInRhc2tEaXYiLCJ0YXNrVGl0bGVJbkRpdiIsInRhc2tEZXNjcmlwdGlvbkluRGl2IiwidGFza0R1ZURhdGVJbkRpdiIsInRhc2tQcmlvcml0eUluRGl2IiwiY3JlYXRlVGFza0VsZW1lbnQiLCJhcHBlbmRUYXNrIiwic2hvd01vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9sZGVyRGlhbG9nIiwiZm9sZGVyVGl0bGVJbkZvcm0iLCJmb2xkZXJGb3JtIiwiZ2V0Rm9sZGVyRm9ybUluZm8iLCJuZXdGb2xkZXIiLCJjbG9zZSIsImZvbGRlclRlc3QiLCJpZFRlc3QiLCJ0aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==