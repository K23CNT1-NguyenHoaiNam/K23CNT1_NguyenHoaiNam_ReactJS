import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo2" />
        <h1 className="App-title">Infomation</h1>
        <p>Họ và tên: Nguyễn Hoài Nam</p>
        <p>Mã sinh viên:  2310900073</p>
        <p>Ngày sinh: 14/12/2005</p>
        <p>Điện thoại: 0983460347*</p>
        <p>Tên lớp: K23CNT1</p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;