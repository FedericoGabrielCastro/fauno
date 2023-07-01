import { BeatLoader } from 'react-spinners'

export const SpinnerLoader = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <BeatLoader color='#2E3A23' loading={true} />
        </div>
    )
}
