import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import item4 from './item4.png'
import item5 from './item5.png'
import item6 from './item6.png'
import item7 from './item7.png'
import item8 from './item8.png'
import item9 from './item9.png'
import item10 from './item10.png'
import item11 from './item11.png'
import item12 from './item12.png'
import item13 from './item13.png'
import item14 from './item14.png'
import item15 from './item15.png'
import item16 from './item16.png'
import item17 from './item17.jpg'
import item18 from './item18.jpg'
import item19 from './item19.jpg'
import item20 from './item20.jpg'
import item21 from './item21.jpg'
import item22 from './item22.jpg'
import item23 from './item23.jpg'
import item24 from './item24.jpg'

let all_item = [
    {
        id: 1,
        name: `J'adore L’Or Eau De Parfum 50ml`,
        brands: `Marc Jacobs`,
        image: item1,
        category: `women`,
        old_price: 150,
        new_price: 120,
        best_seller: "y"
    },
    {
        id: 2,
        name: `Marc Jacobs Coco Mademoiselle Eau De Parfum 35ml`,
        brands: `Marc Jacobs`,
        image: item2,
        category: `women`,
        old_price: 75,
        new_price: 60,
        best_seller: "y"
    },
    {
        id: 3,
        name: `Sauvage Eau De Toilette 60ml`,
        brands: `Versace`,
        image: item3,
        category: `men`,
        old_price: 55,
        new_price: 48,
        best_seller: "y"
    },
    {
        id: 4,
        name: `ALIEN Eau De Parfum 60ml`,
        brands: `Gucci`,
        image: item4,
        category: `women`,
        old_price: 103,
        new_price: 95,
        best_seller: "y"
    },
    {
        id: 5,
        name: `Daisy Wild Eau De Parfum 30ml`,
        brands: `Marc Jacobs`,
        image: item5,
        category: `women`,
        old_price: 60,
        new_price: 48,
        best_seller: "y"
    },
    {
        id: 6,
        name: `Eau de Parfum Spray 30ml`,
        brands: `Gucci`,
        image: item6,
        category: `women`,
        old_price: 122,
        new_price: 87,
        best_seller: "y"
    },
    {
        id: 7,
        name: `Honey Eau De Parfum 100ml`,
        brands: `Marc Jacobs`,
        image: item7,
        category: `women`,
        old_price: 55,
        new_price: 44,
        best_seller: "y"
    },
    {
        id: 8,
        name: `Gucci Guilty For Her Elixir Eau De Parfum 60ml`,
        brands: `Gucci`,
        image: item8,
        category: `women`,
        old_price: 126,
        new_price: 105,
        best_seller: "y"
    },
    {
        id: 9,
        name: `Gucci Guilty For Her Intense 30ml`,
        brands: `Gucci`,
        image: item9,
        category: `women`,
        old_price: 126,
        new_price: 105,
        best_seller: "y"
    },
    {
        id: 10,
        name: `K BY DOLCE&GABBANA Aftershave Lotion 100ml`,
        brands: `Dolce & Gabbana`,
        image: item10,
        category: `men`,
        old_price: 42,
        new_price: 53,
        best_seller: "y"
    },
    {
        id: 11,
        name: `K BY DOLCE&GABBANA Eau De Parfum 50ml`,
        brands: `Dolce & Gabbana`,
        image: item11,
        category: `men`,
        old_price: 47,
        new_price: 55,
        best_seller: "y"
    },
    {
        id: 12,
        name: `212 VIP Black Eau De Parfum 50ml`,
        brands: `Carolina Herrera`,
        image: item12,
        category: `men`,
        old_price: 47,
        new_price: 58,
        best_seller: "y"
    },
    {
        id: 13,
        name: `NOIR FOR MEN Extreme Eau De Parfum 50ml`,
        brands: `TOM FORD`,
        image: item13,
        category: `men`,
        old_price: 107,
        new_price: 88,
        best_seller: "y"
    },
    {
        id: 14,
        name: `NOIR FOR MEN Extreme Parfum 50ml`,
        brands: `TOM FORD`,
        image: item14,
        category: `men`,
        old_price: 60,
        new_price: 67,
        best_seller: "y"
    },
    {
        id: 15,
        name: `Pour Homme Eau De Toilette 100ml`,
        brands: `Versace`,
        image: item15,
        category: `men`,
        old_price: 57,
        new_price: 67,
        best_seller: "y"
    },
    {
        id: 16,
        name: `Man Eau Fraiche 30ml`,
        brands: `Versace`,
        image: item16,
        category: `men`,
        old_price: 57,
        new_price: 69,
        best_seller: "y"
    },
    {
        id: 17,
        name: `Eau de Parfum Spray 30ml`,
        brands: `Carolina Herrera`,
        image: item17,
        category: `women`,
        old_price: 59,
        new_price: 69,
        best_seller: "y"
    },
    {
        id: 18,
        name: `Good Girl Blush Eau de Parfum Spray 30ml`,
        brands: `Carolina Herrera`,
        image: item18,
        category: `women`,
        old_price: 60,
        new_price: 69,
        best_seller: "y"
    },
    {
        id: 19,
        name: `Very Good Girl Glam Parfum Spray 30ml`,
        brands: `Carolina Herrera`,
        image: item19,
        category: `women`,
        old_price: 63,
        new_price: 69,
        best_seller: "y"
    },
    {
        id: 20,
        name: `K BDevotion Intense Eau de Parfum Intense Spray 100ml`,
        brands: `Dolce & Gabbana`,
        image: item20,
        category: `women`,
        old_price: 48,
        new_price: 53,
        best_seller: "y"
    },
    {
        id: 21,
        name: `K by Dolce&Gabbana Eau de Parfum Intense Spray 100ml`,
        brands: `Dolce & Gabbana`,
        image: item21,
        category: `men`,
        old_price: 47,
        new_price: 53,
        best_seller: "y"
    },
    {
        id: 22,
        name: `Café Rose Eau de Parfum Spray 50ml`,
        brands: `TOM FORD`,
        image: item22,
        category: `women`,
        old_price: 101,
        new_price: 88,
        best_seller: "y"
    },
    {
        id: 23,
        name: `Black Orchid Eau de Parfum Spray 50ml`,
        brands: `TOM FORD`,
        image: item23,
        category: `men`,
        old_price: 107,
        new_price: 88,
        best_seller: "y"
    },
    {
        id: 24,
        name: `Eros Eau de Toilette Spray 100ml`,
        brands: `Versace`,
        image: item24,
        category: `men`,
        old_price: 57,
        new_price: 67,
        best_seller: "y"
    },
];

export default all_item;