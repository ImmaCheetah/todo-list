(()=>{function t(t,e,o,n){t=t.toString(),e=e.toString();const i=t=>{n=t};return{get title(){return t},get description(){return e},get dueDate(){return o},get priority(){return n},changePriority:i,editTask:(n,r,s,a)=>{t=n,e=r,o=s,i(a)},printTask:()=>{console.log(`Task title - ${t}, Desc - ${e}, Date - ${o}, Priority - ${n}`)}}}function e(t){let e=[];return{title:t,tasks:e,addTask:t=>{e.push(t)},displayTasks:()=>{for(let t=0;t<e.length;t++)console.log(`Task ${t} - ${e[t].title}, ${e[t].dueDate}, ${e[t].priority}`)},deleteTask:t=>{e.splice(t,1)}}}e("Inbox");const o=t("chores","wash dishes","nov 23","high"),n=(t("movies","avatar","nov 29","med"),t("coding","todo list","dec 10","low"),e("project 1"));e("project 2"),n.addTask(o),o.editTask("new thing","another new thing","new date","HIGH"),console.log(n.tasks[0].printTask())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFDQSxTQUFTQSxFQUFLQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUV2Q0gsRUFBUUEsRUFBTUksV0FDZEgsRUFBY0EsRUFBWUcsV0FFMUIsTUFBTUMsRUFBa0JDLElBQ3BCSCxFQUFXRyxDQUFXLEVBYzFCLE1BQU8sQ0FDSCxTQUFJTixHQUFTLE9BQU9BLENBQUssRUFDekIsZUFBSUMsR0FBZSxPQUFPQSxDQUFXLEVBQ3JDLFdBQUlDLEdBQVcsT0FBT0EsQ0FBTyxFQUM3QixZQUFJQyxHQUFZLE9BQU9BLENBQVMsRUFDaENFLGlCQUNBRSxTQWpCYSxDQUFDQyxFQUFVQyxFQUFnQkMsRUFBWUosS0FDcEROLEVBQVFRLEVBQ1JQLEVBQWNRLEVBQ2RQLEVBQVVRLEVBQ1ZMLEVBQWVDLEVBQVksRUFjM0JLLFVBWGMsS0FDZEMsUUFBUUMsSUFBSSxnQkFBZ0JiLGFBQWlCQyxhQUF1QkMsaUJBQXVCQyxJQUFXLEVBWTlHLENBR0EsU0FBU1csRUFBT2QsR0FDWixJQUFJZSxFQUFRLEdBaUJaLE1BQU8sQ0FBQ2YsUUFBT2UsUUFBT0MsUUFmTEMsSUFDYkYsRUFBTUcsS0FBS0QsRUFBWSxFQWNJRSxhQVhWLEtBQ2pCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJTCxFQUFNTSxPQUFRRCxJQUM5QlIsUUFBUUMsSUFBSSxRQUFRTyxPQUFPTCxFQUFNSyxHQUFHcEIsVUFBVWUsRUFBTUssR0FBR2xCLFlBQVlhLEVBQU1LLEdBQUdqQixXQUNoRixFQVF5Q21CLFdBTHpCQyxJQUNoQlIsRUFBTVMsT0FBT0QsRUFBTyxFQUFFLEVBSzlCLENBS21CVCxFQUFPLFNBQTFCLE1BRU1XLEVBQVExQixFQUFLLFNBQVUsY0FBZSxTQUFVLFFBSWhEMkIsR0FIUTNCLEVBQUssU0FBVSxTQUFVLFNBQVUsT0FDbkNBLEVBQUssU0FBVSxZQUFhLFNBQVUsT0FFdENlLEVBQU8sY0FDUEEsRUFBTyxhQUVyQlksRUFBTVYsUUFBUVMsR0FDZEEsRUFBTWxCLFNBQVMsWUFBYSxvQkFBcUIsV0FBWSxRQUM3REssUUFBUUMsSUFBSWEsRUFBTVgsTUFBTSxHQUFHSixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9kbyB0YXNrXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIHRpdGxlID0gdGl0bGUudG9TdHJpbmcoKTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmludFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIHRpdGxlIC0gJHt0aXRsZX0sIERlc2MgLSAke2Rlc2NyaXB0aW9ufSwgRGF0ZSAtICR7ZHVlRGF0ZX0sIFByaW9yaXR5IC0gJHtwcmlvcml0eX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSwgXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LCBcbiAgICAgICAgZ2V0IGR1ZURhdGUoKSB7cmV0dXJuIGR1ZURhdGV9LCBcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eTt9LCBcbiAgICAgICAgY2hhbmdlUHJpb3JpdHksXG4gICAgICAgIGVkaXRUYXNrLFxuICAgICAgICBwcmludFRhc2tcbiAgICB9O1xufTtcblxuXG5mdW5jdGlvbiBGb2xkZXIodGl0bGUpIHtcbiAgICBsZXQgdGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFza05hbWUpID0+IHtcbiAgICAgICAgdGFza3MucHVzaChuZXdUYXNrTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGFzayAke2l9IC0gJHt0YXNrc1tpXS50aXRsZX0sICR7dGFza3NbaV0uZHVlRGF0ZX0sICR7dGFza3NbaV0ucHJpb3JpdHl9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgdGFza3MsIGFkZFRhc2ssIGRpc3BsYXlUYXNrcywgZGVsZXRlVGFza307XG59XG5cblxuXG5cbmNvbnN0IG1haW5Gb2xkZXIgPSBGb2xkZXIoJ0luYm94Jyk7XG5cbmNvbnN0IHRhc2sxID0gVGFzaygnY2hvcmVzJywgJ3dhc2ggZGlzaGVzJywgJ25vdiAyMycsICdoaWdoJyk7XG5jb25zdCB0YXNrMiA9IFRhc2soJ21vdmllcycsICdhdmF0YXInLCAnbm92IDI5JywgJ21lZCcpO1xuY29uc3QgdGFzazMgPSBUYXNrKCdjb2RpbmcnLCAndG9kbyBsaXN0JywgJ2RlYyAxMCcsICdsb3cnKTtcblxuY29uc3QgcHJvajEgPSBGb2xkZXIoXCJwcm9qZWN0IDFcIik7XG5jb25zdCBwcm9qMiA9IEZvbGRlcigncHJvamVjdCAyJyk7XG5cbnByb2oxLmFkZFRhc2sodGFzazEpO1xudGFzazEuZWRpdFRhc2soJ25ldyB0aGluZycsICdhbm90aGVyIG5ldyB0aGluZycsICduZXcgZGF0ZScsICdISUdIJyk7XG5jb25zb2xlLmxvZyhwcm9qMS50YXNrc1swXS5wcmludFRhc2soKSk7XG5cblxuLy8gcHJvajEuYWRkVGFzayh0YXNrMik7XG4vLyBwcm9qMS5kZWxldGVUYXNrKDEpXG4vLyBtYWluRm9sZGVyLmFkZFRhc2sodGFzazMpO1xuLy8gY29uc29sZS5sb2cocHJvajEpO1xuLy8gY29uc29sZS5sb2cobWFpbkZvbGRlcik7XG4vLyBjb25zb2xlLmxvZyhwcm9qMS5kaXNwbGF5VGFza3MoKSk7XG5cblxuXG4vLyBmdW5jdGlvbiBQcm9qZWN0cyh0aXRsZSkge1xuLy8gICAgIHRhc2tzID0gW107XG4gICAgXG4vLyAgICAgY29uc3Qge2FkZFRhc2ssIGRpc3BsYXlUYXNrc30gPSBJbmJveCgpO1xuXG5cbiAgICBcbiAgICAvLyBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2tOYW1lKSA9PiB7XG4gICAgLy8gICAgIHByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2tOYW1lKTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgVGFzayAke2l9IC0gJHtwcm9qZWN0VGFza3NbaV0udGl0bGV9LCAke3Byb2plY3RUYXNrc1tpXS5kZXNjcmlwdGlvbn0sICR7cHJvamVjdFRhc2tzW2ldLmR1ZURhdGV9LCAke3Byb2plY3RUYXNrc1tpXS5wcmlvcml0eX1gKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0gICAgXG5cbiAgICBcbi8vICAgICByZXR1cm4ge3RpdGxlLCB0YXNrcywgYWRkVGFzaywgZGlzcGxheVRhc2tzfTtcbi8vIH0iXSwibmFtZXMiOlsiVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJ0b1N0cmluZyIsImNoYW5nZVByaW9yaXR5IiwibmV3UHJpb3JpdHkiLCJlZGl0VGFzayIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwicHJpbnRUYXNrIiwiY29uc29sZSIsImxvZyIsIkZvbGRlciIsInRhc2tzIiwiYWRkVGFzayIsIm5ld1Rhc2tOYW1lIiwicHVzaCIsImRpc3BsYXlUYXNrcyIsImkiLCJsZW5ndGgiLCJkZWxldGVUYXNrIiwiaW5kZXgiLCJzcGxpY2UiLCJ0YXNrMSIsInByb2oxIl0sInNvdXJjZVJvb3QiOiIifQ==