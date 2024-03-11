import PropTypes from 'prop-types'

export function FormError ({campo,error}) {
    return (
        <span className="text-white">
            {campo} {error} 
        </span>
    )
}

FormError.propTypes = {
    campo:PropTypes.string,
    error:PropTypes.string
}