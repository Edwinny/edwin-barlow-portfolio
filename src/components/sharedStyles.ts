import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

interface ComponentWrapperProps {
  height?: string;
}

interface ColumnLayoutProps {
  reverseColumns?: boolean;
}

export const ComponentWrapper = styled.div<ComponentWrapperProps>`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  background-color: white;

  @media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.sml}) {
    min-height: ${(props) => props.height ?? '78vh'};
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    min-height: ${(props) => props.height ?? '70vh'};
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    align-self: center;
    padding: 1rem 1rem;
    margin: 0 1rem 5rem 0;
    transition: all 0.5s ease;
    outline: none;
    box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.4);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: solid 2px #858585;
  }
`;

export const ColumnLayout = styled.div<ColumnLayoutProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.sml}) {
    ${({ reverseColumns }) =>
      reverseColumns ? `flex-direction: column-reverse;` : `flex-direction: column;`}
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  width: 90%;
  margin: 3rem 2rem;

  @media screen and (min-device-width: ${breakpoints.sm}) and (max-device-width: ${breakpoints.sml}) {
    text-align: -moz-center;
    text-align: -webkit-center;
    width: 60%;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    margin: 0 2rem;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    min-width: 500px;
  }
`;
