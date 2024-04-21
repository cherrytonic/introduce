// 공통으로 사용할 함수 정의
function smoothScroll(targetPosition, duration = 730) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('.start-icon').forEach(function(startIcon) {
  startIcon.addEventListener('click', function() {
    const currentPosition = window.pageYOffset;
    const targetPosition = currentPosition + 730;
    smoothScroll(targetPosition);
  });
});

document.getElementById('yes').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});

document.getElementById('info').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-2').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-3').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-4').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-5').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-6').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('next-icon-7').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});
document.getElementById('end').addEventListener('click', function() {
  const currentPosition = window.pageYOffset;
  const targetPosition = currentPosition + 730;
  smoothScroll(targetPosition);
});