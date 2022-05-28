import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import LoadingButton from 'src/components/LoadingButton'
import auth from 'src/auth'
import { useNavigate } from "react-router-dom";

const Login = props => {
  const navigate = useNavigate();
  const [requesting, setReqState] = useState()
  const [formData, setFormData] = useState({ username: undefined, password: undefined })

  const handleSubmit = e => {
    e.preventDefault()
    setReqState(true)
    console.log(formData)
    setTimeout(() => {
      setReqState(false)
      auth.login(() => navigate('/dashboard'))
    }, 2000)
  }

  const handleInputChange = e => {
    let formDataCopy = formData
    formDataCopy[e.target.name] = e.target.value
    setFormData(formDataCopy)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Logue com sue e-mail e senha!</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        required
                        onChange={handleInputChange}
                        placeholder="email"
                        autoComplete="username"
                        name="username"
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput onChange={handleInputChange}
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        name="password"
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <LoadingButton loading={requesting} submit>
                          Login
                        </LoadingButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu a senha?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
