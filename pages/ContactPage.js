import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      <div className='contactme'>
        <Link href='/'>
          <span className='backtohome'> Back to home </span>
        </Link>
      </div>
      <div>
        <h5 className='mycont'>My contact details </h5>
        <span>
          <span className='title'> Tel:</span> +234-806-512-4632
        </span>
        <br />
        <span>
          <span className='title' placeholder='google@email.com'>
            {' '}
            Email:{' '}
          </span>{' '}
          <span>idrismuhd41@gmail.com</span>
        </span>
      </div>
      <hr />
      <div className='form'>
        <form action=''>
          <span>
            <input type='date' />
          </span>
          <br />
          <span>
            Your Name :
            <input type='text' />
          </span>
          <br />
          Your Email :
          <input type='email' />
          <br />
          <span>Your message:</span>
          <br />
          <textarea
            placeholder='Your message'
            name='yourMessage'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
