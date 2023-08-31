import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"



class GiftsSandboxService {

    async getGifts() {
        const res = await api.get('api/gifts')
        console.log('getting sandbox gift', res.data)
        let mappedArr = res.data.map(dataObj => new Gift(dataObj))
        AppState.sandboxGifts = mappedArr
    }

    async openGifts(giftId) {

        const res = await api.put(`api/gifts/${giftId}`)
        console.log(res.data)

    }

    async createGift(formData) {
        const res = await api.post('api/gifts', formData)
        console.log(res.data, '[Creating Car]')
    }

}

export const giftsSandboxService = new GiftsSandboxService