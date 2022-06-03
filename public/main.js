// // const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const check = document.getElementsByClassName("fa-check");
const trash = document.getElementsByClassName("fa-trash-o");
const customerName = document.getElementById('customerName') 
// const addCareBtn = document.getElementsByClassName('addCareBtn')

// const seeCareBtn = document.getElementsByClassName('seeCareBtn')

// const updateForm = document.getElementsByClassName('updateForm')
// const plantMain = document.getElementsByClassName('plantMain')




Array.from(check).forEach(function(element) {
    element.addEventListener('click', function(){
  
     
      const postObjectID = this.parentNode.parentNode.parentNode.parentNode.id
      //console.log(`this ${postObjectID}`)
      const check = this.parentNode.parentNode.parentNode.id
      // console.log('check complete?', check)

      // console.log('this',postObjectID)
      
      if(check == 'true'){
        
      
        fetch('removeChecked', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'postObjectID': postObjectID
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          //console.log(data)
          window.location.reload(true)
        })
      
      }else if (check == 'false'){
         
        fetch('addChecked', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'postObjectID': postObjectID
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      }
    
    
    });
});

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const postObjectID = this.parentNode.parentNode.parentNode.parentNode.id
  
      fetch('deleteOrder', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'postObjectID':postObjectID
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
  });
  

// // Array.from(thumbUp).forEach(function(element) {
// //       element.addEventListener('click', function(){
// //         const name = this.parentNode.parentNode.childNodes[1].innerText
// //         const msg = this.parentNode.parentNode.childNodes[3].innerText
// //         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
// //         fetch('messages', {
// //           method: 'put',
// //           headers: {'Content-Type': 'application/json'},
// //           body: JSON.stringify({
// //             'name': name,
// //             'msg': msg,
// //             'thumbUp':thumbUp
// //           })
// //         })
// //         .then(response => {
// //           if (response.ok) return response.json()
// //         })
// //         .then(data => {
// //           console.log(data)
// //           window.location.reload(true)
// //         })
// //       });
// // });

// // Array.from(thumbDown).forEach(function(element) {
  // //   element.addEventListener('click', function(){
    // //     const name = this.parentNode.parentNode.childNodes[1].innerText
// //     const msg = this.parentNode.parentNode.childNodes[3].innerText
// //     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
// //     fetch('messagesTDown', {
// //       method: 'put',
// //       headers: {'Content-Type': 'application/json'},
// //       body: JSON.stringify({
// //         'name': name,
// //         'msg': msg,
// //         'thumbUp':thumbUp
// //       })
// //     })
// //     .then(response => {
// //       if (response.ok) return response.json()
// //     })
// //     .then(data => {
// //       console.log(data)
// //       window.location.reload(true)
// //     })
// //   });
// // });



const synth = window.speechSynthesis;
document.querySelector('#speak').addEventListener('click', run)

function run() {
  // const fName = document.querySelector('#firstName').value
  // const fMidName = document.querySelector('#firstMiddle').value
  // const lMidName = document.querySelector('#lastMiddle').value
  // const lName = document.querySelector('#lastName').value

  const customerName = document.getElementById('customerName').innerText 

  const yellText =  `${customerName}`

  //document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}