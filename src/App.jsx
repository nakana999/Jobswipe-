import { useState, useRef, useEffect } from "react";
const SUPABASE_URL = "https://lmsugkvstqbcbihubmnv.supabase.co";
const SUPABASE_KEY = "sb_publishable_Kxa0aItVUN_34_3C2LcCvw_Xn2TtTgL";
const sb = {
  h: { "Content-Type": "application/json", "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY },
  async signUp(email, password, name) {
    const r = await fetch(SUPABASE_URL + "/auth/v1/signup", { method: "POST", headers: this.h, body: JSON.stringify({ email, password, data: { name } }) });
    return r.json();
  },
  async signIn(email, password) {
    const r = await fetch(SUPABASE_URL + "/auth/v1/token?grant_type=password", { method: "POST", headers: this.h, body: JSON.stringify({ email, password }) });
    return r.json();
  },
  async getJobs() {
    const r = await fetch(SUPABASE_URL + "/rest/v1/jobs?active=eq.true&select=*", { headers: this.h });
    return r.json();
  }
};
const C = { bg:"#070709", surface:"#0f0f12", border:"#1c1c22", accent:"#7c6af7", green:"#34d399", yellow:"#e8ff47", red:"#f87171", text:"#e2e2ec", muted:"#6b6b80" };
const mono = "monospace";
const serif = "sans-serif";
function Nav({ user, route, setRoute, onLogout }) {
  return (
    <nav style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid #1c1c22", background:"rgba(7,7,9,.94)", padding:"0 24px" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto", height:"58px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div onClick={() => setRoute("home")} style={{ cursor:"pointer", display:"flex" }}>
          <span style={{ fontFamily:serif, fontSize:"20px", fontWeight:900, color:C.text }}>Job</span>
          <span style={{ fontFamily:serif, fontSize:"20px", fontWeight:900, color:C.accent }}>Swipe</span>
        </div>
        <div style={{ display:"flex", gap:"8px", alignItems:"center" }}>
          {user ? (
            <div style={{ display:"flex", gap:"8px", alignItems:"center" }}>
              {[["swipe","Browse"],["matches","Matches"],["dashboard","Profile"]].map(([r,l]) => (
                <button key={r} onClick={() => setRoute(r)} style={{ padding:"7px 16px", borderRadius:"8px", fontSize:"11px", fontFamily:mono, cursor:"pointer", border:"none", background: route===r ? "#7c6af722" : "transparent", color: route===r ? "#a89eff" : C.muted }}>{l.toUpperCase()}</button>
              ))}
              <div style={{ width:34, height:34, borderRadius:"50%", background:C.accent, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:900 }}>{user.name[0].toUpperCase()}</div>
              <button onClick={onLogout} style={{ fontSize:"10px", color:C.muted, background:"none", border:"none", cursor:"pointer" }}>LOGOUT</button>
            </div>
          ) : (
            <div style={{ display:"flex", gap:"8px" }}>
              <button onClick={() => setRoute("auth")} style={{ padding:"8px 16px", borderRadius:"8px", fontSize:"11px", fontFamily:mono, cursor:"pointer", border:"1px solid #1c1c22", background:"transparent", color:C.muted }}>LOGIN</button>
              <button onClick={() => setRoute("auth")} style={{ padding:"8px 16px", borderRadius:"8px", fontSize:"11px", fontFamily:mono, cursor:"pointer", border:"none", background:C.accent, color:"#fff" }}>SIGN UP</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  const handleLogout = () => { setUser(null); setRoute("home"); };
  return (
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:mono }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0;}@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
      <Nav user={user} route={route} setRoute={setRoute} onLogout={handleLogout} />
      {route === "home" && (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"calc(100vh - 58px)", padding:"40px 16px", textAlign:"center" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:C.surface, border:"1px solid #1c1c22", borderRadius:"100px", padding:"6px 16px", marginBottom:"28px" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:C.green, animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:"10px", letterSpacing:"0.18em", color:C.muted }}>SUPABASE + STRIPE CONNECTED</span>
          </div>
          <h1 style={{ fontFamily:serif, fontSize:"clamp(44px,8vw,80px)", fontWeight:900, lineHeight:1.0, marginBottom:"20px", color:C.text }}>Find your next job<br />by <span style={{ color:C.accent }}>swiping right.</span></h1>
          <p style={{ fontSize:"15px", color:C.muted, lineHeight:1.8, marginBottom:"36px", maxWidth:"440px" }}>AI matches you to roles you will love. Sign up free and start swiping.</p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center" }}>
            <button onClick={() => setRoute("auth")} style={{ padding:"14px 32px", background:C.yellow, color:C.bg, border:"none", borderRadius:"10px", fontSize:"13px", fontWeight:700, cursor:"pointer" }}>START SWIPING</button>
            <button onClick={() => setRoute("swipe")} style={{ padding:"14px 32px", background:"transparent", color:C.muted, border:"1px solid #1c1c22", borderRadius:"10px", fontSize:"13px", cursor:"pointer" }}>BROWSE JOBS</button>
          </div>
        </div>
      )}
      {route === "auth" && (
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"calc(100vh - 58px)", padding:"40px 16px" }}>
          <div style={{ width:"100%", maxWidth:"400px" }}>
            <h1 style={{ fontFamily:serif, fontSize:"28px", fontWeight:900, color:C.text, textAlign:"center", marginBottom:"28px" }}>Create Account</h1>
            <div style={{ background:C.surface, border:"1px solid #1c1c22", borderRadius:"16px", padding:"28px" }}>
              {["Full Name","Email","Password"].map(label => (
                <div key={label} style={{ marginBottom:"16px" }}>
                  <label style={{ display:"block", fontSize:"10px", color:C.accent, letterSpacing:"0.14em", marginBottom:"7px" }}>{label.toUpperCase()}</label>
                  <input placeholder={label} type={label==="Password"?"password":label==="Email"?"email":"text"} style={{ width:"100%", background:"#070709", border:"1px solid #1c1c22", borderRadius:"10px", color:C.text, padding:"13px 16px", fontSize:"14px", outline:"none", boxSizing:"border-box" }} />
                </div>
              ))}
              <button onClick={() => { setUser({name:"User", email:"user@email.com"}); setRoute("swipe"); }} style={{ width:"100%", padding:"13px", background:C.accent, color:"#fff", border:"none", borderRadius:"10px", fontSize:"12px", fontWeight:700, cursor:"pointer", letterSpacing:"0.1em" }}>CREATE ACCOUNT</button>
            </div>
          </div>
        </div>
      )}
      {route === "swipe" && (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"40px 16px", minHeight:"calc(100vh - 58px)" }}>
          <h2 style={{ color:C.text, fontFamily:serif, fontSize:"24px", marginBottom:"24px" }}>Browse Jobs</h2>
          {[{company:"Stripe",role:"Product Designer",salary:"$140k",color:"#635BFF"},{company:"Linear",role:"Frontend Engineer",salary:"$150k",color:"#5E6AD2"},{company:"Vercel",role:"Growth Lead",salary:"$120k",color:"#ffffff"}].map((job,i) => (
            <div key={i} style={{ background:C.surface, border:"1px solid #1c1c22", borderRadius:"16px", padding:"24px", marginBottom:"12px", width:"100%", maxWidth:"460px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px" }}>
                <div>
                  <h3 style={{ color:C.text, fontFamily:serif, fontSize:"18px", marginBottom:"4px" }}>{job.role}</h3>
                  <p style={{ color:C.muted, fontSize:"13px" }}>{job.company}</p>
                </div>
                <span style={{ color:"#34d399", fontWeight:700, fontSize:"16px" }}>{job.salary}</span>
              </div>
              <div style={{ display:"flex", gap:"8px" }}>
                <button style={{ flex:1, padding:"10px", background:"#1a0505", border:"1px solid #f8717133", borderRadius:"8px", color:"#f87171", cursor:"pointer" }}>✗ SKIP</button>
                <button style={{ flex:1, padding:"10px", background:"#052010", border:"1px solid #34d39933", borderRadius:"8px", color:"#34d399", cursor:"pointer" }}>✓ APPLY</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {(route === "matches" || route === "dashboard") && (
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"calc(100vh - 58px)" }}>
          <h2 style={{ color:C.text, fontFamily:serif, fontSize:"24px" }}>{route === "matches" ? "Your Applications" : "Your Profile"}</h2>
        </div>
      )}
    </div>
  );
}
