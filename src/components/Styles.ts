import styled, { css } from 'styled-components';

export const ElasticCoat = styled.div<{ height: number }>`
    position: relative;
    color: #222;
    height: ${({ height }) => height}px;
    background-color: #f6f7f8;
    transition: 0.3s ease;
    overflow: hidden;
    font-weight: normal;
    text-transform: lowercase;
`;

export const Container = styled.div``;

export const LevelContainer = styled.div<{ isPrev?: boolean; isNext?: boolean }>`
    position: absolute;
    width: 100%;
    transform: ${({ isPrev, isNext }) => (isPrev ? 'translateX(-100%)' : isNext ? 'translateX(100%)' : 'translateX(0)')};
    transition: 0.3s;
`;

export const Text = styled.div`
    flex: 1;
    line-height: 1.4;
`;

const withArrow = css`
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICAgIDxwYXRoIGQ9Ik0xMi4yMTkgMi4yODFMMTAuNzggMy43MiAxOC4wNjIgMTFIMnYyaDE2LjA2M2wtNy4yODIgNy4yODEgMS40MzggMS40MzggOS05IC42ODctLjcxOS0uNjg3LS43MTl6IiAvPjwvc3ZnPg==)
        center no-repeat;
    background-size: 1em;
    content: '';
    height: 1em;
    opacity: 0.25;
    transition: 0.2s;
    width: 1em;
`;

const withEndingArrow = css`
    &:after {
        ${withArrow}
    }
    &:hover::after {
        opacity: 0.75;
    }
    &:active::after {
        opacity: 1;
    }
`;

const withStartingArrow = css`
    &:before {
        ${withArrow}
        padding: 1em;
        transform: scale(-1);
    }
    &:hover::before {
        opacity: 0.75;
    }
    &:active::before {
        opacity: 1;
    }
`;

const line = css`
    display: flex;
    align-items: center;
    user-select: none;
    transition: 0.2s;
`;

export const LineTitle = styled.div`
    ${line}
`;

export const LineEntry = styled.div<{ arrow: boolean }>`
    ${line}
    ${({ arrow }) => arrow && withEndingArrow}
    padding: 1em;
    cursor: pointer;

    &:hover {
        background-color: #d6ebf8;
    }
    &:active {
        background-color: rgba(90, 200, 250, 0.5);
    }
`;

export const ArrowBack = styled.div`
    display: flex;
    cursor: pointer;
    ${withStartingArrow}
`;
