function startAnimation() {
  anime({
    targets: "#animation-box",
    keyframes: [
      {
        translateX: 580,
        translateY: 0,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%']
      },
      {
        translateX: 580,
        translateY: 280,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%']
      },
      {
        translateX: 0,
        translateY: 280,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%']
      },
      {
        translateX: 0,
        translateY: 0,
        backgroundColor: "#f00",
        borderRadius: ['0%', '50%']
      }
    ],
    duration: 2000,
    easing: "steps(10)"
  });
}
