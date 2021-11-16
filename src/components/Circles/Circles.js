import React from 'react'
import { BoxCircle, Circle, CircleNoNumber, CircleNumber } from './CirclesStyles'

const Circles = ({circles}) => {
    return (
        <div>
                {
                    circles >= 1
                        ?   <BoxCircle>
                                <Circle width="12px">
                                    <CircleNoNumber></CircleNoNumber>
                                </Circle>
                                <Circle width="12px">
                                    <CircleNoNumber></CircleNoNumber>
                                </Circle>
                                <Circle>
                                    <CircleNumber>+{circles}</CircleNumber>
                                </Circle>
                            </BoxCircle>
                        :   <BoxCircle>
                                <Circle width="12px">
                                    <CircleNoNumber></CircleNoNumber>
                                </Circle>
                                <Circle width="12px">
                                    <CircleNoNumber></CircleNoNumber>
                                </Circle>
                            </BoxCircle>
                }
            </div>
    )
}

export default Circles
