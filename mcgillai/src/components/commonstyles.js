import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const MAX_WIDTH = '1400px';

export const PrimaryFont = css`
    font-family: 'Helvetica Neue Bold Condensed', monospace;
    color: #ffffff;
`;

export const SecondaryFont = css`
    font-family: 'Montserrat', monospace;
    font-weight: 200;
    color: #ffffff;
`;

export const HeadingUnderline = styled('div')`
    font-family: 'Montserrat-Bold', monospace;
    font-size: 30px;
    color: #ffffff;
    display: inline;
    background: linear-gradient(to right, #722d60, #a81245);
    background-repeat: no-repeat;
    background-size: 85% 50%;
    background-position: 0% 80%;
    padding-left: 40px;
    padding-bottom: 10px;

    @media screen and (max-width: 550px) {
        font-size: 24px;
    }
`;

export const SectionBase = (props) => css`
    max-width: ${MAX_WIDTH};
    margin: auto;
    position: relative;
    display: block;

    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;

    overflow: auto;

    :first-child {
        padding-top: 50px;
    }

    background-repeat: no-repeat;
    background-size: contain;
    background-position: right top, right bottom;
    background-image: ${props.mobileBackgroundImage || 'none'};
`;

export const SectionTextContent = styled('div')`
    ${SecondaryFont};
    font-size: 18px;
    > p {
        margin-top: 0;
    }
`;

export const SectionLeftColumn = styled('div')`
    box-sizing: border-box;
    padding: 30px;
    @media screen and (min-width: 1260px) {
        max-width: 500px;

        ${(props) =>
            props.sticky &&
            css`
                > div:first-child {
                    position: sticky;
                    top: 120px;
                }
            `};
    }

    @media screen and (max-width: 900px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export const SectionRightColumn = styled('div')`
    flex-grow: 1;
    flex-basis: 0;
    padding-top: 20px;

    @media screen and (min-width: 640px) {
        padding-top: 0;
    }

    @media screen and (min-width: 1260px) {
        padding-top: 0;
        padding-left: 40px;
    }
`;

export const LeftContentPadding = css`
    @media screen and (min-width: 640px) {
        padding-left: 20px;
    }
`;

const FlexProps = css`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1260px) {
        flex-direction: row;
    }
`;

export const SectionContent = styled('div')`
    ${LeftContentPadding};
    ${(props) => props.columns && FlexProps};
    margin-top: 25px;
`;

export const Question = styled('div')`
    font-family: 'Montserrat-Bold';
    font-size: 24px;
    color: #ffffff;
    padding-top: 30px;
    @media only screen and (max-width: 767px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 467px) {
        font-size: 16px;
    }
`;

export const Answer = styled('div')`
    font-family: 'Montserrat';
    font-size: 20px;
    color: #e7e7e7;
    @media only screen and (max-width: 767px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 467px) {
        font-size: 12px;
    }
`;

export const GuideFont = styled('div')`
    font-family: 'Helvetica Neue Bold Condensed', monospace;
    font-size: 20px;
    color: #ffffff;
`;

export const ImageBackground = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: -webkit-transform 500ms;
    transition: transform 500ms;
    transition: transform 500ms, -webkit-transform 500ms;
`;

export const SubscribeButton = (props) => css`
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: 'Helvetica Neue Bold Condensed', monospace;
  font-weight:300;
  font-size: 36px;
  color:#FFFFFF;
  text-decoration: none !important;
  text-align:center;
  transition: all 0.2s;

  :visited {
    color:#FFFFFF;
  }

  :hover {
    color:#000000;
        background-color:#FFFFFF;
  }
`;
