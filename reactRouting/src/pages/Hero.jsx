import React from 'react'

function Hero() {
  
  return (
    <div>
      <h1 className='text-red-400 text-center text-4xl font-bold m-4'>Hero Contect</h1>
      <p className='p-5 font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non possimus ab officiis harum assumenda libero cupiditate ut, ipsam porro aliquid. Reprehenderit magnam nostrum repudiandae voluptatum vero voluptatem quasi natus?
      Aut cupiditate exercitationem rem! Optio, repudiandae facere. Nam dolor consequatur quibusdam molestiae dignissimos soluta ducimus praesentium, porro velit iusto nesciunt commodi provident at illum, vel in animi eaque culpa doloribus?
      Inventore quas assumenda temporibus, modi, veniam provident mollitia quos adipisci autem doloremque praesentium. Accusantium voluptas, expedita corporis ab vero voluptates quisquam ex quasi ratione necessitatibus voluptatibus praesentium ut, facilis voluptatum!
      Alias quaerat, aliquid dicta quisquam eius ipsum adipisci suscipit est doloremque perferendis nobis, ut ipsam itaque, nam minus optio? Fugiat quas quisquam cumque tempore, voluptates quia odio. Dolor, quod architecto.
      Non quas tempora odio optio inventore est, ipsa vel voluptates laboriosam dicta deleniti adipisci obcaecati ullam quibusdam, qui aliquid, sint maxime mollitia! Nobis sunt quis possimus laboriosam ullam illum id!
      Veritatis aliquid iste nisi enim, tempore nostrum ad dolore alias pariatur similique quibusdam perferendis aspernatur debitis eligendi vitae vel natus voluptatibus suscipit, officiis eius, voluptas quisquam rerum! Perferendis, fugit impedit.
      Consequuntur, in repudiandae. Eligendi animi repellat ratione necessitatibus placeat obcaecati voluptatibus nisi, deleniti, accusamus blanditiis esse suscipit provident et laborum molestiae facilis fugit cum delectus a voluptatum! Obcaecati, accusamus tempore?</p>

      <form  action="/login" method='get' className='form w-150 mx-auto'>
          <h1 className='text-center'>Reg Form</h1>
          <label className='form-text font-bold' htmlFor="name">Name</label>
          <input  pattern='[a-zA-Z ]+' title="Only letters and spaces are allowed" className='form-control' type="text" name="name" id="name" placeholder='Enter Your Name' required />

          <label className='font-bold form-text' htmlFor="email">Email</label>
          <input className='form-control' pattern='/^[a-zA-Z0-9._%+-]+@gmail\.com$/i' type="email" name="email" id="email" placeholder='Email' required />

          <button  className='btn btn-primary form-text'>Register</button>
      </form>
    </div>
  )
}

export default Hero
