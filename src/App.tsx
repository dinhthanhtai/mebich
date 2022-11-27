import { useRef, useEffect } from 'react'
import reactLogo from './assets/avatar.jpg'
import './App.css'
import Card from './components/card'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import music from './assets/music.mp3';

function App() {
  const ref = useRef<HTMLVideoElement | null>(null);
  
  useEffect(() => {
    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 50;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      const root = document.getElementById('root');
      
      balls.push(ball);
      if (root) {
        root.append(ball);
      }
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

  }, [])

  const onClick = () => {
    ref.current?.play();
  }

  const notify = () => {
    navigator.clipboard.writeText('so tai khoan chua update')
    toast.success("Sao chép thành công!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000 
    })
  };

  const Info = [
    {
      name: 'bx-current-location',
      title:'Km 39, xã Ea Phê',
      href: 'https://goo.gl/maps/1ahcB5VjX7daiJ299'
    },
    {
      name: 'bx-phone',
      title:'0907033978',
      href: 'tel:+84905033978'
    },
    {
      name: 'bxs-bank',
      title:'chưa có'
    },
    {
      name: 'bxl-facebook',
      title:'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100023593521922'
    },
    {
      name: 'bx-alarm-snooze',
      title:'Zalo',
      href: 'https://zalo.me/0905033978'
    },
  ]

  return (
    <div className="App">
      <ToastContainer />
      <audio
        ref={ref}
        src={music}
        controls
        playsInline
        hidden
      />
      <div onClick={onClick}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h2 className='name'>Nguyễn Thị Bích Thủy</h2>
      <p className='bio'>Buôn bán các loại nông sản 🌾 🍚 ❤️</p>
      {
        Info.map((value) => {
          if (value.name === 'bxs-bank') {
            return <Card notify={notify} {...value} />
          }

          return <Card {...value} />
        })
      }
      <p className="read-the-docs">
        Create by her son 🧡
      </p>
    </div>
  )
}

export default App
