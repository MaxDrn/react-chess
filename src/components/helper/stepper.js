let stepper = {
    getAllSteps: function(squares, current, desired, ignore) {
        return {
            leftSteps: stepper.checkLeftSteps(current, desired, squares, ignore),
            rightSteps: stepper.checkRightSteps(current, desired, squares, ignore),
            downSteps: stepper.checkDownSteps(current, desired, squares, ignore),
            topSteps: stepper.checkTopSteps(current, desired, squares, ignore),
            topLeftSteps: stepper.checkTopLeftSteps(current, desired, squares, ignore),
            topRightSteps : stepper.checkTopRightSteps(current, desired, squares, ignore),
            downLeftSteps : stepper.checkDownLeftSteps(current, desired, squares, ignore),
            downRightSteps: stepper.checkDownRightSteps(current, desired, squares, ignore),
        }
    },
    inCheck: function(squares, current, desired) {
        let checkMatePositions = stepper.getAllSteps(squares, current, desired, false);
        console.log(checkMatePositions);
        return checkMatePositions === 0;
    },
    checkTopSteps: function(current, desired, squares, ignore) {
        let tempIndexUp = current;
        for (let i = 0; i < 8; i++) {
            tempIndexUp -= 8;
            if (ignore) {
                if (squares[tempIndexUp] !== null || tempIndexUp <= 0) {
                    if (squares[tempIndexUp] !== null) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if (squares[tempIndexUp] !== null || tempIndexUp <= 0) {
                return i;
            }
        }
    },
    checkDownSteps: function (current, desired, squares, ignore) {
        let tempIndexDown = current;
        for (let i = 0; i < 8; i++) {
            tempIndexDown += 8;
            if (ignore) {
                if (squares[tempIndexDown] !== null || tempIndexDown >= 56) {
                    if (squares[tempIndexDown] !== null) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if (squares[tempIndexDown] !== null || tempIndexDown >= 56) {
                return i;
            }
        }
    },
    checkLeftSteps: function (current, desired, squares, ignore) {
        let tempIndexLeft = current;
        let currentRowIndex = (current - (current % 8));
        for (let i = 0; i < 8; i++) {
            tempIndexLeft--;
            if (ignore) {
                if (tempIndexLeft < currentRowIndex || squares[tempIndexLeft] !== null) {
                    if (squares[tempIndexLeft] !== null) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if (squares[tempIndexLeft] !== null || tempIndexLeft < currentRowIndex) {
                return i;
            }
        }
    },
    checkRightSteps: function (current, desired, squares, ignore) {
        let tempIndexRight = current;
        let currentRowIndex = (current - (current % 8)) + 7;
        for (let i = 0; i < 8; i++) {
            tempIndexRight++;
            if (ignore) {
                if (tempIndexRight > currentRowIndex || squares[tempIndexRight] !== null) {
                    if (squares[tempIndexRight] !== null) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if (squares[tempIndexRight] !== null || tempIndexRight > currentRowIndex) {
                return i;
            }
        }
    },

    checkTopLeftSteps: function (current, desired, squares, ignore) {
        let tempIndexTopLeft = current;
        for (let i = 0; i < 8; i++) {
            tempIndexTopLeft -= 9;
            if (ignore) {
                if ((tempIndexTopLeft + 9) % 8 === 0 || squares[tempIndexTopLeft] !== null || tempIndexTopLeft <= 0) {
                    if (squares[tempIndexTopLeft] !== null && (tempIndexTopLeft + 9) % 8 !== 0) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if ((tempIndexTopLeft + 9) % 8 === 0 || squares[tempIndexTopLeft] !== null || tempIndexTopLeft <= 0) {
                return i;
            }
        }
    },
    checkTopRightSteps: function (current, desired, squares, ignore) {
        let tempIndexTopRight = current;
        for (let i = 0; i < 8; i++) {
            tempIndexTopRight -= 7;
            if (ignore) {
                if ((tempIndexTopRight + 7) % 8 === 7 || squares[tempIndexTopRight] !== null || tempIndexTopRight <= 0) {
                    if (squares[tempIndexTopRight] !== null && (tempIndexTopRight + 7) % 8 !== 7) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if ((tempIndexTopRight + 7) % 8 === 7 || squares[tempIndexTopRight] !== null || tempIndexTopRight <= 0) {
                return i;
            }
        }
    },
    checkDownLeftSteps: function (current, desired, squares, ignore) {
        let tempIndexDownLeft = current;
        for (let i = 0; i < 8; i++) {
            tempIndexDownLeft += 7;
            if (ignore) {
                if ((tempIndexDownLeft - 7) % 8 === 0 || squares[tempIndexDownLeft] !== null || tempIndexDownLeft >= 56) {
                    if (squares[tempIndexDownLeft] !== null && (tempIndexDownLeft - 7) % 8 !== 0) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if ((tempIndexDownLeft - 7) % 8 === 0 || squares[tempIndexDownLeft] !== null || tempIndexDownLeft >= 56) {
                return i;
            }
        }
    },
    checkDownRightSteps: function (current, desired, squares, ignore) {
        let tempIndexDownRight = current;
        for (let i = 0; i < 8; i++) {
            tempIndexDownRight += 9;
            if (ignore) {
                if ((tempIndexDownRight - 9) % 8 === 7 || squares[tempIndexDownRight] !== null || tempIndexDownRight >= 56) {
                    if (squares[tempIndexDownRight] !== null && (tempIndexDownRight - 9) % 8 !== 7) {
                        return i + 1;
                    }
                    return i;
                }
                continue;
            }
            if ((tempIndexDownRight - 9) % 8 === 0 || squares[tempIndexDownRight] !== null || tempIndexDownRight >= 56) {
                return i;
            }
        }
    },
};

export default stepper;