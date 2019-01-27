// (() => {
//   const el = document.getElementById('version');
//   const s = new Date(1988, 8, 27);
//   const renderVersion = () => {
//     const n = new Date();
//     const d = n - s;
//     const yrs = d / 31556900000;
//     const a = yrs
//       .toFixed(8)
//       .toString()
//       .split('.');
//     const yr = a[0];
//     const ms = a[1];
//     requestAnimationFrame(() => (el.innerHTML = `${yr}.${ms}`));
//   };
//   setInterval(renderVersion, 100);
// })();
