import { AppState } from "../AppState.js"
import { giftsSandboxService } from "../services/GiftsSandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawSandboxGifts() {
    console.log('drawing gifts')
    let gifts = AppState.sandboxGifts
    let content = ''
    gifts.forEach(gift => content += gift.giftsTemplate)
    setHTML('sandboxGifts', content)

}


export class GiftsSandboxController {
    constructor() {
        console.log('gifts sandbox controller')
        this.getGifts()
        AppState.on('sandboxGifts', _drawSandboxGifts)

    }

    async getGifts() {
        try {
            await giftsSandboxService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async openGifts(giftId) {
        try {
            console.log('opening gifts',)

            await giftsSandboxService.openGifts(giftId)
        } catch (error) {
            Pop.error(error)
        }

    }

    async createGift() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await giftsSandboxService.createGift(formData)
            console.log('creating new gift')
        } catch (error) {

        }
    }



}