import Image from 'next/image';
import { FaStar, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const MainPage = () => {
  return (
    <>
      <div>
        <div>
          <h3 className='header'>My Resume</h3>
        </div>
        <div className='container'>
          <div>
            <Image
              className='profimage'
              src='/images/Idris.jpg'
              width={180}
              height={200}
              alt='idrispicture'
            />
          </div>
          <div className='prefiledata'>
            <table cellSpacing={20}>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Idris Muhd Tanimu</td>
                </tr>
                <tr>
                  <th>Date of birth:</th>
                  <td>20th March 1993</td>
                </tr>
                <tr>
                  <th>Gendar</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Nationality</th>
                  <td>Nigerian</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='specialize'>
          <span>
            Web Developer specializing in front-end development. Experienced
            with programming language of the Development cycle for dynamic web
            projects. Well-versed in numerous programming languages including
            React.js, Node.js, React Hook, MongoDB, Git, And Express with some
            background in Java. Background in project management, and customer
            relations. Got a great idea or taking some challenges that you need
            help solving? Believe me, I am a good listener.
          </span>
          <br />
          <div>
            <span>
              i
              <span className='hicon'>
                {' '}
                <FaHeart />
              </span>{' '}
              Cooding
            </span>
            <hr />
          </div>
        </div>
        <div className='prefiledata container2'>
          <span className='heading'>Working experience</span>
          <table cellPadding={10}>
            <thead>
              <tr>
                <th>Dates</th>
                <th>Work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>2019 - 2020</th>
                <td>
                  FrontEnd developer <span>(FoodiesHub)</span>
                </td>
              </tr>
              <tr>
                <th>2017 - 2019</th>
                <td>
                  FrontEnd developer <span>(findjobs)</span>
                </td>
              </tr>
              <tr>
                <th>2015 - 2017</th>
                <td>
                  FrontEnd developer <span>(Autocheck)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className='prefiledata container2'>
          <span className='heading'>Technical Skills</span>
          <table cellSpacing={20}>
            <tbody>
              <tr>
                <th>React</th>
                <td>
                  <i className='staricon'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                </td>
              </tr>
              <tr>
                <th>HTML</th>
                <td>
                  <i className='staricon'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                </td>
              </tr>
              <tr>
                <th>MySQL</th>
                <td>
                  <i className='staricon'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                </td>
              </tr>
              <tr>
                <th>JavaScripts</th>
                <td>
                  <i className='staricon'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                </td>
              </tr>
              <tr>
                <th>Node</th>
                <td>
                  <i className='staricon'>
                    <FaStar />
                    <FaStar />
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='contactme'>
          <span className='contactme'>
            <Link href='/ContactPage'>Contact me for more</Link>
          </span>
          {'  '} |{' '}
          <span className='hobies'>
            <Link href='/MyHobbies'>My Hobbies</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MainPage;
