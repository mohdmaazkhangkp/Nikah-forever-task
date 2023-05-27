import React from 'react'

const Form = () => {
  return (
    <div className='bg-white rounded-2xl opacity-100'>
      <form className='flex flex-col p-7'>
        <h5 className='text-sm font-bold  text-red-800 ml-3'>EMAIL ADDRESS:</h5>
      <input type="email" className='bg-gray-200 outline-none text-base font-bold py-2 px-3 mb-4 text-gray-600 rounded-full'/>

   
        <h5 className='text-sm font-bold  text-red-800 ml-3'>MOBILE NO:</h5>
        <div className='flex '>
          <select name="languages" className=' bg-gray-200 outline-none text-base font-bold py-2 px-3 mb-4 text-gray-600 rounded-l-full' >
            <option value="+91">India (+91)</option>
            <option value="+1">+1</option>
            <option value="+2">+2</option>
            <option value="+3">+3</option>
            <option value="+4">+4</option>
            <option value="+5">+5</option>
            <option value="+5">+5</option>
            <option value="+5">+5</option>
            <option value="+5">+5</option>
            <option value="+5">+5</option>
            <option value="+5">+5</option>
          </select>
          <input type="number" placeholder='Enter mobile number here' className='flex-1 bg-gray-200 outline-none text-base font-bold py-2 px-3 mb-4 text-gray-600 rounded-r-full' />
          
        </div>

        <h5 className='text-sm font-bold  text-red-800 ml-3'>PROFILE CREATE FOR:</h5>
        <select name="Profile create for" className='bg-gray-200 outline-none text-base font-bold py-2 px-3 mb-4 text-gray-600 rounded-full' >
          <option value="Choose one">Choose one</option>
          <option value="Self">Self</option>
          <option value="Daughter">Daughter</option>
          <option value="Sister">Sister</option>
          <option value="Relative/Friend">Relative/Friend</option>
          <option value="Son">Son</option>
        </select>

        <h5 className='text-sm font-bold  text-red-800 ml-3'>PASSWORD:</h5>
        <input type="password" className='bg-gray-200 outline-none text-base font-bold py-2 px-3 mb-4 text-gray-600 rounded-full' />
      
       
        <button className='bg-gradient-to-r from-[#ff6032] to-[#ff5057] rounded-2xl text-2xl font-semibold py-2 text-white mb-1'>REGISTER FREE</button>
        <p className='px-3 text-xs text-black text-center'>By clicking on <b >REGISTER FREE</b> you confirm that you accept the 
          <u> Terms &amp; Conditions</u> and <u>Privacy Policy</u></p>
      </form>
    </div>
  )
}

export default Form