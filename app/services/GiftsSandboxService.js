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

        let foundGift = AppState.sandboxGifts.find(gift => gift.id == giftId)
        foundGift.opened = true

        const res = api.put(`/api/gifts/${giftId}`, foundGift)
        console.log('opening gifts', foundGift, AppState.sandboxGifts)
        AppState.emit('sandboxGifts')



    }

    async createGift(formData) {
        const res = await api.post('api/gifts', formData)
        const newGift = new Gift(res.data)
        console.log(res.data, '[Creating Gift]')
        AppState.sandboxGifts.push(newGift)
        AppState.emit('sandboxGifts')
    }

}

export const giftsSandboxService = new GiftsSandboxService