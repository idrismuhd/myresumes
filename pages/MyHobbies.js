import Link from 'next/link';

const MyHobbies = () => {
  return (
    <>
      <div className='contactme'>
        <Link href='/'>
          <span className='backtohome'> Back to home </span>
        </Link>
      </div>
      <h4>My Hobbies</h4>
      <ol>
        <li>
          <ol>Playing Games</ol>
        </li>
        <li>
          <ol>Football</ol>
        </li>
        <li>
          <ol>Learning new skills</ol>
        </li>
      </ol>
    </>
  );
};

export default MyHobbies;
