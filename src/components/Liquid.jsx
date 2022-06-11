import styled from 'styled-components'
import { keyframes } from 'styled-components'

import Fill from './Fill'

import {ReactComponent as WaveSVG} from '../assets/test.svg'

const waveFront = keyframes`
    100%{
        transform: translate(-50%, 0);
    }
`

const waveBack = keyframes`
    100% {
        transform: translate(50%, 0);
    }
`

const OffSet = styled(Fill)`
    transform: translate(
        0, 
        ${({percent}) => `${percent === 100 ? 117 : percent}%`}
    );
`

const Wave = styled(WaveSVG)`
    width: 200%;
    position: absolute;
    bottom: 100%;
    margin: -1px;
    &:font{
        fill: ${({frontFill}) => frontFill};
        left: 0;
        animation: ${waveFront} 3s infinite linear;
    }
    &:back{
        fill: ${({backFill}) => backFill};
        right: 0;
        animation: ${waveBack} 1.5s infinite linear;
    }
`

const Liquid = ({percent, bg, opacity, frontFill, backFill}) => {
    return (
        <OffSet percent={percent} bg={bg} opacity={opacity}>
            <Wave className='front' frontFill={frontFill}></Wave>
            <Wave className='back' backFill={backFill}></Wave>
        </OffSet>
    )
}

export default Liquid