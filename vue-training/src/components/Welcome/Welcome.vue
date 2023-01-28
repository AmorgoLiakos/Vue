<script>
import { wishlist } from '../Wislist/Wishlist'
  export default {
    data(){
      return {
        name: 'Liakos',
        wishlist,
        search: '',
        books: [
          {title: "book-one", author: "Nesbo", isFav: true, category: 'science'},
          {title: "book-two", author: "King", isFav: true, category: 'drama'},
          {title: "book-three", author: "Prekas", isFav: false, category:'fantasy'},
          {title: "book-four", author: "Prekas", isFav: false, category:'fantasy'},
          {title: "book-five", author: "Prekas", isFav: false, category:'fantasy'},
          {title: "book-six", author: "Prekas", isFav: false, category:'fantasy'},
          {title: "book-seven", author: "Prekas", isFav: true, category:'fantasy'},
          {title: "book-one", author: "Prekas", isFav: false, category:'fantasy'},
          {title: "book-nine", author: "Prekas", isFav: true, category:'fantasy'},
          {title: "book-ten", author: "Prekas", isFav: false, category:'fantasy'},
        ],
        wishList: []
      }
    },
    props: {
      firstName: String,
      lastName: {
        type: String,
        default: "Prekas"
      }
    },
    methods: {
      toggleFav (b){
        b.isFav = !b.isFav
      }
    },
    computed: {
      counter(){
        let bbc = 0
        this.books.forEach(b => {
          b.isFav ? bbc++ : bbc;
        })
        return bbc
      },
      searchBooks() {
        return this.books.filter(b => b.title.toLowerCase().includes(this.search.toLowerCase()) )
      }
    }
  }
</script>

<template>
  <section>

    <h2>Hello World from {{ firstName }} {{ lastName }}</h2>
    <input type="text" v-model="search" placeholder="search by title...">
    <div v-for="book in searchBooks" class="book-container" :class="{fav: book.isFav}" @click.self="toggleFav(book)">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.author }}</h4>

        <span class="wishlistIcon" :class="{wishlistIn: wishlist.wishList.includes(book)}" @click="wishlist.toggleWishList(book)" ></span>
    </div>

    <div> I have {{ counter }} Favourite Books</div>

    <h3>WishList</h3>
    <div v-for="book in wishlist.wishList" class="book-container wishlist-item">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.author }}</h4>
        <button @click="wishlist.removeFromList(book)">Remove from wishlist</button>
    </div>
  </section>
</template>

<style scoped>
  h2{
    color: green;
  }

  .book-container {
    border: 1px solid #000;
    margin-bottom: 10px;
    padding: 5px 15px;
    width: 300px;
    display: inline-block;
    position: relative;
  }
  .fav {
    background-color: pink;
  }

  input{
    margin-bottom: 30px;
    display: block;
  }
  .wishlistIcon{
      background-color: red;
      width: 50px;
      height: 50px;
      display: inline-block;
      position: absolute;
      top: 30px;
      right: 30px;
    }

  .wishlistIn{
    border: solid 3px green;
  }

  .wishlist-item{
    background-color: green;
  }
</style>