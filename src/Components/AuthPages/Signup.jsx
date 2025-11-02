// components/PandaSignup.jsx
"use client";
import { registerapi } from "@/Config/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Signup.module.css";
import Link from "next/link";

export default function PandaSignup() {
  const router = useRouter()
  const leftEye = useRef();
  const rightEye = useRef();
  const leftBall = useRef();
  const rightBall = useRef();
  const [wrong, setWrong] = useState(false);
  const [Email,setEmail]=useState("")
const [Username,setUsername]=useState("")
const [Password,setPassword]=useState("")
  // Eyes follow cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [
        { eye: leftEye.current, ball: leftBall.current },
        { eye: rightEye.current, ball: rightBall.current },
      ];

      eyes.forEach(({ eye, ball }) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const radius = rect.width / 2 - 6;
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(radius, Math.sqrt(dx * dx + dy * dy));
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);

        ball.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



   const getdata = async () => {
    const res = await registerapi(Email,Password,Username)
    console.log(res)
    if(!res){
      alert(error)
    }
    if (res.message==="User registered successfully!") {
      alert("user created successfully ")
      router.push("/")
    }

   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWrong(true);
    setTimeout(() => setWrong(false), 2000);
await getdata()
  };

  return (
    <div className={styles["panda-container"]}>
      {/* Panda Animation */}
      <div className={styles.panda}>
        <div className={styles.ear}></div>
        <div className={styles.face}>
          <div className={styles["eye-shade"]}></div>
          <div className={styles["eye-white"]} ref={leftEye}>
            <div className={styles["eye-ball"]} ref={leftBall}></div>
          </div>
          <div className={`${styles["eye-shade"]} ${styles.rgt}`}></div>
          <div className={`${styles["eye-white"]} ${styles.rgt}`} ref={rightEye}>
            <div className={styles["eye-ball"]} ref={rightBall}></div>
          </div>
          <div className={styles.nose}></div>
          <div className={styles.mouth}></div>
        </div>

        <div className={styles.body}></div>
        <div className={styles.foot}>
          <div className={styles.finger}></div>
        </div>
        <div className={`${styles.foot} ${styles.rgt}`}>
          <div className={styles.finger}></div>
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit}>
        <div className={styles.hand}></div>
        <div className={`${styles.hand} ${styles.rgt}`}></div>
        <h1>Sign Up</h1>

        <div className={styles["form-group"]}>
          <input required className={styles["form-control"]} 
          onChange={(e)=>setUsername(e.target.value)}
          />
          <label className={styles["form-label"]}>Username</label>
        </div>

        <div className={styles["form-group"]}>
          <input type="email" required className={styles["form-control"]} 
          onChange={(e)=>setEmail(e.target.value)}
          />
          <label className={styles["form-label"]}>Email</label>
        </div>

        <div className={styles["form-group"]}>
          <input type="password" required className={styles["form-control"]} 
          onChange={(e)=>setPassword(e.target.value)}
          
          />
          <label className={styles["form-label"]}>Password</label>
        </div>
  
<Link href={"/Login"}>
<p className="text-md  mt-2">already  have account ?</p>
      
</Link>
       
        {wrong && <p className={styles.alert}>Oops! Check your details first.</p>}

        <button className={styles.btn}>Sign Up</button>
      </form>
    </div>
  );
}
