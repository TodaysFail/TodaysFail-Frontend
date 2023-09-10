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
  'font-family': string;
  lineHeight: string;
}

const typo: ITypography = {
  heading1: {
    size: '24px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '32px',
  },
  heading2: {
    size: '22px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '30px',
  },
  heading3: {
    size: '20px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '28px',
  },
  heading4: {
    size: '18px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '26px',
  },
  subtitle1: {
    size: '16px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '24px',
  },
  subtitle2: {
    size: '14px',
    'font-family': 'SpoqaHanSansNeo-Bold',
    lineHeight: '22px',
  },
  body1: {
    size: '18px',
    'font-family': 'SpoqaHanSansNeo-Regular',
    lineHeight: '26px',
  },
  body2: {
    size: '16px',
    'font-family': 'SpoqaHanSansNeo-Regular',
    lineHeight: '24px',
  },
  'body2-long': {
    size: '16px',
    'font-family': 'SpoqaHanSansNeo-Regular',
    lineHeight: '26px',
  },
  body3: {
    size: '14px',
    'font-family': 'SpoqaHanSansNeo-Regular',
    lineHeight: '22px',
  },
  'body3-long': {
    size: '14px',
    'font-family': 'SpoqaHanSansNeo-Regular',
    lineHeight: '24px',
  },
  caption: {
    size: '12px',
    'font-family': 'SpoqaHanSansNeo-Medium',
    lineHeight: '20px',
  },
  overline: {
    size: '10px',
    'font-family': 'SpoqaHanSansNeo-Medium',
    lineHeight: '18px',
  },
  label1: {
    size: '10px',
    'font-family': 'SpoqaHanSansNeo-Medium',
    lineHeight: '18px',
  },
  label2: {
    size: '11px',
    'font-family': 'SpoqaHanSansNeo-Medium',
    lineHeight: '16px',
  },
};

const Typography = styled.div<{ $level: string; $color?: string }>`
  font-family: ${(props) => typo[props.$level as keyof ITypography]['font-family']};

  font-style: normal;

  font-size: ${(props) => typo[props.$level as keyof ITypography].size};
  line-height: ${(props) => typo[props.$level as keyof ITypography].lineHeight};
  color: ${(props) => (props.$color ? `var(${props.$color})` : `var(--gray-900)`)};
`;

export default Typography;
