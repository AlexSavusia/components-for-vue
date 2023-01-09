<template>
  <Header :user="user"/>
</template>

<script>

import Header from './Header.vue'
export default {
  name: "spin",
  components: {
    Header
  },data() {
    return {
      user: { id: 156,
        cart: 0,
        notice: 16,
        email: 'creatorus@gmail.com',
        usertype: 'author',
        userstatus: 'corporate',
        author_url: '/creatorus',
        display_name: 'Alexey Titov',
        balance: 222.51,
        on_demand: 26,
        is_author: true,
        is_affiliate: true,
        type: 'Author',
        type_label: 'c1',
        plan: {
          id: 10447,
          product_id: 38289,
          variation_id: 38290,
          till: '2022-12-21 07:55:39',
          free_items: 3,
          renew: true,
          owner: true
        },
        ava: 'https://yi-files.s3.amazonaws.com/users_loc/ava/AT.png',
        menu: [
          {
            url: '/yin/sales-summary',
            icon: 'sl-chart',
            name: 'Earnings'
          },
        ],
        left_menu: [
          {
            icon: 'sl-user',
            name: 'My Account',
            childs: [
              {
                url: '/my-account/edit-account',
                icon: 'sl-settings',
                name: 'Profile Settings'
              },
            ]
          }
        ],
        long: 0.0434
      },
    }
  },
  // props: ['user'],
}
</script>

<style scoped>

</style>