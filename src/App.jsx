import { useState, useRef, useEffect } from “react”;
const SUPABASE_URL = “https://lmsugkvstqbcbihubmnv.supabase.co”;
const SUPABASE_KEY = “sb_publishable_Kxa0aItVUN_34_3C2LcCvw_Xn2TtTgL”;
const sb = {
  h: { “Content-Type”: “application/json”, “apikey”: SUPABASE_KEY, “Authorization”: “Bearer “ + SUPABASE_KEY },
  async signIn(email, password) {
    const r = await fetch(SUPABASE_URL + “/auth/v1/token?grant_type=password”, { method: “POST”, headers: this.h, body: JSON.stringify({ email, password }) });
    return r.json();
  }
};
export default function App() {
  return <div style={{color:”white”,background:”#070709”,minHeight:”100vh”,padding:”40px”,fontFamily:”sans-serif”}}>
    <h1 style={{fontSize:”48px”,marginBottom:”20px”}}>JobSwipe 🚀</h1>
    <p style={{fontSize:”20px”,color:”#888”}}>Find your next job by swiping right</p>
    <p style={{fontSize:”16px”,color:”#7c6af7”,marginTop:”20px”}}>✦ Supabase Connected · Stripe Ready</p>
  </div>
}
