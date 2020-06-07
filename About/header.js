export default function (window) {
    const headerElem = window.document.createElement('header')
  
    const div = window.document.createElement('div')
    div.style = "position: relative; z-index: 3; transform: translate3d(0px, 0px, 0px); top: 0px"
  
    
  
    const titleElem = window.document.createElement('div')
    titleElem.style = "display: inline-block"
    titleElem.className = "navbar"

    const aFirstElement = window.document.createElement('a')
    aFirstElement.className = "back-dropbtn"
    aFirstElement.innerText = "Home"
    aFirstElement.href = "../index.html"

    const aSecondElement = window.document.createElement('a')
    aSecondElement.className = "back-dropbtn"
    aSecondElement.innerText = "About"
    aSecondElement.href = "#"

    const aThirdElement = window.document.createElement('a')
    aThirdElement.className = "back-dropbtn"
    aThirdElement.innerText = "Contact"
    aThirdElement.href = "../Contactform/index.html"

    const divDrop = window.document.createElement('div')
    divDrop.className = "dropdown"

    const dropBtn = window.document.createElement('button')
    dropBtn.className = "dropbtn"
    dropBtn.innerText = "Projects"

    const divDropContent = window.document.createElement('div')
    divDropContent.className = "dropdown-content"

    const aFirstProject = window.document.createElement('a')
    aFirstProject.className = "back-dropbtn"
    aFirstProject.href = "../Movies%20Libary/index.html"
    aFirstProject.innerText = "Project1"

    const aSecondProject = window.document.createElement('a')
    aSecondProject.className = "back-dropbtn"
    aSecondProject.href = "../Chuck%20Norris%20Api/index.html"
    aSecondProject.innerText = "Project2"

    const aThirdProject = window.document.createElement('a')
    aThirdProject.className = "back-dropbtn"
    aThirdProject.href = "../Task%20List/index.html"
    aThirdProject.innerText = "Project3"



  
      
    // pinning the header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1 && window.innerWidth > 720) {
        div.style = `position: fixed; z-index: 3; transform: translate3d(0px, 0px, 0px); top: 0px;width: 100%; background-color: white`
      } else if($(this).scrollTop() > 1 && window.innerWidth < 720) {
        div.style = `position: fixed; z-index: 3; transform: translate3d(0px, 0px, 0px); top: 0px;width: 100%; background-color: white`
      } else {
        div.style = "position: relative; z-index: 3; transform: translate3d(0px, 0px, 0px); top: 0px"
      }
      }) 
  
    
    headerElem.appendChild(div).appendChild(titleElem)
    titleElem.appendChild(aFirstElement)
    titleElem.appendChild(aSecondElement)
    titleElem.appendChild(aThirdElement)
    titleElem.appendChild(divDrop)
    divDrop.appendChild(dropBtn)
    divDrop.appendChild(divDropContent)
    divDropContent.appendChild(aFirstProject)
    divDropContent.appendChild(aSecondProject)
    divDropContent.appendChild(aThirdProject)
    return headerElem
  }

  