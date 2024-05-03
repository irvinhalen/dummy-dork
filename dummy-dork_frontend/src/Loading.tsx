import { SettingsSharp } from '@mui/icons-material';

function Loading() {
  return (
    <div className='d-flex flex-row h-100 w-100 justify-content-center'>
        <h1 className='header-text'>
        <div className='error-text-container'>
            L
            <span id='cog-container'><SettingsSharp id='animated-cog' sx={{ fontSize: '15rem' }} /></span>
            ADING
        </div>
        </h1>
    </div>
  )
}

export default Loading;