import React from 'react'
import { BoxCircle, Circle, CircleNoNumber, CircleNumber } from './CirclesStyles'

const Circles = ({ numbers, circles, firstC, secondC, thirdC }) => {
    return (
        <div>
                {
                    circles >= 1
                        ?   <BoxCircle>
                                <Circle width="12px">
                                    <CircleNoNumber background={firstC}></CircleNoNumber>
                                </Circle>
                                <Circle width="12px">
                                    <CircleNoNumber background={secondC}></CircleNoNumber>
                                </Circle>
                                <Circle>
                                    {
                                        numbers === true 
                                            ?   <CircleNumber background={thirdC}>+{circles}</CircleNumber>
                                            :   <CircleNoNumber background={thirdC}></CircleNoNumber>
                                    }
                                </Circle>
                            </BoxCircle>
                        :   <BoxCircle>
                                <Circle width="12px">
                                    <CircleNoNumber background={firstC}></CircleNoNumber>
                                </Circle>
                                <Circle width="12px">
                                    <CircleNoNumber background={secondC}></CircleNoNumber>
                                </Circle>
                            </BoxCircle>
                }
            </div>
    )
}

export default Circles
