import ERRORS from "../../config/errors.js";


const findERR = (code) => {
    return ERRORS.filter((err) => err.code === code )
}

export{findERR};