const { PI } = Math;

const area = (radius) => {
  return PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * PI * radius;
};

// export default area;
module.exports = {
  area,
  circumference,
};
