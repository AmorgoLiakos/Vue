import { reactive } from 'vue'

export const wishlist = reactive({
  wishList: [],
  removeFromList(b) {
    this.wishList = this.wishList.filter(book => book != b)
  },
  toggleWishList(b) {
    if (this.wishList.includes(b)) {
      this.wishList = this.wishList.filter(book => book != b)
    } else {
      this.wishList.push(b)
    }
  }

})