import "./styles.css";

const asteroids = (rocksArr) => {
  let rocks = [...rocksArr];
  let left = 0,
    right = 0;
  for (let i = 0; i < rocks.length; i++) {
    if (rocks[i] > 0) right++;
    else left++;
  }
  if (rocks[0] < 0) left--;
  if (rocks[rocks.length - 1] > 0) right--;
  while (left > 0 && right > 0) {
    for (let i = 0; i < rocks.length - 1; i++) {
      if (rocks[i] > 0 && rocks[i + 1] < 0) {
        if (rocks[i] > rocks[i + 1]) {
          rocks[i] = 0;
          right--;
        } else {
          rocks[i + 1] = 0;
          left--;
        }
      }
    }
    rocks = rocks.filter((x) => x !== 0);
  }
  return rocks.join(",");
};

document.getElementById("app").innerHTML = `
<a href="https://buttondown.email/cassidoo/archive/6aa8bf94-a74e-456d-881d-4ae8fc151a0a"><h1>Cassidoo's Asteroid quiz</h1></a>
<hr />
${asteroids([5, -6, -7, 8])}
`;
