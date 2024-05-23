"use client";
import { Alert, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { Checkbox } from "flowbite-react";
import logo from "../assets/jigsaw.png";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { app } from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);

export function Navigation() {
  // const [user, setUser] = useState(null);


  const [user, setUser] = useState(null);
  
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user){ setUser(user);}
      else setUser(null);
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      alert("player created")
    );
  };
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("login successfull "))
      .catch((err) => console.log(err));
    setOpenModal(false);
  };

  const [openModal, setOpenModal] = useState(false);
  // const [email, setEmail] = useState("");

  const [openModal1, setOpenModal1] = useState(false);
  const [email1, setEmail1] = useState("");

  function onCloseModal1() {
    setOpenModal1(false);
    setEmail1("");
    setOpenModal(false);
    setEmail("");
  }

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }


  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        className="loginmodal"
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@mail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {/* <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label> */}
              </div>
              {/* <a href="/" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a> */}
            </div>
            <div className="w-full">
              <Button className=" borderline" onClick={loginUser}>
                Log in{" "}
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <button onClick={() => setOpenModal1(true)}>
                Create account{" "}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openModal1}
        size="md"
        onClose={onCloseModal1}
        className="signupmodal"
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form className="flex  max-w-md flex-col gap-4">
            <div>
              <div>
                <div className=" mb-2 block">
                  <Label htmlFor="Name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="name"
                  required
                  shadow
                  placeholder="Name"
                  className="mb-2"
                />
              </div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                required
                shadow
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput
                id="repeat-password"
                type="password"
                required
                shadow
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <a
                  href="/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  terms and conditions
                </a>
              </Label>
            </div>
            <Button type="submit" onClick={signupUser}>
              Make new account
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <Navbar fluid rounded className="w-full">
        <NavbarBrand href="">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="braintease" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BRAINTEASE
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {(user===null)&&
          <Button
            outline
            color="dark"
            size="sm"
            onClick={() => setOpenModal(true)}
          >
            LOGIN
          </Button>}
          {(user)&&
          <Button
            outline
            color="dark"
            size="sm"
            onClick={() => setUser(null)}
          >
            LOGOUT
          </Button>

          }
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/">Home</NavbarLink>

          <NavbarLink href="/Games">Games</NavbarLink>
          <NavbarLink href="/Leaderboard">Leaderboard</NavbarLink>
          <NavbarLink href="/contact">Contact </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
