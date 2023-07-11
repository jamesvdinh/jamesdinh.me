import React  from "react";
import styled from "styled-components";
import './styles/styles.scss';
import * as palette from './styles/GlobalStyles';
import { distinctionData } from "../data/MenuData";

const Distinctions = () => {
    return (
        <>
            <Heading id="distinctions">Distinctions</Heading>
            <DistinctionsContainer>
                <TimelineContainer>
                    {distinctionData.map((item, index) => 
                        <TimelineEntry key={index} className="d-flex-2">
                            <TimelineBlank />
                            <div className="timeline-text d-flex-2">
                                <TextContainer>
                                    <span>
                                        <h6>{item.title}</h6> {item.description}
                                    </span>
                                    <div className="timeline-date">{item.date}</div>
                                </TextContainer>
                                <div className="t-square"></div>
                            </div>
                        </TimelineEntry>
                    )}
                </TimelineContainer>
            </DistinctionsContainer>
        </>
    )
}

export default Distinctions;

const Heading = styled.h1`
    color: ${palette.headingColor};
    padding-top: 70px;
    font-weight: normal;
`

const DistinctionsContainer = styled.div`
    margin: auto;
    max-width: 900px;
`

const TimelineContainer = styled.div`
    margin: 30px;
    padding: 0 1px;
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        width: 2px;
        background: ${palette.titleColor};
        top: 20px;
    }

    @media all and (max-width: 768px) {
        &::before {
            right: unset;
            top: 0;
        }
    }

    @media all and (max-width: 400px) {
        &::before {
            top: 25px;
        }
    }
`

const TimelineEntry = styled.div`
    margin-bottom: 22px;

    &:nth-child(even) {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    &:nth-child(even) .t-square {
        right: -6px;
        left: unset;
    }
    &:nth-child(even) .timeline-text {
        padding-left: 0;
        padding-right: 30px;
        text-align: right;
    }

    &:nth-child(odd) .timeline-text .timeline-date {
        text-align: left;
    }

    &:nth-child(even) .timeline-text .timeline-date {
        text-align: right;
    }

    &:nth-child(odd) .timeline-text span {
		    text-align: left;
	    }
    
    @media all and (max-width: 768px) {
        &:nth-child(2n) .timeline-text {
            padding-left: 30px;
            padding-right: 0;
            text-align: left;
        }

        &:nth-child(2n) .t-square {
            left: -6px;
            right: unset;
        }

        &:nth-child(even) .timeline-text span {
		    text-align: left;
	    }

        &:nth-child(even) .timeline-text .timeline-date {
            text-align: left;
        }
    }
`

const TimelineBlank = styled.div`
    width: 50%;

    @media all and (max-width: 768px) {
        & {
            display: none;
        }
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-flow: column;
`