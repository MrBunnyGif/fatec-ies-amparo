import React from 'react'
import { CButton, CSpinner } from '@coreui/react'

export default ({ children, disabled, loading, onClick, submit }) => {
	return (
		<CButton type={submit && 'submit'} onClick={onClick} disabled={disabled || loading}> {children} {loading && <CSpinner size="sm" />} </CButton>
	)
}