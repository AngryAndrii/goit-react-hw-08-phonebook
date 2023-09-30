import { StyledSection } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};
