import brain from './assets/brain.gif';
import questionMark from './assets/question-mark.gif';

function Background() {
  return (
    <div className='bg-div vh-100 w-100'>
        <div className='bg-wrap h-100 w-100'>
            <img className='brain' src={brain} alt='brain' />
            <img className='questionMark' src={questionMark} alt='question mark' />
        </div>
    </div>
  )
}

export default Background