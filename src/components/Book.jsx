import React, { useState} from 'react';
import { FaFacebook } from 'react-icons/fa';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';



const Book = () => {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [date, setdate] = useState("");
  const [adults, setadults] = useState("");
  const [kids, setkids] = useState("");
  const [tables, settables] = useState("");
  const [many, setmany] = useState("");




  const inputHandler = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'first':
        setfirst(value);
        break;
      case 'last':
        setlast(value);
        break;
      case 'email':
        setemail(value);
        break;
      case 'mobile':
        setmobile(value);
        break;
      case 'date':
        setdate(value);
        break;
        case 'adults':
        setadults(value);
        break;
        case 'kids':
        setkids(value);
        break;
        case 'tables':
        settables(e.target.options[e.target.selectedIndex].text);
        break;
        case 'many':
        setmany(value);
        break;
      // Add more cases if you have additional input fields
      default:
        break;
    }
  }
   

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!first || !last || !email || !mobile || !date || !adults || !kids || !tables || !many) {
      alert("PLEASE COMPLETE THE FORM");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "Bookings"), {
        first: first,
        last: last,
        email: email,
        mobile: mobile,
        date: date,
        adults: adults,
        kids: kids,
        tables: tables,
        quantity: many,
        // Add more fields as needed
      });
  
      console.log("Document written with ID: ", docRef.id);
      alert("YOU SUCCESSFULLY COMPLETED THE BOOKING");
      window.location.href = "#home";
      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div id="booking" className='flex flex-col justify-center items-center gap-10 py-10 lg:py-[10vh] bg-green-500'>
      <div className='flex flex-col w-full items-center'>
        <div className='rounded-lg flex flex-col justify-center items-center p-5  w-full'>
          <form onSubmit={submitHandler} className='w-full max-w-xl bg-white p-5 rounded-lg text-center'>
            {/* <input className='email-input' onChange={inputHandler} value={email} />
            <button className='email-button'>Submit</button> */}
            <h1 className='text-xl font-semibold mb-5'>FORM</h1>
            <label className='w-full flex flex-col md:flex-row gap-3 justify-center '>
                  <div className='flex flex-col gap-3'>
                    <input type="text" placeholder="First Name" className='p-2 border rounded-md' name='first' id='first' onChange={inputHandler} value={first}  />
                    <input type="text" placeholder="Last Name" className='p-2 border rounded-md' name='last' id='last' onChange={inputHandler} value={last}  />
                    <input type="email" placeholder="Email" className='p-2 border rounded-md' name='email' id='email' onChange={inputHandler} value={email}  />
                    <input type="text" placeholder="Phone number" className='p-2 border rounded-md' name='mobile' id='mobile' onChange={inputHandler} value={mobile}  />
                    {/* <h1 className='text-center font-semibold'>Date of Arrival</h1> */}
                    <div className='flex items-center gap-2'>
                      <h1 className='text-[12px] sm:text-sm'>Date of Arrival</h1>
                      <input type="date" placeholder="Time of Arrival" className='p-2 border rounded-md' name='date' id='date' onChange={inputHandler} value={date}  />
                    </div>
               
                  </div>
              <hr />
                
              <div>
              
              <div className='flex flex-col gap-3'>
                <input type="number" placeholder="Adults" className='p-2 border rounded-md' name='adults' onChange={inputHandler} value={adults} />
                <input type="number" placeholder="Kids" className='p-2 border rounded-md' name='kids' onChange={inputHandler} value={kids} />
                <select name="tables" className='p-2 border rounded-md'  onChange={inputHandler} value={tables}>
                  <option value="">Select Tables</option>
                  <option value="Tables">Tables</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Mushroom Tables">Mushroom Tables</option>
                  <option value="Tent">Tent</option>
                </select>
                <select name="many" className='p-2 border rounded-md'  onChange={inputHandler} value={many}>
                  <option value="">How many?</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>

            </label>
            <button className='text-white text-xl mb-5 font-semibold bg-green-800 px-3 py-2 rounded-lg hover:bg-white hover:text-green-600 duration-300 mt-5' >BOOK NOW</button>
              <p className='text-center font-semibold'>Enjoy your day!</p>
          </form>
        </div>
        <div className='mb-5 px-5 text-center xl:w-[50%]'>
          <h5>Your information is secure with us, and you'll receive a confirmation email within 24 hours. For any special requests or assistance, feel free to ask us on our social media accounts below.</h5>
          <div className='flex flex-col items-center lg:flex-row gap-3 m-4 justify-center'>
            <span className='flex text-[12px] sm:text-sm hover:text-green-600 duration-300 items-center'><FaFacebook className='size-[20px] mr-2 text-blue-600'/> <a href="https://www.facebook.com/paradisehillsandmountainresort">Paradise Hills and Mountain Resort</a></span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;