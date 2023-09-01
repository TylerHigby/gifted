

export class Gift {
    constructor(data) {
        this.id = data.id || ''
        this.tag = data.tag || ''
        this.url = data.url || ''
        this.opened = data.opened || true
        this.creatorId = data.creatorId
        this.updatedAt = data.updatedAt
    }

    get giftsTemplate() {
        return /*html*/ `
        
        <div class="col-3 m-2 card elevation-5">
        <p>${this.tag}</p>
        <img src="${this.url}" alt="" class="img-fluid">
       
        <button class="btn btn-success" onclick="app.GiftsSandboxController.openGifts('${this.id}')">Open Gift</button>
        </div>
        
        `
    }


}