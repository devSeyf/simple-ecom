import { Button } from "bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from "./Navbar"

export default function About( ) {
  return (

    <>
 <Navbar />
    <h1>hi About</h1>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
    </>
  )}