import gravatarUrl from './gravatar-url'



// const IMAGE_SIZE = 64
// const ZOOM_IMAGE_SIZE = 300
// const EXTRA_ROWS = 5

// export function createImages (window, numberOfImages) {
//   return Array.apply(null, Array(numberOfImages)).map(() => gravatarImage(window))
// }

// export function gravatarImage (window) {
//   const img = new window.Image()
//   const result = new gravatarUrl()

//   // changed a function a little bit to get into an array
//   img.src =  result.url + (IMAGE_SIZE) 
  
//   // aded id to be the same as email before crypting
//   img.id = result.email 

//   img.className = "forSearch"

  


//    img.addEventListener('click', (e) => {

//     const modal = document.createElement('div'); 
//     modal.id = "modal"    
//     document.getElementsByTagName('body')[0].appendChild(modal);

//     const modalContent = document.createElement('div')
//     modalContent.id = 'modal-content'
//     document.getElementById('modal').appendChild(modalContent)

//     const modalImage = document.createElement('img')
//     modalImage.id = 'modal-image'
//     modalImage.src = `${e.target.src.slice(0, -2)}${ZOOM_IMAGE_SIZE}`
//     document.getElementById('modal-content').appendChild(modalImage)

//     const modalEmail = document.createElement('div')
//     modalEmail.id = 'modal-email'
//     modalEmail.textContent = e.target.id
//     document.getElementById('modal-content').appendChild(modalEmail)

//     const modalButton = document.createElement('div')
//     modalButton.id = 'modal-button'
//     modalButton.classList = 'modal-button-cls'
//     modalButton.addEventListener('click', () => document.getElementById('modal').remove())
//     modalButton.textContent = 'Close'
//     document.getElementById('modal-content').appendChild(modalButton)

//    })
  
  

//     return img
// }


// export function calculateNumberOfImages (window, root) {
//   const currentImages = window.document.querySelectorAll('img').length
  

//   const width = root.offsetWidth + window.scrollX
//   const height = window.innerHeight + window.scrollY

//   const imagesPerRow = Math.floor(width / IMAGE_SIZE)
//   const imageRows = Math.floor(height / IMAGE_SIZE) + EXTRA_ROWS

//   return imagesPerRow * imageRows - currentImages
// }

// export default function (window, root) {
//   const imagesToCreate = calculateNumberOfImages(window, root)

//   if (imagesToCreate <= 0) {
//     return
//   }

//   createImages(window, imagesToCreate).forEach((image) => {
//     root.appendChild(image)
//   })
// }


