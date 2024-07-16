import { StyledCategoryTitle } from "./styles";

const CategoryTitle = ({ color, children }) => {
  return <StyledCategoryTitle $bgColor={color}>{children}</StyledCategoryTitle>;
};

export default CategoryTitle;
