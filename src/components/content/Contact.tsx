import React from 'react';
import styled from 'styled-components';

import { ComponentWrapper, ColumnLayout, Thumbnail } from 'components/sharedStyles';
import ContacttIllustration from 'assets/illustrations/contact.svg';
import { responsiveFont } from 'styles/utils';
import { breakpoints } from 'styles/variables';

interface FormInputProps {
  error?: boolean;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 50%;
    margin-bottom: 0;
  }
`;

const style = `
  border: 2px solid #666666;
  margin: 0.5em 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  transition: 0.3s;
`;

const Input = styled.input<FormInputProps>`
  ${style}

  ${({ error }) => error && `border-color: #ff4136;`}

  &::placeholder {
    color: #a7a7a7;
  }
`;

const TextArea = styled.textarea`
  ${style}
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
  margin: 0.5rem 0;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 300px;
  }
`;

const Description = styled.div`
  ${responsiveFont(16, 18)}
  font-weight: 300;
  line-height: ${26 / 16};
`;

export const Contact = () => (
  <ComponentWrapper id="Contact" height="40vh">
    <ColumnLayout reverseColumns={true}>
      <Thumbnail>
        <img src={ContacttIllustration} alt="Edwin Barlow, software architect" />
      </Thumbnail>

      <Form name="ontact" method="POST" data-netlify="true">
        <Description>
          Organically grow the holistic world view of disruptive innovation via workplace
          diversity and empowerment
        </Description>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required rows={10} />
        <Button type="submit">Send</Button>
      </Form>
    </ColumnLayout>
  </ComponentWrapper>
);
