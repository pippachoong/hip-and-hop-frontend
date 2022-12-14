// import { axios } from "../src_lib/axios"

console.log('login loaded')

let BASE_URL;
if( location.href.includes('netlify') ){
  BASE_URL = 'https://hipandhop.herokuapp.com';
} else {
  BASE_URL = 'http://localhost:3000';
}

$( function(){

  $('#login-form').on('submit', function(ev){

    ev.preventDefault()
    const email = $('#email').val()
    const password = $('#password').val()

    handleSubmit(email, password)

  }) 

})

const handleSubmit = async (email, password) => {

  console.log('handleSubmit:',email, password)

  try {

    const res = await axios.post(`${BASE_URL}/login`, {
      email: email,
      passwordDigest: password
    })

    console.log(`post response:`, res.data.token)

    localStorage.setItem("token", res.data.token)

    window.location.replace('/index.html')

  }catch(err){
    console.log(`error logging in:`, err)
    const $errorMsg = $('<p>Incorrect login credentials. Please try again.</p>')
    $('body').append($errorMsg)
  }


}