import axios from "axios";
import { showMessage } from "@/utils";
const ins = axios.create()
ins.interceptors.response.use(resp => {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'danger'
        })
        return null;
    }
    return resp.data.data
})

export default ins