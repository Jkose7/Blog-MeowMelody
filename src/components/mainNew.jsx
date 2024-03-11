import Proptypes from 'prop-types'

export function MainNew ({children}){
    return (
        <div className="bg-second-color dark:bg-primary-color h-full flex justify-center items-center rounded-sm">
            {children}
        </div>
    )
}

MainNew.propTypes = {
    children:Proptypes.string,
}