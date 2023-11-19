import './styles/global.css'

import Section from '@/components/section'

import Button from '@/components/ui/button'

function App() {
  return (
    <>
      <Button buttonText="hello world" buttonType="primary" buttonSize="small"></Button>
      <Button buttonText="hello world" buttonType="primary" buttonSize="medium"></Button>
      <Button buttonText="hello world" buttonType="primary" buttonSize="large"></Button>
      <Button buttonText="hello world" buttonType="secondary" buttonSize="large"></Button>
      <Button
        buttonText="hello world"
        buttonType="secondary"
        buttonSize="medium"
      ></Button>
      <Button buttonText="hello world" buttonType="secondary" buttonSize="small"></Button>
    </>
  )
}

export default App
