import { styled } from 'styled-components';

interface ITypography {
  heading1: IFont;
  heading2: IFont;
  heading3: IFont;
  heading4: IFont;

  subtitle1: IFont;
  subtitle2: IFont;

  body1: IFont;
  body2: IFont;
  'body2-long': IFont;
  body3: IFont;
  'body3-long': IFont;

  caption: IFont;
  overline: IFont;

  label1: IFont;
  label2: IFont;
}

interface IFont {
  size: string;
  weight: number;
  lineHeight: string;
}

const typo: ITypography = {
  heading1: {
    size: '24px',
    weight: 700,
    lineHeight: '32px',
  },
  heading2: {
    size: '22px',
    weight: 700,
    lineHeight: '30px',
  },
  heading3: {
    size: '20px',
    weight: 700,
    lineHeight: '28px',
  },
  heading4: {
    size: '18px',
    weight: 700,
    lineHeight: '26px',
  },
  subtitle1: {
    size: '16px',
    weight: 700,
    lineHeight: '24px',
  },
  subtitle2: {
    size: '14px',
    weight: 700,
    lineHeight: '22px',
  },
  body1: {
    size: '18px',
    weight: 400,
    lineHeight: '26px',
  },
  body2: {
    size: '16px',
    weight: 400,
    lineHeight: '24px',
  },
  'body2-long': {
    size: '16px',
    weight: 400,
    lineHeight: '26px',
  },
  body3: {
    size: '14px',
    weight: 400,
    lineHeight: '22px',
  },
  'body3-long': {
    size: '14px',
    weight: 400,
    lineHeight: '24px',
  },
  caption: {
    size: '12px',
    weight: 500,
    lineHeight: '20px',
  },
  overline: {
    size: '10px',
    weight: 500,
    lineHeight: '18px',
  },
  label1: {
    size: '10px',
    weight: 500,
    lineHeight: '18px',
  },
  label2: {
    size: '11px',
    weight: 500,
    lineHeight: '16px',
  },
};

const Typography = styled.div<{ level: string }>`
  /* font-family: Spoqa Han Sans Neo; */
  font-style: normal;

  font-size: ${(props) => typo[props.level as keyof ITypography].size};
  font-weight: ${(props) => typo[props.level as keyof ITypography].weight};
  line-height: ${(props) => typo[props.level as keyof ITypography].lineHeight};
`;

export default Typography;
