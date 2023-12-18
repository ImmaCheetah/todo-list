(()=>{"use strict";const e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let t;const n=new Uint8Array(16);function o(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(n)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));const r=function(t,n,r){if(e.randomUUID&&!n&&!t)return e.randomUUID();const l=(t=t||{}).random||(t.rng||o)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,n){r=r||0;for(let e=0;e<16;++e)n[r+e]=l[e];return n}return function(e,t=0){return d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]}(l)};function l(e,t,n,o){let d=!1;e=e.toString(),t=t.toString();const r=e=>{o=e};return{get title(){return e},get description(){return t},get dueDate(){return n},get priority(){return o},getCompleteState:()=>d,setComplete:()=>{d=!0},changePriority:r,editTask:(o,d,l,i)=>{e=o,t=d,n=l,r(i)},printTask:()=>{console.log(`Task title - ${e}, Desc - ${t}, Date - ${n}, Priority - ${o}`)}}}function i(e){let t=r(),n=[];return{title:e,tasks:n,myuuid:t,addTask:e=>{n.push(e)},displayTasks:()=>{for(let e=0;e<n.length;e++)console.log(`Task ${e} - ${n[e].title}, ${n[e].dueDate}, ${n[e].priority}`)},deleteTask:e=>{n.splice(e,1)}}}const s=function(){let e=[];return{folders:e,addFolder:t=>{e.push(t)},deleteFolder:t=>{e.splice(t,1)}}}(),a=i("Inbox");console.log("Inbox Folder ID is "+a.myuuid);const c=l("chores","wash dishes","nov 23","high"),u=l("movies","avatar","nov 29","med"),m=l("coding","todo list","dec 10","low");c.editTask("new thing","another new thing","new date","HIGH"),a.addTask(m),a.addTask(u),a.addTask(c),a.displayTasks(),s.addFolder(a),console.log(s);const p=document.getElementById("task-add-btn");document.getElementById("task-dialog").show(),p.addEventListener("click",(function(){const{taskTitle:e,taskDescription:t,taskDueDate:n,taskPriority:o}=function(){const e=document.getElementById("main-form"),t=e.elements["task-title"],n=e.elements["task-description"],o=e.elements["task-due-date"],d=e.elements["task-priority"];return{taskTitle:t.value,taskDescription:n.value,taskDueDate:o.value,taskPriority:d.value}}(),d=l(e,t,n,o);console.log(d.printTask())})),a.tasks.forEach((e=>{!function(e,t){let n=function(e){const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p");return t.classList.add("task-div"),n.textContent=e.title,o.textContent=e.description,d.textContent=e.dueDate,r.textContent=e.priority,t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(r),t}(e);document.getElementById(t).appendChild(n)}(e,["task-container"])})),document.getElementById("folder-add-btn").addEventListener("click",(function(){document.getElementById("folder-dialog").showModal()})),document.getElementById("folder-confirm-btn").addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("folder-dialog"),{folderTitleInForm:n}=function(){const e=document.getElementById("folder-form");return{folderForm:e,folderTitleInForm:e.elements["folder-title"].value}}();let o=i(n);(function(e){let t=function(e){const t=document.querySelector(".folders-div"),n=document.createElement("button");return n.classList.add("folder-button"),n.textContent=e.title,n.value=e.myuuid,t.appendChild(n),n.addEventListener("click",(function(){console.log("testing folder btn"),console.log(this.value)})),t}(e);document.querySelector(".sidebar").appendChild(t)})(o),s.addFolder(o),console.log(s.folders),t.close()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQVlELGtCQUZNQyxFQUFXNUIsU0FBUyxnQkFBZ0JJLE1BR2xFLENEdEJnQ3lCLEdBRTVCLElBQUlDLEVBQVk5RCxFQUFPMkQsSUNEM0IsU0FBc0I1QyxHQUNsQixJQUFJZ0QsRUF0QlIsU0FBNkJoRCxHQUN6QixNQUFNaUQsRUFBWTFDLFNBQVMyQyxjQUFjLGdCQUNuQ0MsRUFBWTVDLFNBQVNzQixjQUFjLFVBY3pDLE9BWEFzQixFQUFVakIsVUFBVUMsSUFBSSxpQkFDeEJnQixFQUFVZixZQUFjcEMsRUFBVy9CLE1BQ25Da0YsRUFBVTlCLE1BQVFyQixFQUFXZCxPQUU3QitELEVBQVVaLFlBQVljLEdBRXRCQSxFQUFVekMsaUJBQWlCLFNBQVMsV0FDaEMzQixRQUFRQyxJQUFJLHNCQUNaRCxRQUFRQyxJQUFJb0UsS0FBSy9CLE1BQ3JCLElBRU80QixDQUNYLENBS29CSSxDQUFvQnJELEdBRWJPLFNBQVMyQyxjQUFjLFlBQy9CYixZQUFZVyxFQUMvQixFREhJTSxDQUFhUCxHQUVicEQsRUFBWUUsVUFBVWtELEdBQ3RCaEUsUUFBUUMsSUFBSVcsRUFBWUMsU0FFeEIrQyxFQUFhWSxPQUNqQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY29tcGxldGVTdGF0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0Q29tcGxldGVTdGF0ZSA9ICgpID0+IGNvbXBsZXRlU3RhdGU7XG5cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgY29tcGxldGVTdGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRpdGxlID0gdGl0bGUudG9TdHJpbmcoKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmludFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIHRpdGxlIC0gJHt0aXRsZX0sIERlc2MgLSAke2Rlc2NyaXB0aW9ufSwgRGF0ZSAtICR7ZHVlRGF0ZX0sIFByaW9yaXR5IC0gJHtwcmlvcml0eX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZURhdGUoKSB7cmV0dXJuIGR1ZURhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgICAgIGdldENvbXBsZXRlU3RhdGUsXG4gICAgICAgIHNldENvbXBsZXRlLCBcbiAgICAgICAgY2hhbmdlUHJpb3JpdHksXG4gICAgICAgIGVkaXRUYXNrLFxuICAgICAgICBwcmludFRhc2tcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gRm9sZGVyKHRpdGxlKSB7XG4gICAgXG5cbiAgICBsZXQgbXl1dWlkID0gdXVpZHY0KCk7XG4gICAgbGV0IHRhc2tzID0gW107XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2tOYW1lKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2gobmV3VGFza05hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhc2sgJHtpfSAtICR7dGFza3NbaV0udGl0bGV9LCAke3Rhc2tzW2ldLmR1ZURhdGV9LCAke3Rhc2tzW2ldLnByaW9yaXR5fWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgICAgICB0YXNrcy5zcGxpY2UodGFza05hbWUsIDEpO1xuICAgIH1cblxuICAgIFxuICAgIHJldHVybiB7dGl0bGUsIHRhc2tzLCBteXV1aWQsIGFkZFRhc2ssIGRpc3BsYXlUYXNrcywgZGVsZXRlVGFza307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdXBlckZvbGRlcigpIHtcbiAgICBsZXQgZm9sZGVycyA9IFtdXG5cbiAgICBjb25zdCBhZGRGb2xkZXIgPSAobmV3Rm9sZGVyTmFtZSkgPT4ge1xuICAgICAgICBmb2xkZXJzLnB1c2gobmV3Rm9sZGVyTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlRm9sZGVyID0gKGZvbGRlck5hbWUpID0+IHtcbiAgICAgICAgZm9sZGVycy5zcGxpY2UoZm9sZGVyTmFtZSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtmb2xkZXJzLCBhZGRGb2xkZXIsIGRlbGV0ZUZvbGRlcn1cbn0iLCJpbXBvcnQge1xuICAgIFRhc2ssXG4gICAgRm9sZGVyLFxuICAgIFN1cGVyRm9sZGVyXG59IGZyb20gJy4vbW9kdWxlcy9mYWN0b3JpZXMuanMnO1xuXG5pbXBvcnQge1xuICAgIGdldFRhc2tGb3JtSW5mbyxcbiAgICBnZXRGb2xkZXJEaWFsb2csXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgY3JlYXRlVGFza0VsZW1lbnQsXG4gICAgY3JlYXRlRm9sZGVyRWxlbWVudCxcbiAgICBhcHBlbmRGb2xkZXIsXG4gICAgZGlzcGxheUZvbGRlclRhc2tzLFxuICAgIGFwcGVuZFRhc2ssXG4gICAgZGlzcGxheUZvbGRlcnNcbn0gZnJvbSAnLi9tb2R1bGVzL2RvbS5qcyc7XG5cbi8vU3VwZXIgRm9sZGVyIFxuY29uc3Qgc3VwZXJGb2xkZXIgPSBTdXBlckZvbGRlcigpO1xuXG4vLyBNYWluIEZvbGRlciB0aGF0IHRhc2tzIHdpbGwgZ28gaW50b1xuY29uc3QgaW5ib3hGb2xkZXIgPSBGb2xkZXIoJ0luYm94Jyk7XG5jb25zb2xlLmxvZyhcIkluYm94IEZvbGRlciBJRCBpcyBcIiArIGluYm94Rm9sZGVyLm15dXVpZCk7XG5cbi8vIFRlc3QgdGFza3NcbmNvbnN0IHRhc2sxID0gVGFzaygnY2hvcmVzJywgJ3dhc2ggZGlzaGVzJywgJ25vdiAyMycsICdoaWdoJyk7XG5jb25zdCB0YXNrMiA9IFRhc2soJ21vdmllcycsICdhdmF0YXInLCAnbm92IDI5JywgJ21lZCcpO1xuY29uc3QgdGFzazMgPSBUYXNrKCdjb2RpbmcnLCAndG9kbyBsaXN0JywgJ2RlYyAxMCcsICdsb3cnKTtcblxudGFzazEuZWRpdFRhc2soJ25ldyB0aGluZycsICdhbm90aGVyIG5ldyB0aGluZycsICduZXcgZGF0ZScsICdISUdIJyk7XG5cbi8vIFRlc3RpbmcgZnVuY3Rpb25hbGl0aWVzXG5pbmJveEZvbGRlci5hZGRUYXNrKHRhc2szKTtcbmluYm94Rm9sZGVyLmFkZFRhc2sodGFzazIpO1xuaW5ib3hGb2xkZXIuYWRkVGFzayh0YXNrMSk7XG5pbmJveEZvbGRlci5kaXNwbGF5VGFza3MoKTtcbnN1cGVyRm9sZGVyLmFkZEZvbGRlcihpbmJveEZvbGRlcik7XG5jb25zb2xlLmxvZyhzdXBlckZvbGRlcik7XG5cblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYWRkLWJ0bicpO1xuXG5jb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGlhbG9nJyk7XG5cbnRhc2tEaWFsb2cuc2hvdygpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBUaGlzIHZlcnNpb24gdXNlcyBhcnJheXNcbiAgICAvLyBsZXQgdGFza0RldGFpbHMgPSBnZXRUYXNrRm9ybUluZm8oKTtcbiAgICAvLyBjb25zdCB0ZXN0VGFzayA9IFRhc2sodGFza0RldGFpbHNbMF0sIHRhc2tEZXRhaWxzWzFdLCB0YXNrRGV0YWlsc1syXSwgdGFza0RldGFpbHNbM10pO1xuICAgIGNvbnN0IHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX0gPSBnZXRUYXNrRm9ybUluZm8oKTtcblxuICAgIGNvbnN0IHRlc3RUYXNrID0gVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGVzdFRhc2sucHJpbnRUYXNrKCkpO1xufSlcblxuZGlzcGxheUZvbGRlclRhc2tzKGluYm94Rm9sZGVyKTtcbi8vIGRpc3BsYXlGb2xkZXJzKHN1cGVyRm9sZGVyKTtcblxuY29uc3QgYWRkRm9sZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1hZGQtYnRuJyk7XG5cbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IGZvbGRlckRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItZGlhbG9nJyk7XG4gICAgLy8gZ2V0Rm9sZGVyRGlhbG9nKCk7XG4gICAgLy91c2Ugc2hvd01vZGFsKClcbiAgICBmb2xkZXJEaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgZm9sZGVyU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1jb25maXJtLWJ0bicpO1xuXG4vLyBFdmVudCBsaXN0ZW5lciB0byBzdWJtaXQgZm9sZGVyIGZvcm1cbi8vIFNob3VsZCBiZSBkb25lIG9uIHRoZSBmb3JtIGluc3RlYWQgb2YgYnV0dG9uIGJ1dCBNRE4gZXhhbXBsZSB3aXRoIGRpYWxvZyBkaWQgaXQgdGhpcyB3YXlcbmZvbGRlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgY29uc3QgZm9sZGVyRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kaWFsb2cnKTtcbiAgICBjb25zdCB7Zm9sZGVyVGl0bGVJbkZvcm19ID0gZ2V0Rm9sZGVyRm9ybUluZm8oKTtcblxuICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIoZm9sZGVyVGl0bGVJbkZvcm0pO1xuICAgIGFwcGVuZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIFxuICAgIHN1cGVyRm9sZGVyLmFkZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIGNvbnNvbGUubG9nKHN1cGVyRm9sZGVyLmZvbGRlcnMpO1xuXG4gICAgZm9sZGVyRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG4vLyBjb25zdCBmb2xkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyLWJ1dHRvbicpO1xuXG4vLyBmb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zb2xlLmxvZygndGVzdGluZyBmb2xkZXIgYnRuJyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9Gb2xkZXJCdXR0b24oKSB7XG5cbi8vIH0iLCIvLyBDcmVhdGUgYWxsIGVsZW1lbnRzIGZvciBlYWNoIHRhc2sgcHJvcGVydHkgYW5kIGNoYW5nZSB0ZXh0IGNvbnRlbnQgdG8gY29ycmVzcG9uZGluZyB2YWx1ZVxuLy8gVGhlbiBhZGQgdGhlbSB0byBhIG1haW4gZGl2IGFuZCByZXR1cm5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2tOYW1lKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuICAgIHRhc2tUaXRsZUluRGl2LnRleHRDb250ZW50ID0gdGFza05hbWUudGl0bGU7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5EaXYudGV4dENvbnRlbnQgPSB0YXNrTmFtZS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRHVlRGF0ZUluRGl2LnRleHRDb250ZW50ID0gdGFza05hbWUuZHVlRGF0ZTtcbiAgICB0YXNrUHJpb3JpdHlJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnByaW9yaXR5O1xuICAgIFxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5EaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5EaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVJbkRpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlJbkRpdik7XG4gICAgXG4gICAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbi8vIFRha2UgaW4gdGFzayBhbmQgd2hlcmUgdG8gYXBwZW5kXG4vLyBDcmVhdGUgdGhlIHRhc2sgdXNpbmcgY3JlYXRlVGFza0VsZW1lbnQgYW5kIGFzc2lnbiB0byB2YXJpYWJsZVxuLy8gVGFyZ2V0IGVsZW1lbnQgdG8gYXBwZW5kIHRvIGFuZCBhcHBlbmRcbmZ1bmN0aW9uIGFwcGVuZFRhc2sodGFza05hbWUsIGxvY2F0aW9uKSB7XG4gICAgbGV0IHRhc2tET00gPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxvY2F0aW9uKTtcbiAgICBsb2NhdGlvbkRPTS5hcHBlbmRDaGlsZCh0YXNrRE9NKTtcbn1cblxuLy8gVGFrZSBpbiBmb2xkZXIgbmFtZSB0aGVuIGxvb3AgdGhyb3VnaCB0YXNrcyBpbnNpZGUgZm9sZGVyIHRvIGFwcGVuZCB0byBzY3JlZW5cbmZ1bmN0aW9uIGRpc3BsYXlGb2xkZXJUYXNrcyhmb2xkZXJOYW1lKSB7XG4gICAgZm9sZGVyTmFtZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBhcHBlbmRUYXNrKHRhc2ssIFsndGFzay1jb250YWluZXInXSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGb3JtSW5mbygpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tZm9ybScpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlSW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay10aXRsZSddO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stZHVlLWRhdGUnXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLXByaW9yaXR5J107XG4gICAgXG4gICAgbGV0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZUluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uSW5Gb3JtLnZhbHVlO1xuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlSW5Gb3JtLnZhbHVlO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlJbkZvcm0udmFsdWU7XG5cbiAgICByZXR1cm4ge3Rhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5fTtcbn0gXG5cbi8vIENyZWF0ZSBidXR0b24gdG8gaG9sZCBmb2xkZXIgYW5kIHRpdGxlXG4vLyBBZGQgdGl0bGUgdG8gZGl2IGFuZCByZXR1cm5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlckVsZW1lbnQoZm9sZGVyTmFtZSkge1xuICAgIGNvbnN0IGZvbGRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzLWRpdicpO1xuICAgIGNvbnN0IGZvbGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy8gZm9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvbGRlci1kaXYnKTtcbiAgICBmb2xkZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLWJ1dHRvbicpO1xuICAgIGZvbGRlckJ0bi50ZXh0Q29udGVudCA9IGZvbGRlck5hbWUudGl0bGU7XG4gICAgZm9sZGVyQnRuLnZhbHVlID0gZm9sZGVyTmFtZS5teXV1aWQ7XG5cbiAgICBmb2xkZXJEaXYuYXBwZW5kQ2hpbGQoZm9sZGVyQnRuKTtcblxuICAgIGZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdGluZyBmb2xkZXIgYnRuJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZm9sZGVyRGl2O1xufVxuXG4vLyBUYWtlIGluIGZvbGRlciBuYW1lIGFuZCBjcmVhdGUgZm9sZGVyIHVzaW5nIGZ1bmN0aW9uXG4vLyBBcHBlbmQgdG8gc2lkZWJhclxuZnVuY3Rpb24gYXBwZW5kRm9sZGVyKGZvbGRlck5hbWUpIHtcbiAgICBsZXQgZm9sZGVyRE9NID0gY3JlYXRlRm9sZGVyRWxlbWVudChmb2xkZXJOYW1lKTtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyRm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhckZvbGRlcnMuYXBwZW5kQ2hpbGQoZm9sZGVyRE9NKTtcbn1cblxuLy8gVGFrZSBpbiBzdXBlciBmb2xkZXIgbmFtZSB0byBsb29wIHRocm91Z2ggZWFjaCBmb2xkZXIgYW5kIGFwcGVuZCB0byBzaWRlYmFyXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVycyhzdXBlckZvbGRlck5hbWUpIHtcbiAgICAvLyBjbGVhclNpZGViYXIoKTtcbiAgICBzdXBlckZvbGRlck5hbWUuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGFwcGVuZEZvbGRlcihmb2xkZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGb2xkZXJGb3JtSW5mbygpIHtcbiAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1mb3JtJyk7XG5cbiAgICBjb25zdCBmb2xkZXJUaXRsZUluRm9ybSA9IGZvbGRlckZvcm0uZWxlbWVudHNbJ2ZvbGRlci10aXRsZSddLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtmb2xkZXJGb3JtLCBmb2xkZXJUaXRsZUluRm9ybX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2lkZWJhcigpIHtcbiAgICBjb25zdCBmb2xkZXJzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMtZGl2Jyk7XG4gICAgZm9sZGVyc0Rpdi50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5cblxuICAgIFxuLy8gYWRkIGZvbGRlciBidXR0b25cbi8vIC0gd2hlbiBjbGlja2VkLCBjcmVhdGUgZGlhbG9nIG1vZGFsXG4vLyAtIGdldCBpbnB1dCBmcm9tIHVzZXJcbi8vIC0gc2F2ZSBpbnB1dCB2YWx1ZSB3aGVuIGFkZCBpcyBjbGlja2VkXG4vLyAtIHVzZSBzYXZlZCB2YWx1ZSB0byBjcmVhdGUgZm9sZGVyIG9uIHNpZGViYXJcblxuXG5cblxuZXhwb3J0IHtcbiAgICBnZXRUYXNrRm9ybUluZm8sXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgY3JlYXRlVGFza0VsZW1lbnQsXG4gICAgY3JlYXRlRm9sZGVyRWxlbWVudCxcbiAgICBhcHBlbmRGb2xkZXIsXG4gICAgZGlzcGxheUZvbGRlclRhc2tzLFxuICAgIGFwcGVuZFRhc2ssXG4gICAgZGlzcGxheUZvbGRlcnNcbn0iXSwibmFtZXMiOlsicmFuZG9tVVVJRCIsImNyeXB0byIsImJpbmQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJFcnJvciIsImJ5dGVUb0hleCIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJzbGljZSIsIm9wdGlvbnMiLCJidWYiLCJvZmZzZXQiLCJybmRzIiwicmFuZG9tIiwiYXJyIiwidW5zYWZlU3RyaW5naWZ5IiwiVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZVN0YXRlIiwiY2hhbmdlUHJpb3JpdHkiLCJuZXdQcmlvcml0eSIsImdldENvbXBsZXRlU3RhdGUiLCJzZXRDb21wbGV0ZSIsImVkaXRUYXNrIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0R1ZURhdGUiLCJwcmludFRhc2siLCJjb25zb2xlIiwibG9nIiwiRm9sZGVyIiwibXl1dWlkIiwidGFza3MiLCJhZGRUYXNrIiwibmV3VGFza05hbWUiLCJkaXNwbGF5VGFza3MiLCJsZW5ndGgiLCJkZWxldGVUYXNrIiwidGFza05hbWUiLCJzcGxpY2UiLCJzdXBlckZvbGRlciIsImZvbGRlcnMiLCJhZGRGb2xkZXIiLCJuZXdGb2xkZXJOYW1lIiwiZGVsZXRlRm9sZGVyIiwiZm9sZGVyTmFtZSIsIlN1cGVyRm9sZGVyIiwiaW5ib3hGb2xkZXIiLCJ0YXNrMSIsInRhc2syIiwidGFzazMiLCJhZGRCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRHVlRGF0ZSIsInRhc2tQcmlvcml0eSIsImZvcm0iLCJ0YXNrVGl0bGVJbkZvcm0iLCJlbGVtZW50cyIsInRhc2tEZXNjcmlwdGlvbkluRm9ybSIsInRhc2tEdWVEYXRlSW5Gb3JtIiwidGFza1ByaW9yaXR5SW5Gb3JtIiwidmFsdWUiLCJnZXRUYXNrRm9ybUluZm8iLCJ0ZXN0VGFzayIsImZvckVhY2giLCJ0YXNrIiwibG9jYXRpb24iLCJ0YXNrRE9NIiwidGFza0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJ0YXNrVGl0bGVJbkRpdiIsInRhc2tEZXNjcmlwdGlvbkluRGl2IiwidGFza0R1ZURhdGVJbkRpdiIsInRhc2tQcmlvcml0eUluRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRhc2tFbGVtZW50IiwiYXBwZW5kVGFzayIsInNob3dNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvbGRlckRpYWxvZyIsImZvbGRlclRpdGxlSW5Gb3JtIiwiZm9sZGVyRm9ybSIsImdldEZvbGRlckZvcm1JbmZvIiwibmV3Rm9sZGVyIiwiZm9sZGVyRE9NIiwiZm9sZGVyRGl2IiwicXVlcnlTZWxlY3RvciIsImZvbGRlckJ0biIsInRoaXMiLCJjcmVhdGVGb2xkZXJFbGVtZW50IiwiYXBwZW5kRm9sZGVyIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9