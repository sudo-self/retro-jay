export default function Home() {
  return (
    <>
        <div className="navbar bg-slate-900">
        <button className="btn btn-outline relative px-6 py-3 transition-all ease-out bg-slate-900 rounded-md group-hover:bg-opacity-0 duration-400  text-xl text-white"><a href="https://retro-jay.vercel.app">SNES</a></button> 
        &nbsp;&nbsp;<button class="btn btn-info bg-slate-900 btn-outline text-white"><a href="https://sms.jessejesse.com">smsCHAT</a></button>&nbsp;&nbsp;
        <button class="btn btn-outline bg-slate-900 btn-outline text-white"><a href="https://retro.jessejesse.com">altServer</a></button>
</div>

           <iframe src="https://play.jessejesse.com" height="500px" width="500px"></iframe>
           <iframe src="https://server.jessejesse.com" height="500px" width="500px"></iframe>

<div className="avatar">
  <div className="w-24 rounded">
    <img src="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/Cash Light.gif" />
   <img src="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/qrcode.png" />
  </div>

   </div>

    </>
  )
}


