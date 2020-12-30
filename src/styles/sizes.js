export default {
  down(size) {
    const sizes = {
      xxsmall: "376px",
      xsmall: "576px",
      small: "768px",
      medium: "992px",
      large: "1200px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
