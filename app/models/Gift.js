

export class Gift {
    constructor(data) {
        this.id = data.id || ''
        this.tag = data.tag || ''
        this.url = data.url || ''
        this.opened = true || false
        this.creatorId = data.creatorId
        this.updatedAt = data.updatedAt
    }

    get giftsTemplate() {
        return /*html*/ `
        
        <div class="col-3 card">
        <p>${this.tag}</p>
        <img src="${this.url}" alt="">
        <p>${this.opened}</p>
        <button class="btn btn-success" onclick="app.GiftsSandboxController.openGifts()">Open Gift</button>
        </div>
        
        `
    }


}