document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".mouse-cursor");
  const ring = document.querySelector(".mouse-cursor-ring");

  // Mueve todos los cursores al mismo lugar sin desplazamiento extra
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});
