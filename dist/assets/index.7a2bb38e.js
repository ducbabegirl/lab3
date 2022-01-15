import{N as m}from"./vendor.6fc743b1.js";const u=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};u();const g={render(){return'<img src="https://picsum.photos/1024/400" />'}},d=[{createdAt:"2022-01-10T07:26:52.549Z",title:"Annie Stroman",img:"http://placeimg.com/640/480/fashion",desc:"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",id:"1"},{createdAt:"2022-01-10T20:33:27.477Z",title:"Yolanda Roob",img:"http://placeimg.com/640/480/sports",desc:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",id:"2"},{createdAt:"2022-01-11T03:36:13.571Z",title:"Rufus Konopelski",img:"http://placeimg.com/640/480/transport",desc:"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",id:"3"},{createdAt:"2022-01-10T04:45:32.422Z",title:"Ray Boyle",img:"http://placeimg.com/640/480/transport",desc:"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",id:"4"},{createdAt:"2022-01-10T10:56:22.073Z",title:"Jacqueline Hills",img:"http://placeimg.com/640/480/fashion",desc:"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",id:"5"},{createdAt:"2022-01-11T00:27:12.664Z",title:"Lee Abbott",img:"http://placeimg.com/640/480/people",desc:"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",id:"6"},{createdAt:"2022-01-10T14:41:53.412Z",title:"Muriel Okuneva",img:"http://placeimg.com/640/480/business",desc:"The beautiful range of Apple Natural\xE9 that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",id:"7"},{createdAt:"2022-01-10T16:35:33.134Z",title:"Tara Gutmann",img:"http://placeimg.com/640/480/business",desc:"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",id:"8"},{createdAt:"2022-01-10T21:17:56.264Z",title:"Rudy Trantow",img:"http://placeimg.com/640/480/city",desc:"The Football Is Good For Training And Recreational Purposes",id:"9"},{createdAt:"2022-01-10T23:35:59.996Z",title:"Wayne Lang V",img:"http://placeimg.com/640/480/food",desc:"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",id:"10"},{createdAt:"2022-01-10T14:22:10.945Z",title:"Esther Morar",img:"http://placeimg.com/640/480/nightlife",desc:"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",id:"11"},{createdAt:"2022-01-10T11:38:45.275Z",title:"Sonya Prohaska Sr.",img:"http://placeimg.com/640/480/food",desc:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",id:"12"},{createdAt:"2022-01-10T14:45:44.448Z",title:"Levi Turcotte",img:"http://placeimg.com/640/480/city",desc:"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",id:"13"},{createdAt:"2022-01-10T06:52:23.902Z",title:"Eddie Crona",img:"http://placeimg.com/640/480/technics",desc:"The beautiful range of Apple Natural\xE9 that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",id:"14"},{createdAt:"2022-01-10T15:09:36.220Z",title:"Heather Labadie",img:"http://placeimg.com/640/480/sports",desc:"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",id:"15"},{createdAt:"2022-01-11T03:02:51.996Z",title:"Daryl Hettinger I",img:"http://placeimg.com/640/480/nature",desc:"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",id:"16"},{createdAt:"2022-01-10T20:16:49.772Z",title:"Heather Miller",img:"http://placeimg.com/640/480/nightlife",desc:"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",id:"17"}],p={render(){return`
     <h2 class="font-semibold text-2xl uppercase my-4">Tin t\u1EE9c h\u1ECDc t\u1EADp</h2>  
        <p>\u0110\u0103ng k\xED</p>
        <div class="grid grid-cols-3 gap-8">
            ${d.map(e=>`
                    <div class="border p-3">
                        <a href="/news/${e.id}">
                            <img src="${e.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/news/${e.id}" class="font-semibold text-lg text-orange-500 ">${e.title}</a></h3>
                        <p>${e.desc}</p>
                    </div>
            `).join("")}
        </div>
        `}},h={render(){return`
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                   ${g.render()}
                </div>
                <div class="news">
                    ${p.render()}
                </div>
            </div>
        `}},x={render(){return`
        <div class="max-w-5xl mx-auto">
            <h1>About Page</h1>
        </div>`}},f={render(){return`
            <div class="max-w-5xl mx-auto">
                <h1>Product Page</h1>
            </div>`}},v={render(){return`<nav class="max-w-5xl mx-auto bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Home Page</a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">About Page</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Product Page</a></li>
                <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">ADMIN</a></li>
                <li><a href="/signup" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">\u0110\u0103ng nh\u1EADp</a></li>
            </ul>
        </nav>`}},b={render(){return'<div class="max-w-5xl mx-auto bg-blue-800 py-4 text-center text-white"><p>Copyright by Datlt</p></div>'}},y={render(e){const i=d.find(r=>r.id===e);return`
        <div class="max-w-5xl mx-auto">
            <h1>${i.title}</h1>
            <img src="${i.img}" />
            <p>${i.desc}</p>
        </div>
        `}},l={render(){return`
        <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="/admin/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page">Dashboard</a>
  
                  <a href="/admin/news"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
  
                  <a href="/admin/newList"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
  
                  <a href="/admin/orders"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Order</a>
  
                  <a href="/admin/settings"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
                    <a href="/"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME PAGE</a>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button type="button"
                  class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
  
                <div class="ml-3 relative group">
                  <div>
                    <button type="button"
                      class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="">
                    </button>
                  </div>
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-0">Your Profile</a>
  
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-1">Settings</a>
  
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button type="button"
                class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <div class="md:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/admin/dashboard" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page">Dashboard</a>
  
            <a href="/admin/news"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</a>
  
            <a href="/admin/products"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>
  
            <a href="/admin/orders"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders</a>
  
            <a href="/admin/settings"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Settings</a>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
              </div>
              <button type="button"
                class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <a href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your
                Profile</a>
  
              <a href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
  
              <a href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign
                out</a>
            </div>
          </div>
        </div>
      </nav>
        `}},w={render(){return`
        <div class="min-h-full">
            ${l.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Dashboard
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
            </div>
            </main>
        </div>
        `}},k={render(){return`
        
        <div>
 
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                     Ti\xEAu \u0111\u1EC1
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                   
                    
                      <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="">
                    </div>
                  </div>
                </div>
    
                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700">
                    M\xF4 T\u1EA3 
                  </label>
                  <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=""></textarea>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
                    `}},A={render(){return`
        <div class="min-h-full">
            ${l.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Qu\u1EA3n l\xFD tin t\u1EE9c
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Th\xEAm m\u1EDBi
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main>
        </div>
    
                    `}},T={render(){return`
        <div class="max-w-5xl mx-auto">
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>`}},B={render(){return`
        <table class="min-w-full divide-y divide-gray-200" >
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             ID
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IMG
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Desc
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
       ${d.map(e=>` 
       <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                </div>
                <div class="">
                  <div class="text-sm font-medium text-gray-900">
                   ${e.id}
                  </div>
                  <div class="text-sm text-gray-500">
                    
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
              ${e.title}
              </div>
              <div class="text-sm text-gray-500"></div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                
               <img class="h-10 w-10 rounded-full" src=" ${e.img}" alt="">
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
             ${e.desc}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>
        
       `).join("")}
      
       
          

          <!-- More people... -->
        </tbody>
      </table>
     
        `}},c=new m("/",{linksSelector:"a"}),a=e=>{document.getElementById("header").innerHTML=v.render(),document.getElementById("app").innerHTML=e,document.getElementById("footer").innerHTML=b.render()};c.on({"/":()=>{a(h.render())},"/about":()=>{a(x.render())},"/product":()=>{a(f.render())},"/news/:id":({data:e})=>{const{id:i}=e;a(y.render(i))},"/admin/dashboard":()=>{a(w.render())},"/admin/news":()=>{a(A.render())},"/admin/news/add":()=>{console.log("12"),a(k.render())},"/signup":()=>{a(T.render())},"/admin/newList":()=>{a(B.render())}});c.resolve();
