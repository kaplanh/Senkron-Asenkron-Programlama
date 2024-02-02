# Synchronous-Asynchronous-Programming

![image](https://github.com/kaplanh/Synchronous-Asynchronous-Programming/assets/101884444/37e49132-4cc1-4bb6-855f-2bc7383166cb)

 **What's used in this app ?** | **How to run ?** | **Author** |
|----------|---------|------------
|Css | Once you clone the project|[Take a look at my other projects]()|
|Bootstrap | open index.html with Go Live in vs cod|[Visit me on Linkedin]()|
|Html |  |
|Api-Server||   

**What is this project about ?**
- In this project user can get any current country detail from certain api-server and can find a link which takes the user google map.

~~~css
.button { border: none; }
~~~














# Synchronous-Asynchronous-Programming



![Video_240201005720](https://github.com/kaplanh/Synchronous-Asynchronous-Programming/assets/101884444/96410212-c860-4320-a0c7-d54dd0a67b62)


[Click Me!](https://kaplanh.github.io/Synchronous-Asynchronous-Programming/)

## Description

The project aims to create a Checkout App using JS and Bootstrap.

## Problem Statement

- Your company has recently started on a project that aims to create a Checkout Page. So you and your colleagues have started to work on the project.

## Project Skeleton 

```
Checkout Page (folder)
|
|----readme.md                        
|----index.html
|----checkout.js
|----img (folder)
|----css (folder)
     |----index.css
     |----checkout.css
     |----universal.css

``` 


### At the end of the project, the following topics are to be covered;

- HTML
  - select
  - strong
  - del
   ```

 - CSS
 - Nested CSS
 - text-decoration: line-through
 ```
    .nav__list--btn {
    color: orangered;
    font-size: 14px;
    cursor: pointer;

    & i:hover {
        color: white;
        border-radius: 50%;
        background-color: #ff7623;
    }
    }

.line-through {
    text-decoration: line-through;
}
   
   ```

  
  
- JS
  - DOM Manipulations
    - innerHTML
    - innerText
    - textContent
     
  - DOM Selectors
  - querySelector
  - querySelectorAll
  - const productList = document.querySelector("div.main__product-painel"); //?basina div yazarak belirtirsek performans acisindan daha hizli olur
    
  - Events
    - click
    - load
  
  -e.target & e.currentTarget
    ```
         e.currentTarget.firstElementChild.innerText = "My Cart";
        //? NOT:e.target tiklanan elementi verirken e.currentTarget sabittir ve addEventListener in tanimlandigi elemandir burda navbarList  ve daha hizlidir
    ```
  - Capturing & Bubbling
  - DOM Traversing
    - nextElementSibling
    - e.target.closest(".main__product-info"
    - if (e.target.classList.contains("fa-plus"))
    - e.target.previousElementSibling.innerText++;
    - firstElementChild
    - children
   
  - localStorage & sessionStorage
 
  
  - Array Methods
  - forEach() & reducer()
     ```
    productTotalPriceDivs.forEach(eachProductTotalPriceDiv => {
        subtotal += parseFloat(eachProductTotalPriceDiv.innerText)
    });
    ```
 
      ```
    reduce()
    const subTotalAlternatif = [...productPriceDivs]; //reduce icin array a dönüstürmeliyiz
    let subtotal = subTotalAlternatif.reduce((acc, curr) => {
        return acc + parseFloat(curr.innerText); //parseFloat  stringten float yapar
    }, 0);

    ```
  
  - parseFloat
    ```
    const taxPrice = parseFloat(subtotal * localStorage.getItem("taxRate")); parseFloat  stringten float yapar

    ```

  
  - if else - if - else  conditions
  - Ternary
    ```
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0);

    ```
 
 
     

  - String Methods( toFixed() )
   ```
   productTotalPriceDiv.innerText = (productQuantity * productPrice).toFixed(2);
  ```

    

### At the end of the project, developers will be able to;

- improve coding skills within HTML, CSS and JS 

- use git commands (push, pull, commit, add etc.) and Github as a Version Control System.


## Notes

- You can use HTML, CSS and JS to complete this project.



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>




